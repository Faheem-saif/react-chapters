import TotdoHeading from './components/TotdoHeading'
import './App.css'
import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 

  return(
    <center>
      <TotdoHeading/>
      <TodoInput/>
      <TodosList/>
    </center>
  )
}

export default App
