/* eslint-disable quote-props */
import { useEffect, useState } from 'react'
import styles from './Dropdown.module.scss'
import { AiOutlineDown, AiOutlineClose } from 'react-icons/ai'
import { DropdownOption } from '@/models'
import { NextRouter } from 'next/router'

interface DropdownComponentProps {
  width?: string
  name: string
  options: DropdownOption[]
  router: NextRouter
}

const DropdownOP = ({ options, width, name, router }: DropdownComponentProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([])

  const filterKeyMap: any = {
    'Ubicación': 'ubicacion',
    'Tipo de Contrato': 'tipo_contrato',
    'Área de Trabajo': 'area_trabajo',
    'Modalidad': 'modalidad_trabajo'
  }

  const filterKey = filterKeyMap[name]

  useEffect(() => {
    const filterValue = router.query[filterKey]

    if (filterValue && typeof filterValue === 'string') {
      const selectedSlugs = filterValue.split(',')
      const newSelectedOptions = options.filter((option) => selectedSlugs.includes(option.slug))
      setSelectedOptions(newSelectedOptions)
    } else {
      setSelectedOptions([])
    }
  }, [router.query, options])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  /* const handleOptionClick = (option: DropdownOption) => {
    const alreadySelected = selectedOptions.find(
      (selectedOption) => selectedOption.slug === option.slug
    )
    const newSelectedOptions = alreadySelected
      ? selectedOptions.filter((selectedOption) => selectedOption.slug !== option.slug)
      : [...selectedOptions, option]

    setSelectedOptions(newSelectedOptions)

    const filterValue = newSelectedOptions.map((option) => option.slug).join(',')

    const newUrl: string = filterValue
      ? `${router.pathname}?${filterKey}=${filterValue}`
      : router.pathname

    router.push(newUrl).catch((err) => {
      console.error('Error al actualizar la URL:', err)
    })
  } */

  const handleOptionClick = (option: DropdownOption) => {
    // Verifica si el option ya está seleccionado
    const isSelected = selectedOptions.find((selectedOption) => selectedOption.slug === option.slug)

    // Si está seleccionado, lo deselecciona, de lo contrario, lo selecciona
    const newSelectedOptions = isSelected
      ? selectedOptions.filter((selectedOption) => selectedOption.slug !== option.slug)
      : [option]

    setSelectedOptions(newSelectedOptions)

    // Si hay opciones seleccionadas, actualiza el valor del filtro
    const filterValue = newSelectedOptions.length > 0 ? newSelectedOptions[0].slug : ''

    const newUrl: string = filterValue
      ? `${router.pathname}?${filterKey}=${filterValue}`
      : router.pathname

    router.push(newUrl).catch((err) => {
      console.error('Error al actualizar la URL:', err)
    })
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
              <label key={option.slug} className={styles.checkbox}>
                <input
                  type="checkbox"
                  value={option.slug}
                  checked={selectedOptions.some(
                    (selectedOption) => selectedOption.slug === option.slug
                  )}
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
