import { useEffect, useState } from 'react'

import { HamburgerSharing } from '@/services'

import styles from './Sidebar.module.scss'
import { Menu } from '../../components'

const fadeIn = styles.Sidebar__fadeIn
const fadeOut = styles.Sidebar__fadeOut

const centralMenuItems = [
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

const Sidebar = (): JSX.Element => {
  const [sidebarStyles, setSidebarStyles] = useState('')

  const subscription$ = HamburgerSharing.getSubject()
  useEffect(() => {
    subscription$.subscribe((data) => {
      setSidebarStyles(data ? fadeIn : fadeOut)
    })
  })
  return (
    <aside className={`${styles.Sidebar} ${sidebarStyles}`}>
      <Menu itemsList={centralMenuItems} direction="column" />
    </aside>
  )
}

export default Sidebar
