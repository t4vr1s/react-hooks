import { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './use-ref.css'

export const RealExampleRef = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className='btn btn-primary mt-3'
        onClick={handleClick}
      >
        Show/Hide
      </button>
    </div>
  )
}
