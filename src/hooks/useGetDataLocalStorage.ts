import { useEffect, useState } from 'react'

export default function useGetDataLocalStorage <T> (key: string) {
  const [data, setData] = useState<T>()

  useEffect(() => {
    setTimeout(() => {
      setData(JSON.parse(localStorage.getItem(key) ?? '[]'))
    }, 1000)
  }, [])

  return { data }
}
