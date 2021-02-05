import React from 'react'
export const TodoListItem = ({
  index,
  todo,
  handleDelete,
  handleToggle
}) => {
  return (
    // TodoListItem
    <li
      className='list-group-item'
    >
      <p
        className={todo.done ? 'complete' : ''}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>

      <button
        className='btn btn-danger'
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>

    </li>
  )
}
