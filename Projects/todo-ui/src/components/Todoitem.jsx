
import styles from "./todoitem.module.css"
export default function Todoitem({todoName,dueDate}) {
  return (
    <div>
        <div className={`row  ${styles.kgrow}`}>
    <div className="col-6">
  {todoName}
    </div>
    <div className="col-4">
  {dueDate}
    </div>
    <div className="col-2">
    <button type="button" className={`btn btn-danger ${styles.kgbutton}`}>Delete</button>
    </div>
  </div>
      


    </div>
  )
}