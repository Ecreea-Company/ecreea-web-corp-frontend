import { MouseEvent, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { DarkModeSharing } from '@/services'

interface ThemeModeProps {
  activeTheme: string
  handleClick: (e: MouseEvent<HTMLAnchorElement>) => void
}

const useThemeMode = (): ThemeModeProps => {
  // Estilos Dark Mode
  const [activeTheme, setActiveTheme] = useState('')

  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'
  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    setActiveTheme(inactiveTheme)
    DarkModeSharing.setSubject(inactiveTheme)
  }
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    savedTheme ? setActiveTheme(savedTheme) : setActiveTheme('light')
  }, [])

  useUpdateEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return { activeTheme, handleClick }
}

export default useThemeMode
