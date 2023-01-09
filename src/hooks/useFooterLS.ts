import { FooterApiProps } from '@/models'
import { useEffect, useState } from 'react'

const useFooterLS = () => {
  const [data, setData] = useState([] as FooterApiProps[])

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('footerData') ?? '[]'))
  }, [])

  return { data }
}

export default useFooterLS
