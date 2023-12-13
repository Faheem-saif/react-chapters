import TotdoHeading from './components/TotdoHeading'

import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./app.module.css"
// import "./App.css"

function App() {

  return(
    <div className={styles.todocontainer}>
      <TotdoHeading/>
      <TodoInput/>
      <div className={styles.itemcontainer}>
      <TodosList/>
      </div>
      
    </div>
  )
}

export default App
