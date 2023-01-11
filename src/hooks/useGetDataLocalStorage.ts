import { useEffect, useState } from 'react'

export default function useGetDataLocalStorage<T> (key: string) {
  const [data, setData] = useState<T>()

  const timer = () =>
    setTimeout(() => {
      setData(JSON.parse(localStorage.getItem(key) as string))
    }, 1000)

  useEffect(() => {
    if (!localStorage.getItem(key)) {
      timer()
    } else {
      setData(JSON.parse(localStorage.getItem(key) as string))
    }

    return () => clearTimeout(timer())
  }, [])

  return { data }
}
