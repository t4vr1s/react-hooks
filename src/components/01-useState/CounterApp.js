import { useState } from 'react'
import './counter.css'

const initialState = {
  counter1: 10,
  counter2: 20,
  counter3: 30,
  counter4: 40
}

export const CounterApp = () => {
  const [counter, setCounter] = useState(initialState)
  const { counter1, counter2 } = counter
  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => setCounter({
          ...counter,
          counter1: counter1 + 1
        })}
      >
        +1
      </button>
    </>
  )
}
