
// styles
import styles from './Menu.module.scss'

// interface
interface MenuProps {
  itemsList: String[] | JSX.Element[]
  customStyle?: React.CSSProperties
  direction: 'row' | 'column'
}

const Menu = ({ itemsList, customStyle, direction }: MenuProps): JSX.Element => {
  const menuDirection = direction === 'row' ? styles.Menu__row : styles.Menu__column
  return (
    <ul className={`${styles.Menu} ${menuDirection}`} style={customStyle}>
        {itemsList.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
  )
}

export default Menu
