import { useState } from 'react'
import { IoMenu, IoCloseSharp } from 'react-icons/io5'

import { HamburgerSharing } from '@/services'

import styles from './Humburger.module.scss'

interface HumburgerProps {
  customStyle?: React.CSSProperties
}

const Humburger = ({ customStyle }: HumburgerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (): void => {
    HamburgerSharing.setSubject(!isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <a
        href="#"
        className={styles.Humburguer}
        style={customStyle}
        onClick={(e) => {
          e.preventDefault()
          handleClick()
        }}
      >
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </a>
    </>
  )
}

export default Humburger
