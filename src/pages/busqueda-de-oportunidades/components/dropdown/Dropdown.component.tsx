import { ChangeEvent, MouseEvent, useState } from 'react'
import styles from './Dropdown.module.scss'
import { AiOutlineDown, AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'

export interface DropdownOption {
  slug: string
  name: string
}

export interface DropdownComponentProps {
  name: string
  slug: string
  options: DropdownOption[]
}

const DropdownOP = ({
  options,
  name,
  slug
}: DropdownComponentProps): JSX.Element => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSelectedOption((prevOption) => (prevOption === value ? '' : value))

    await router.push({
      pathname: '/busqueda-de-oportunidades',
      query: { ...router.query, [slug]: value, page: 1 }
    })
  }

  const handleOptionClick = async (event: MouseEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget

    if (value === selectedOption) {
      setSelectedOption('')
      await router.push({
        pathname: '/busqueda-de-oportunidades',
        query: { ...router.query, [slug]: '', page: 1 }
      })
    }
  }

  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.dropdownHeader} onClick={toggleOpen}>
          <h4>{name}</h4>
          <div className={styles.dropdownHeader__icon}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineDown />}
          </div>
        </div>
        {isOpen && (
          <div className={styles.dropdownOptions}>
            {options.map((option) => (
              <label key={option.slug} className={styles.checkbox}>
                <input
                  type="radio"
                  value={option.slug}
                  checked={selectedOption === option.slug}
                  onChange={handleOptionChange}
                  onClick={handleOptionClick}
                />
                {option.name}
              </label>
            ))}
          </div>
        )}
        <div className={styles.Line} />
      </div>
    </>
  )
}

export default DropdownOP
