import { memo } from 'react'

export const Small = memo(({ counter }) => {
  console.log('me volví a llamar :(')
  return (
    <small>
      {counter}
    </small>
  )
})
