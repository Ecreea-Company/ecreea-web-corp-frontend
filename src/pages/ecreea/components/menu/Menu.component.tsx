import { ItemLinkProps } from '@/models'
import { LinkEcreea } from '@/pages/ecreea/components'
import styles from './Menu.module.scss'

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
  return (
    <ul className={`${styles.Menu} ${menuDirection}`} style={customStyle}>
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
