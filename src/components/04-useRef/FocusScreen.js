import { useRef } from 'react'
import './use-ref.css'

export const FocusScreen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    // document.querySelector('input').select()
    inputRef.current.select()
    console.log(inputRef)
  }
  return (
    <div>
      <h1>Focus FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Tu nombre'
      />

      <button className='btn btn-primary mt-3' onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}
