import TotdoHeading from './components/TotdoHeading'

import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {
 

  return(
    <center className='todo-container'>
      <TotdoHeading/>
      <TodoInput/>
      <div className='item-container'>
      <TodosList/>
      </div>
      
    </center>
  )
}

export default App
