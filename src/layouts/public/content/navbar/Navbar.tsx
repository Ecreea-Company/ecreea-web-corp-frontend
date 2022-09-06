import { FiSearch } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { useWindowSize } from '@/hooks'
import { Logo, Menu, Humburger, ButtonMode } from '../../components'
import styles from './Navbar.module.scss'

const centralMenuItems = [
  'Creeadores',
  'Innovacion',
  'Inversores',
  'Sostenibilidad',
  'ecreea'
]

const Navbar = (): JSX.Element => {
  const { width } = useWindowSize()

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo} style={{ gridArea: 'logo' }}>
        <Logo />
      </div>

      {width < 1200
        ? (
        <Humburger customStyle={{ gridArea: 'centerMenu' }} />
          )
        : (
        <Menu
          itemsList={centralMenuItems}
          customStyle={{ gridArea: 'centerMenu' }}
          direction="row"
        />
          )}

      <ul className={styles.Navbar__options}>
        <li>
          <a href="#">
            <FiSearch />
          </a>
        </li>
        <li>
          <a href="#">
            <BsGlobe2 />
          </a>
        </li>
        <li>
          <ButtonMode />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
