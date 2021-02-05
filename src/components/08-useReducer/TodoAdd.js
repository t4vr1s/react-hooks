import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, reset, handleInputChange] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim() <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h2>Agregar TODO</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          className='form-control'
          autoComplete='off'
          placeholder='Aprender...'
          value={description}
          onChange={handleInputChange}
        />

        <button className='btn btn-primary mt-3 w-100' type='submit'>
          Agregar
        </button>
      </form>
    </>
  )
}
