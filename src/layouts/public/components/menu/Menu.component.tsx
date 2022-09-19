
// styles
import Link from 'next/link'
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

const Menu = ({ itemsList, customStyle, direction }: MenuProps): JSX.Element => {
  const menuDirection = direction === 'row' ? styles.Menu__row : styles.Menu__column
  return (
    <ul className={`${styles.Menu} ${menuDirection}`} style={customStyle} >
        {itemsList.map((item, index) => (
            <li key={index}>
              <Link href={item.href ? item.href : '/'} >
              <a className={item.isDisabled ? styles.Menu__link : ''}>{item.text}</a>
              </Link>
            </li>
        ))}
    </ul>
  )
}

export default Menu
