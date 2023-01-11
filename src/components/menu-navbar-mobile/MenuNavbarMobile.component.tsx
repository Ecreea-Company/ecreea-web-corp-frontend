import { useState } from 'react'
import { IoMenu, IoCloseSharp } from 'react-icons/io5'

import { LinkEcreea } from '@/components'

import styles from './MenuNavbarMobile.module.scss'
import { ItemLinkProps } from '@/models'

interface MenuNavbarDesktopProps {
  listItems: ItemLinkProps[] | undefined
}

const fadeIn = styles.Sidebar__fadeIn
const fadeOut = styles.Sidebar__fadeOut

const MenuNavbarMobile = ({
  listItems
}: MenuNavbarDesktopProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [sidebarStyles, setSidebarStyles] = useState('')

  const handleClick = (): void => {
    setIsOpen(!isOpen)
    setSidebarStyles(isOpen ? fadeOut : fadeIn)
  }

  return (
    <>
      <a
        href="#"
        className={styles.Humburguer}
        onClick={(e) => {
          e.preventDefault()
          handleClick()
        }}
      >
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </a>

      <aside
        // fadein
        className={`${styles.Sidebar} ${sidebarStyles}`}
      >
        <ul className={styles.Menu}>
          {listItems
            ? listItems.map((item: ItemLinkProps) => (
                <li key={item.id}>
                  <LinkEcreea href={item.url} disabled={item.desactivar}>
                    {item.name}
                  </LinkEcreea>
                </li>
            ))
            : null}
        </ul>
      </aside>
    </>
  )
}

export default MenuNavbarMobile
