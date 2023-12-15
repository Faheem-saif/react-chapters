
import { useState } from "react"
import styles from "./todoinputs.module.css"
export default function TodoInput({onNewitem}) {

  const[ todoName,setTodoname]=useState('');
  const[ newdate,setNewdate]=useState('');

  const handletodoName=(event)=>{
  setTodoname(event .target.value)

  }
  const handletodoDate=(event)=>{
  setNewdate(event .target.value)

  }
  const handleAddbutton =()=>{
    onNewitem(todoName,  newdate);
    setTodoname("");
    setNewdate("");
    

  }
  
  return (
    
    <div>
    
    <div className={`container text-center ${styles.incontain}`}>
  
  <div className={`row ${styles.kgrow}  `}>
    <div className="col-6">
    <input onChange={handletodoName} value={todoName}className={styles.inputt} type="text" placeholder="Enter Your Todo" />

    </div>
    <div className="col-4">
    <input onChange={handletodoDate} value={newdate} type="date"  className={styles.inputt}/>
    </div>
    <div className="col-2">

    <button onClick={handleAddbutton} type="button" className={`btn btn-success ${styles.kgbutton}
 `}>Add</button>
    </div>
  </div>
</div>
      
    </div>
  )
}
