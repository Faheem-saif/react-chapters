
// import { useState } from "react";
import Todoitem from "./Todoitem"
import styles from "./todolist.module.css"

export default function TodosList({todoitems,deletetodo}) {



   

  return (
  <div>
      <div className="container ">

        {todoitems.map(item => <Todoitem className={styles.todocon} ondeleteclick={deletetodo} key={item.name} todoName={item.name}  dueDate={item.date}></Todoitem>)}
   
    
</div>
</div>
  )
}
