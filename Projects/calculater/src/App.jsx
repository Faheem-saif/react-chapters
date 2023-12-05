
// import './App.css'
import styles from "./app.module.css"
import CalButton from "./assets/components/calButton"

import CalHead from "./assets/components/calHead"
import CalOutput from "./assets/components/calOutput"

function App() {


  return (
    <div className={styles.calcontainer}>
    <CalHead />
    <CalOutput/>
    <CalButton/>

    </div>
  )
}

export default App
