
import styles from "./calButton.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CalButton({onButtonClick}) {
  const buttonNames=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  return (
    <div className={styles.calbutton}>
     
     {buttonNames.map(button => 
     <button  className={`${styles.button} btn btn-warning`} onClick={() => onButtonClick(button)} >{button}</button> )}
      
      
    </div>
  )
}
