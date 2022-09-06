import { useEffect, useState } from 'react'

import { HamburgerSharing } from '@/services'

import styles from './Sidebar.module.scss'
import { Menu } from '../../components'

const fadeIn = styles.Sidebar__fadeIn
const fadeOut = styles.Sidebar__fadeOut

const centralMenuItems = [
  'Creeadores',
  'Innovacion',
  'Inversores',
  'Sostenibilidad',
  'ecreea'
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
