import { MouseEvent, useEffect, useState } from 'react'

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
  }
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    savedTheme && setActiveTheme(savedTheme)
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    setActiveTheme(systemTheme)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return { activeTheme, handleClick }
}

export default useThemeMode
