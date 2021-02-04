import { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const LayouEffect = () => {
  const { counter, increment } = useCounter(1)
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

  const { data } = useFetch(url)
  const { quote } = !!data && data[0]

  const [boxSize, setBoxSize] = useState({})

  const pRef = useRef()

  useLayoutEffect(() => {
    setBoxSize(pRef.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-end'>
        <p ref={pRef}>{quote}</p>
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 2)}
      </pre>

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Siguiente Quote
      </button>
    </div>
  )
}
