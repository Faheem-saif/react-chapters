
// import { useState } from "react";
import styles from "./todolist.module.css"
export default function TodosList() {
// const initialTodovalues = [{
//    name:"Muhammad Faheem",
//    date:12/10/23

// },{


// }


// ]
// const [todoItem,setTodoItem]= useState(initialTodovalues);


    var name1 = "Faheem";
    var name2 = "Sami";
    var date = "12/10/23"

  return (
  <div>
      <div className="container ">
  
    <div className={`row  ${styles.kgrow}`}>
    <div className="col-6">
   {name1}
    </div>
    <div className="col-4">
   {date}
    </div>
    <div className="col-2">
    <button type="button" className={`btn btn-danger ${styles.kgbutton}`}>Delete</button>
    </div>
  </div>
  <div  className={`row    ${styles.kgrow}`}>
    <div className="col-6">
   {name2}
    </div>
    <div className="col-4">
   {date}
    </div>
    <div className="col-2">
    <button type="button" className={`btn btn-danger ${styles.kgbutton}`}>Delete</button>
    </div>
  </div>
</div>
</div>
  )
}
