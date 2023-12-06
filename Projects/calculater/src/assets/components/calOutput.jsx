import styles from "./calOutput.module.css"

export default function CalOutput() {
  return (
    <div className={styles.output}>
      <input  className type={styles.display} placeholder="Your out put will be here" readOnly/>
    </div>
  )
}
