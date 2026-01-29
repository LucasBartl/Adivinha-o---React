import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import styles from "./App.module.css"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

export default function App() {

  function handleRestart() {
    alert("Reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart}></Header>
        <Tip tip="Linguagem de programaçao dinamica"></Tip>
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"></Input>
          <Button title="Confirmar"></Button>
        </div>
      </main>
    </div>

  )

}