import TotdoHeading from './components/TotdoHeading'
import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./app.module.css"

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


const newtodoslist=[
  {
  name:itemName,
  date:itemDate
  },
  ...todoItem,
];
setTodoItem(newtodoslist);
// console.log(`Item Name is:${itemName} item Date is:${itemDate}`);


}
 const handleDeletebutton = (todoname)=>{
  const newtodoitems=todoItem.filter(item => item.name != todoname);
  setTodoItem(newtodoitems);
  console.log(todoname);

 }

  return(
    <div className={styles.todocontainer}>
      <TotdoHeading/>
      <TodoInput  onNewitem={handleNewitem} />
      <div className={styles.itemcontainer}>
      <TodosList  deletetodo={handleDeletebutton} key="todo" todoitems= {todoItem} />
      </div>
      
    </div>
  )
}

export default App
