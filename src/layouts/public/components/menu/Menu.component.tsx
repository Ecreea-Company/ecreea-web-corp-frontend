// styles
import { LinkEcreea } from '@/components'
import styles from './Menu.module.scss'

// interface
export interface MenuProps {
  itemsList: MenuItemProps[]
  customStyle?: React.CSSProperties
  direction: 'row' | 'column'
}

export interface MenuItemProps {
  href: string
  text: string
  isDisabled: boolean
}

const Menu = ({
  itemsList,
  customStyle,
  direction
}: MenuProps): JSX.Element => {
  const menuDirection =
    direction === 'row' ? styles.Menu__row : styles.Menu__column
  return (
    <ul className={`${styles.Menu} ${menuDirection}`} style={customStyle}>
      {itemsList.map((item, index) => (
        <li key={index}>
          <LinkEcreea href={item.href} disabled={item.isDisabled}>
          {item.text}
          </LinkEcreea>
        </li>
      ))}
    </ul>
  )
}

export default Menu
