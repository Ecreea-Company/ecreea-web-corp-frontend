import { ItemLinkProps } from '@/models'
import { LinkEcreea } from '@/pages/ecreea/components'
import styles from './Menu.module.scss'
import { useState, useEffect } from 'react'

export interface MenuProps {
  itemsList: ItemLinkProps[]
  customStyle?: React.CSSProperties
  direction: 'row' | 'column'
}

const Menu = ({
  itemsList,
  customStyle,
  direction
}: MenuProps): JSX.Element => {
  const menuDirection =
    direction === 'row' ? styles.Menu__row : styles.Menu__column

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 48) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  const menuStyles = isScrolled
    ? `${styles.Menu} ${menuDirection} ${styles.Scrolled}`
    : `${styles.Menu} ${menuDirection}`

  return (
    <ul className={menuStyles} style={customStyle}>
      {itemsList.map((item, index) => (
        <li key={index}>
          <LinkEcreea href={item.url} disabled={item.desactivar}>
          {item.name}
          </LinkEcreea>
        </li>
      ))}
    </ul>
  )
}

export default Menu
