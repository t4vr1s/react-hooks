import { useEffect, useRef, useState } from 'react'

const initialState = {
  data: null,
  loading: true,
  error: null
}

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState(initialState)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState(initialState)

    fetch(url) //eslint-disable-line
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null
          })
        }
      })
  }, [url])

  return state
}
