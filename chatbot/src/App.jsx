import { useState } from 'react'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Chatbot/>
    </>
  )
}

export default App
