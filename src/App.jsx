import { useState } from 'react'
import './App.css'
import CrocsList from './components/CrocsList'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <CrocsList/>
    </div>
  )
}

export default App
