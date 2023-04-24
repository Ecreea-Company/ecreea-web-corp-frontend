import React from 'react'
import { TextfieldApiProps } from '@/models'
import styles from './TextfieldDropdown.module.scss'

interface DropdownProps {
  filteredData: TextfieldApiProps[]
}

const Dropdown = ({ filteredData }: DropdownProps): JSX.Element => {
  return (
    <div className={styles.dropdown}>
      {filteredData.length > 0 &&
        <ul className={styles.dropdownMenu}>
          {filteredData.map((item) => (
            <li key={item.id}>
              <a className={styles.dropdownItem} href={`/busqueda-de-oportunidades/${item.slug}`}>
                {item.name} - {item.tipo_contrato}
              </a>
            </li>
          ))}
        </ul>
          }
    </div>
  )
}

export default Dropdown
