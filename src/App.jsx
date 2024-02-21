import { useState } from 'react'
import './App.css'
import ApiData from './component/ApiData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <h1>Homepage</h1>
      <ApiData />
    </div>
  )
}

export default App
