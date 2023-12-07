
// import './App.css'
import { useState } from "react"
import styles from "./app.module.css"
import CalButton from "./assets/components/calButton"

import CalHead from "./assets/components/calHead"
import CalOutput from "./assets/components/calOutput"

function App() {
 const [calVal,setcalVal] =useState("")
 const onButtonClick=(buttontext) => {
  if(buttontext==="C"){
 setcalVal("")
  }
  else if(buttontext==="="){
   const result=eval(calVal)
   setcalVal(result)
  }
  else{
    const newval=calVal+ buttontext
    setcalVal(newval)
  }
 }


  return (
    <>
    
   
    <div className={styles.calcontainer}>
    <div> <CalHead/></div>
    <CalOutput  displayValue={calVal}/>
    <CalButton onButtonClick={onButtonClick } />

    </div>
    </>
  )
}

export default App
