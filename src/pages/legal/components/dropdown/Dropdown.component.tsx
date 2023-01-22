import { useState } from 'react'
import { ItemLegalProps } from '@/models'
import styles from './Dropdown.module.scss'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { ListLegal } from '..'

export interface DropdownProps{
  itemList: ItemLegalProps[]
}

const Dropdown = ({ itemList }: DropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(Array(itemList.length).fill(false))

  // función para abrir/cerrar el dropdown de forma independiente al presionar el botón
  function toggleDropdown (i: number) {
    const newIsOpen = [...isOpen]
    newIsOpen[i] = !newIsOpen[i]
    setIsOpen(newIsOpen)
  }

  return (
    <>
      {itemList.map((item, index) => (
      <div className={styles.Section} key={index}>
        <button onClick={() => toggleDropdown(index)}>
          <div className={styles.Title}>
            {item.title}
            <div className={styles.Title__icon}>
              {isOpen[index] ? <AiOutlineClose /> : <AiOutlinePlus />}
            </div>
          </div>
          </button>
          {isOpen[index] && (
            <ListLegal data={item.data}/>
          )}
        <div className={styles.Line}/>
      </div>
      ))}
    </>
  )
}

export default Dropdown
