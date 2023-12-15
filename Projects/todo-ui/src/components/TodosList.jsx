
// import { useState } from "react";
import Todoitem from "./Todoitem"

export default function TodosList({todoitems,deletetodo}) {



   

  return (
  <div>
      <div className="container ">

        {todoitems.map(item => <Todoitem ondeleteclick={deletetodo} key={item.name} todoName={item.name}  dueDate={item.date}></Todoitem>)}
   
    
</div>
</div>
  )
}
