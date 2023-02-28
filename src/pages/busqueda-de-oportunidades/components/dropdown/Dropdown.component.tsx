import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { AiOutlineDown, AiOutlineClose } from 'react-icons/ai'

interface Option {
  label: string
  value: string
}

const options: Option[] = [
  { label: 'Ejemplo1', value: '1' },
  { label: 'Ejemplo2', value: '2' },
  { label: 'Ejemplo3', value: '3' }
]

const Dropdown = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleOptionClick = (option: Option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleOpen}>
        <span>Dropdown</span>
        <div className={styles.dropdownHeader__icon}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineDown />}
        </div>
      </div>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.map((option) => (
            <label key={option.value} className={styles.checkbox}>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
      <div className={styles.Line}/>
    </div>
  )
}

export default Dropdown
