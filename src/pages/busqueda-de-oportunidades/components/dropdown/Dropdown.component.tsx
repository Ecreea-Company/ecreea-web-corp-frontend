import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { AiOutlineDown, AiOutlineClose } from 'react-icons/ai'
import { DropdownOption } from '@/models'

interface DropdownComponentProps {
  width?: string
  name: string
  options: DropdownOption[]
}

const DropdownOP = ({ options, width, name }: DropdownComponentProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: DropdownOption) => {
    const alreadySelected = selectedOptions.find((selectedOption) => selectedOption.id === option.id)
    alreadySelected
      ? setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption.id !== option.id))
      : setSelectedOptions([...selectedOptions, option])
  }

  return (
    <>
        <div className={styles.dropdown} style={{ width }}>
          <div className={styles.dropdownHeader} onClick={toggleOpen}>
            <span>{name}</span>
            <div className={styles.dropdownHeader__icon}>
              {isOpen ? <AiOutlineClose /> : <AiOutlineDown />}
            </div>
          </div>
          {isOpen && options && Array.isArray(options)
            ? (
            <div className={styles.dropdownOptions}>
              {options.map((option) => (
                <label key={option.id} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={option.name}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionClick(option)}
                  />
                  {option.name}
                </label>
              ))}
            </div>
              )
            : null}
          <div className={styles.Line} />
        </div>
    </>
  )
}

export default DropdownOP
