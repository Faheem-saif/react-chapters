
import styles from "./todoinputs.module.css"
export default function TodoInput() {
  
  return (
    
    <div>
    
    <div className="container text-center">
  
  <div className={`row ${styles.kgrow}  `}>
    <div className="col-6">
    <input className={styles.inputt} type="text" placeholder="Enter Your Todo" />

    </div>
    <div className="col-4">
    <input type="date"  className={styles.inputt}/>
    </div>
    <div className="col-2">

    <button type="button" className={`btn btn-success ${styles.kgbutton}
 `}>Add</button>
    </div>
  </div>
</div>
      
    </div>
  )
}
