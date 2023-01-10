import styles from './Navbar.module.scss'
import { FiSearch } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { useWindowSize } from '@/hooks'
import { LinkEcreea, Logo, ButtonMode, Menu, Humburger } from '@/components'

const Navbar = (): JSX.Element => {
  const { width } = useWindowSize()

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo} style={{ gridArea: 'logo' }}>
        <LinkEcreea href="/">
          <Logo />
        </LinkEcreea>
      </div>

      {width < 1200
        ? (
        <Humburger customStyle={{ gridArea: 'centerMenu' }} />
          )
        : (
        <Menu />
          )}

      <ul className={styles.Navbar__options}>
        <li className={styles.Navbar__items}>
          <LinkEcreea href="#" disabled={true}>
            <FiSearch />
          </LinkEcreea>
        </li>
        <li className={styles.Navbar__items}>
          <LinkEcreea href="#" disabled={true}>
            <BsGlobe2 />
          </LinkEcreea>
        </li>
        <li className={styles.Navbar__items}>
          <ButtonMode />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
