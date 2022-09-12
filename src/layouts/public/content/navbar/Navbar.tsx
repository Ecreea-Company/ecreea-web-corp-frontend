import { FiSearch } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { useWindowSize } from '@/hooks'
import { Logo, Menu, Humburger, ButtonMode } from '../../components'
import styles from './Navbar.module.scss'
import type { MenuItemProps } from '../../components/menu/Menu.component'
import Link from 'next/link'

const centralMenuItems: MenuItemProps[] = [
  {
    text: 'Creadores',
    href: '/creadores'
  },
  {
    text: 'Innovación',
    href: '/innovacion'
  },
  {
    text: 'Inversores',
    href: '/inversores'
  },
  {
    text: 'Sostenibilidad',
    href: '/sostenibilidad'
  },
  {
    text: 'ecreea',
    href: '/ecreea'
  }
]

const Navbar = (): JSX.Element => {
  const { width } = useWindowSize()

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo} style={{ gridArea: 'logo' }}>
        <Link href={'/'}>
          <a>
            <Logo />
          </a>
        </Link>
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
        <li className={styles.Navbar__items}>
          <a href="#">
            <FiSearch />
          </a>
        </li>
        <li className={styles.Navbar__items}>
          <a href="#">
            <BsGlobe2 />
          </a>
        </li>
        <li className={styles.Navbar__items}>
          <ButtonMode />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
