import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className='counterApp'>
        <h1>Counter App</h1>
        <span className='counterNumber'>{count}</span>
        <div className='counterButtons'>
          <button className='btn incrementBtn' onClick={increment}>Increment</button>
          <button className='btn decrementBtn' onClick={decrement}>Decrement</button>
          <button className='btn resetBtn' onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
