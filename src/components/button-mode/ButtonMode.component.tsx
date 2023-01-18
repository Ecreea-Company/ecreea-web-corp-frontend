import { useThemeMode } from '@/hooks'
import { HiOutlineMoon } from 'react-icons/hi'
import { FiSun } from 'react-icons/fi'

const ButtonMode = (): JSX.Element => {
  const { activeTheme, handleClick } = useThemeMode()

  if (activeTheme === '') return <></>

  return (
    <a href="#" onClick={handleClick}>
      {activeTheme === 'dark' ? <HiOutlineMoon /> : <FiSun />}
    </a>
  )
}

export default ButtonMode
