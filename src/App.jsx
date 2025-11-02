import { useState } from 'react'
import './App.css'
import State from './Hooks/state'
import Reducer from './Hooks/Reducer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Reducer />
    </div>
  )
}

export default App
