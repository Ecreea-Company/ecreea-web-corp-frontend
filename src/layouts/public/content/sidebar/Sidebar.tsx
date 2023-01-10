import { useEffect, useState } from 'react'

import { HamburgerSharing } from '@/services'

import styles from './Sidebar.module.scss'
import { Menu } from '@/components'
// import { MenuItemProps } from '../../components/menu/Menu.component'

const fadeIn = styles.Sidebar__fadeIn
const fadeOut = styles.Sidebar__fadeOut

// const centralMenuItems: MenuItemProps[] = [
//   {
//     text: 'Creadores',
//     href: '/creadores',
//     isDisabled: false
//   },
//   {
//     text: 'Innovación',
//     href: '/innovacion',
//     isDisabled: false
//   },
//   {
//     text: 'Inversores',
//     href: '/inversores',
//     isDisabled: false
//   },
//   {
//     text: 'Blog',
//     href: '/blog',
//     isDisabled: false
//   },
//   {
//     text: 'Sostenibilidad',
//     href: '/sostenibilidad',
//     isDisabled: true
//   },
//   {
//     text: 'ecreea',
//     href: '/ecreea',
//     isDisabled: true
//   }
// ]

const Sidebar = (): JSX.Element => {
  const [sidebarStyles, setSidebarStyles] = useState('')

  const subscription$ = HamburgerSharing.getSubject()
  useEffect(() => {
    subscription$.subscribe((data) => {
      setSidebarStyles(data ? fadeIn : fadeOut)
    })
  })
  return (
    // <aside className={`${styles.Sidebar} ${sidebarStyles}`}>
    //   <Menu itemsList={centralMenuItems} direction="column" />
    // </aside>
    <h1>test</h1>
  )
}

export default Sidebar
