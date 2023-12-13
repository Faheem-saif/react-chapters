
// import { useState } from "react";
import Todoitem from "./Todoitem"

export default function TodosList({todoitems}) {



   

  return (
  <div>
      <div className="container ">

        {todoitems.map(item => <Todoitem key =" " todoName={item.name}  dueDate={item.date}></Todoitem>)}
   
    
</div>
</div>
  )
}
