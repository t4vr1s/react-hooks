import { useCallback, useState } from 'react'
import './memo.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  // regresa un funcion memorizada. que cambia cuando su
  const increment = useCallback(
    (num) => {
      setCounter(c => c + num)
    },
    [setCounter]
  )

  return (
    <div>
      <h1>CallbackHook {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  )
}
