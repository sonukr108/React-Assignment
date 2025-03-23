import { useState } from 'react'
import './App.css'

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h1>{count}</h1>
      <div className="buttons">
        <button id='dec' onClick={() => {
          if (count > 0) {
            setCount((count) => count - 1)
          }
          else {
            alert("Cout is not be less than 0")
          }
        }}>Decrease</button>
        <span>&ensp;</span>
        <button id='inc' onClick={() => {
          if (count >= 100) {
            alert("Cout is not greater than 100")
          }
          else {
            setCount((count) => count + 1)
          }
        }
        }>Increase</button>
        <span>&ensp;</span>
        <button id='reset' onClick={() => {
          setCount(count = 0)

        }}>Reset</button>
      </div>
    </div>
  )
}

function App(){
  const [count, setCount] = useState(0)
  return (
    <>
      <Counter count={count} setCount={setCount} />
    </>
  )
}

export default App
