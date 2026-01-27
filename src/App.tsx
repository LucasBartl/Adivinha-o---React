import { Header } from "./components/Header"
import styles from "./App.module.css"
export default function App(){

  function handleRestart(){
    alert("Reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <Header current={5} max={10} onRestart={handleRestart}></Header>
      
    </div>
    
  )

}