import { useState } from 'react'
import styles from './FilterButton.module.scss'
import { IoIosFunnel } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import ListOfDropdown from '../list-of-dropdown/ListOfDropdown.component'

interface FilterButtonProps{
  filters: any
}

const SlideButton = ({ filters }: FilterButtonProps): JSX.Element => {
  const [show, setShow] = useState(false)

  const handleButtonClick = () => {
    setShow(true)
  }

  const handleCloseClick = () => {
    setShow(false)
  }

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
            <ListOfDropdown filters={filters} width={'100%'}/>
        </div>
      </div>
      )}
    </div>
  )
}

export default SlideButton
