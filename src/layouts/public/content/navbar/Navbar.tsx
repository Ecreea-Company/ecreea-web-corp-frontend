import { FiSearch } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { useWindowSize } from '@/hooks'
import { Logo, Menu, Humburger, ButtonMode } from '../../components'
import styles from './Navbar.module.scss'
import { LinkEcreea } from '@/components'
import { centralMenuItems } from '@/data'

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
        <Menu
          itemsList={centralMenuItems}
          customStyle={{ gridArea: 'centerMenu' }}
          direction="row"
        />
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
