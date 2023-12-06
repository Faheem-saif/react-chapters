import styles from "./calOutput.module.css"

export default function CalOutput({displayValue}) {
  return (
    <div >
      <input  className={styles.display}  value={displayValue} readOnly/>
    </div>
  )
}
