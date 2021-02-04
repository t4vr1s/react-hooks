import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
  console.log('me volví a ejecutar')
  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment(2)
      }}
    >
      incrementar
    </button>
  )
})
