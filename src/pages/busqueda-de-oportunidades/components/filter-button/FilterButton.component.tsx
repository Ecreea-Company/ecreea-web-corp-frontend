import { useState } from 'react'
import styles from './FilterButton.module.scss'
import { IoIosFunnel } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import ListOfDropdown from '../list-of-dropdown/ListOfDropdown.component'
import { useWindowSize } from 'usehooks-ts'

interface FilterButtonProps{
  filters: any
}

const SlideButton = ({ filters }: FilterButtonProps) => {
  const { width } = useWindowSize()

  const [show, setShow] = useState(false)

  const handleButtonClick = () => {
    setShow(true)
  }

  const handleCloseClick = () => {
    setShow(false)
  }

  if (width > 960) return null

  return (
    <div className={styles.ButtonPopup}>
      <button className={styles.FilterBTN} onClick={handleButtonClick}>
        <IoIosFunnel className={styles.Icon}/>
        Filters
      </button>
      {show && (
        <div className={styles.Popup}>
          <button className={styles.CloseButton} onClick={handleCloseClick}>
            <IoCloseSharp />
          </button>
          <div className={styles.PopupContent}>

            <ListOfDropdown filters={filters}/>
        </div>
      </div>
      )}
    </div>
  )
}

export default SlideButton
