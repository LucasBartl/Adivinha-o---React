import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import styles from "./App.module.css"
import { Letter } from "./components/Letter"
export default function App(){

  function handleRestart(){
    alert("Reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <main>
      <Header current={5} max={10} onRestart={handleRestart}></Header>
      <Tip tip="Linguagem de programaçao dinamica"></Tip>
      <Letter value="R"> </Letter>
      </main>
    </div>
    
  )

}