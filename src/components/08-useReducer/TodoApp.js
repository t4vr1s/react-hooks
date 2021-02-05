import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [] //eslint-disable-line
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) //eslint-disable-line
  }, [todos])

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
  }

  const handleDelete = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }

    dispatch(action)
  }

  const handleToggle = (id) => {
    const action = {
      type: 'toggle',
      payload: id
    }

    dispatch(action)
  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col'>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className='col'>
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  )
}
