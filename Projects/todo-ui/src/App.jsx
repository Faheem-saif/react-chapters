import TotdoHeading from './components/TotdoHeading'

import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./app.module.css"
import { useState } from 'react'
// import "./App.css"

function App() {
  const initialtodovalues = [{
   name:"Muhammad Faheem",
   date: "12/10/23"

},
{
  name:"Sami",
   date:"12/10/23"

},
{
  name:"Noman",
   date:"12/10/23"

}


]
 const [todoItem,setTodoItem]=useState(initialtodovalues);

const handleNewitem= (itemName ,itemDate) =>{
console.log(`Item Name is:${itemName} item Date is:${itemDate}`);

const newtodoslist=[...todoItem,
  {
  name:itemName,
  date:itemDate
  },
]
setTodoItem(newtodoslist);

}


  return(
    <div className={styles.todocontainer}>
      <TotdoHeading/>
      <TodoInput  onNewitem={handleNewitem} />
      <div className={styles.itemcontainer}>
      <TodosList key="todo" todoitems= {initialtodovalues} />
      </div>
      
    </div>
  )
}

export default App
