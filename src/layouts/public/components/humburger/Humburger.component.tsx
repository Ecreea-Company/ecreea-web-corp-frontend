import { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { GrFormClose } from 'react-icons/gr'

import { hamburgerSharing } from '@/services/HumburgerSharing.service'

import styles from './Humburger.module.scss'

interface HumburgerProps {
  customStyle?: React.CSSProperties
}

const Humburger = ({ customStyle }: HumburgerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (): void => {
    hamburgerSharing.setSubject(!isOpen)
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
        {isOpen ? <GrFormClose /> : <IoMenu />}
      </a>
    </>
  )
}

export default Humburger
