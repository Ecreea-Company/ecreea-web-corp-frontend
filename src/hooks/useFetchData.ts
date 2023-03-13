import { useEffect, useState } from 'react'

interface FetchState<T> {
  data?: T
  error?: Error
  loading: boolean
}

function useFetchData<T> (url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ loading: true })

  useEffect(() => {
    setState({ loading: true })

    fetch(url)
      .then(async (response) => {
        const data = await response.json()
        setState({ data, loading: false })
      })
      .catch((error) => {
        setState({ error, loading: false })
      })
  }, [url])

  return state
}

export default useFetchData
