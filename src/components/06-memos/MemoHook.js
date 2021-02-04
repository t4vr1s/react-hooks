import { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import './memo.css'

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000)
  const [show, setShow] = useState(true)
  // memoriza un valor
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Memorize <small>{counter}</small></h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Presiona
      </button>

      <button
        className='btn btn-outline-primary ms-5'
        onClick={() => setShow(!show)}
      >
        Show/Hide - {JSON.stringify(show)}
      </button>
    </div>
  )
}
