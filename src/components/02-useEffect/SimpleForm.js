import { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

const initialState = {
  name: '',
  email: ''
}

export const SimpleForm = () => {
  const [formState, setFormState] = useState(initialState)

  const { name, email } = formState

  useEffect(() => {
    console.log('hey')
  }, [])

  useEffect(() => {
    console.log('formState cambió')
  }, [formState])

  useEffect(() => {
    console.log('email cambió')
  }, [email])

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>Simple Form</h1>

      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email@correo.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}

    </>
  )
}
