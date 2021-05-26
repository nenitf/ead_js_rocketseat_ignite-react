import { useState } from 'react'

export function Contador(){
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  )
}
