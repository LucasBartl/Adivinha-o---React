import styles from "./App.module.css"
import { WORDS } from "./utils/words"
import { useEffect, useState } from "react"
import type { Challenge } from "./utils/words"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LetterUsed } from "./components/LetttersUsed"
import type { LetterUsedProps } from "./components/LetttersUsed"

export default function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("")
  const [letterUsed, serLetterUsed] = useState<LetterUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  /* Restart Game */

  function handleRestart() {
    alert("Reiniciar o jogo")
  }

  /* Inicio Game */

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWords = WORDS[index]
    setChallenge(randomWords)

    setScore(0)
    setLetter("")
    serLetterUsed([])
  }

  /* Confirme */
  function handleConfirm() {
    if (!challenge) {
      return
    }
    if (!letter.trim()) {
      return alert("Digite uma letra")
    }

    //Recuperando o valor digitado pelo usuário 
    const value = letter.toLocaleUpperCase()

    //Valida dentro do array lettersUsed se já existe o valor digitado
    const exist = letterUsed.find((used) => used.value.toLocaleUpperCase() === value)

    if (exist) {
      return alert("Letra já utilizada ")
    }

    //Filtra a quantidades de letras corretas
    const hits = challenge.word.toLocaleUpperCase().split("").filter((char) => { char === value }).length

    const correct = hits > 0
    const currentScore = score + hits


    serLetterUsed((state) => [...state, { value, correct }])
    setScore(currentScore)

    setLetter("")
  }


  useEffect(() => {
    startGame()
  }, [])

  if (!challenge) {
    return
  }



  return (
    <div className={styles.container}>
      <main>
        <Header current={score} max={10} onRestart={handleRestart}></Header>
        <Tip tip={challenge.tip}></Tip>


        <div className={styles.word}>
          {
            challenge.word.split("").map((letter, index) => {
              const letterused = letterUsed.filter((used)=> used.value.toLocaleUpperCase() === letter.toLocaleUpperCase())

              return <Letter key={index} value="" />

            }
            )
          }
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" value={letter}
            onChange={(e) => setLetter(e.target.value)}>
          </Input>
          <Button title="Confirmar" onClick={handleConfirm}></Button>
        </div>
        <LetterUsed data={letterUsed}></LetterUsed>
      </main>
    </div>

  )

}