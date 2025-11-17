import { useState } from 'react'
import './App.css'
import State from './Hooks/state'
import Reducer from './Hooks/Reducer'
import Effect from './Hooks/Effect'
import Ref from './Hooks/ref'
import ImpHdlExp from './Hooks/ImperativeHandleExample'
import MemoExp from './Hooks/MemoExample'
import CallBackExp from './Hooks/CallBackExp'
import ContextExp from './Hooks/ContextExp'


function App() {
  return (
    <div>
      <ContextExp />
    </div>
  )
}

export default App
