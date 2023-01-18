import { DarkModeSharing } from '@/services'
import { useState, useEffect } from 'react'

export default function useStateMode () {
  const [mode, setMode] = useState('')
  const subscription$ = DarkModeSharing.getSubject()
  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data) setMode(data as string)
    })
  })

  useEffect(() => {
    setMode(localStorage.getItem('theme') ?? '')
  }, [])

  return mode
}
