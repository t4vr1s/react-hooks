import { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import './memo.css'

export const Memorize = () => {
  const { counter, increment } = useCounter()
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* memo de react memoriza un componente (<Small>) */}
      <h1>Memorize <Small counter={counter} /></h1>
      <hr />
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
