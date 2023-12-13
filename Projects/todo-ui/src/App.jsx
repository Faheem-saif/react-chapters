import TotdoHeading from './components/TotdoHeading'

import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./app.module.css"
// import "./App.css"

function App() {
  const initialTodovalues = [{
   name:"Muhammad Faheem",
   date: "12/10/23"

},
{
  name:"Sami",
   date:"12/10/23"

}


]
 const [todoItem,setTodoItem]= useState(initialTodovalues);/


  return(
    <div className={styles.todocontainer}>
      <TotdoHeading/>
      <TodoInput/>
      <div className={styles.itemcontainer}>
      <TodosList key="todo" todoitems= {initialTodovalues} >
      </div>
      
    </div>
  )
}

export default App
