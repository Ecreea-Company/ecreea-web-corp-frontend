import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { AiOutlineDown, AiOutlineClose } from 'react-icons/ai'
import { DropdownOPProps, OpcionDropdownOPProps } from '@/models'

export interface DropdownComponentProps{
  nombre: string
  width?: string
  data: DropdownOPProps
}

const DropdownOP = ({ data, width }: DropdownComponentProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<OpcionDropdownOPProps[]>([])

  const handleOptionClick = (option: OpcionDropdownOPProps) => {
    selectedOptions.includes(option)
      ? setSelectedOptions(selectedOptions.filter((o) => o !== option))
      : setSelectedOptions([...selectedOptions, option])
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div key={data.id} className={styles.dropdown} style={ { width } }>
        <div className={styles.dropdownHeader} onClick={toggleOpen}>
          <span>{data.nombre}</span>
          <div className={styles.dropdownHeader__icon}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineDown />}
          </div>
        </div>
        {isOpen && (
          <div className={styles.dropdownOptions}>
            {data.opciones.map((opcion) => (
              <label key={opcion.id} className={styles.checkbox}>
                <input
                  type="checkbox"
                  value={opcion.nombre}
                  checked={selectedOptions.includes(opcion)}
                  onChange={() => handleOptionClick(opcion)}
                />
                {opcion.nombre}
              </label>
            ))}
          </div>
        )}
        <div className={styles.Line}/>
      </div>
    </>
  )
}

export default DropdownOP
