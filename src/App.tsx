import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleReduce = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <div>
        <h1>React Counter</h1>
        <p>{count}</p>
        <div>
          <button onClick={handleReduce}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
