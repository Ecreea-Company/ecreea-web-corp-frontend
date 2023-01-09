import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import styles from './Flecha.module.scss'
import { FlechaSharing } from '@/services'
import { Dropdown } from '@/pages/ecreea/components'

interface FlechaProps {
  customStyle?: React.CSSProperties
}

const Flecha = ({ customStyle }: FlechaProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (): void => {
    FlechaSharing.setSubject(!isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={styles.Container}>
        <a
        href="#"
        className={styles.Flecha}
        style={customStyle}
        onClick={(e) => {
          e.preventDefault()
          handleClick()
        }}
        >
          {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </a>
      </div>
      <Dropdown/>
    </>
  )
}

export default Flecha
