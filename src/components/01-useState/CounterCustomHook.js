import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterCustomHook = () => {
  const {
    state: counter,
    increment,
    decrement,
    reset
  } = useCounter(100)

  return (
    <div>
      <h1>Counter {counter}</h1>

      <hr />

      <button
        onClick={() => increment(2)}
        className='btn btn-primary'
      >
        + 1
      </button>

      <button
        className='btn btn-warning'
        onClick={reset}
      >
        Reset
      </button>

      <button
        onClick={() => decrement(2)}
        className='btn btn-primary'
      >
        - 1
      </button>
    </div>
  )
}
