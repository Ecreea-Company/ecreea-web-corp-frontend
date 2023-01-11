import styles from './Navbar.module.scss'
import { FiSearch } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { useGetDataLocalStorage, useWindowSize } from '@/hooks'
import {
  LinkEcreea,
  Logo,
  ButtonMode,
  MenuNavbarDesktop,
  MenuNavbarMobile
} from '@/components'
import { ItemLinkProps } from '@/models'

const Navbar = (): JSX.Element => {
  const { width } = useWindowSize()
  const { data } = useGetDataLocalStorage<ItemLinkProps[]>('navbarData')

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo} style={{ gridArea: 'logo' }}>
        <LinkEcreea href="/">
          <Logo />
        </LinkEcreea>
      </div>

      {width < 1200
        ? (
        <MenuNavbarMobile listItems={data} />
          )
        : (
        <MenuNavbarDesktop listItems={data} />
          )}

      <ul className={styles.Navbar__options}>
        <li className={styles.Navbar__items}>
          <LinkEcreea href="#" disabled={true}>
            <div style={{ maxWidth: '1rem' }}>
              <BsGlobe2 />
            </div>
          </LinkEcreea>
        </li>
        <li className={styles.Navbar__items}>
          <LinkEcreea href="#" disabled={true}>
            <div style={{ maxWidth: '1rem' }}>
              <FiSearch />
            </div>
          </LinkEcreea>
        </li>
        <li className={styles.Navbar__items}>
          <div style={{ maxWidth: '1rem' }}>
            <ButtonMode />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
