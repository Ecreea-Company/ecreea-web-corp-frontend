import { FooterApiProps } from '@/models'
import { useEffect, useState } from 'react'

const useFooterLS = () => {
  const [data, setData] = useState([] as FooterApiProps[])

  useEffect(() => {
    setTimeout(() => {
      setData(JSON.parse(localStorage.getItem('footerData') ?? '[]'))
    }, 1000)
  }, [])

  return { data }
}

export default useFooterLS
