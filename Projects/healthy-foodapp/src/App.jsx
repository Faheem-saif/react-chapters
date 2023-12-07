
import styles from "./app.module.css"
import Foodhead from './components/foodhead'
import Fooditems from "./components/fooditems"

function App() {

  return(
  <div className={styles.maincontainer}>
  <Foodhead  />
  <Fooditems/>
    </div>
  )
}

export default App
