import styles from "./calOutput.module.css"

export default function CalOutput() {
  return (
    <div>
      <input  className type={styles.output} placeholder="Your out put will be here" readOnly/>
    </div>
  )
}
