import { useState } from 'react'
import './App.css'
import State from './Hooks/state'
import Reducer from './Hooks/Reducer'
import Effect from './Hooks/Effect'
import Ref from './Hooks/ref'
import ImpHdlExp from './Hooks/ImperativeHandleExample'
import MemoExp from './Hooks/MemoExample'
import CallBackExp from './Hooks/CallBackExp'


function App() {
  return (
    <div>
      <CallBackExp />
    </div>
  )
}

export default App
