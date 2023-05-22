import { useState } from 'react'
import { DropdownMap } from '..'
import styles from './FilterButton.module.scss'
import { GrFormFilter } from 'react-icons/gr'
import { IoCloseSharp } from 'react-icons/io5'

const SlideButton = (): JSX.Element => {
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
        <GrFormFilter className={styles.Icon}/>
        Filters
      </button>
      {show && (
        <div className={styles.Popup}>
          <button className={styles.CloseButton} onClick={handleCloseClick}>
            <IoCloseSharp />
          </button>
          <div className={styles.PopupContent}>
            <DropdownMap width={'100%'}/>
        </div>
      </div>
      )}
    </div>
  )
}

export default SlideButton
