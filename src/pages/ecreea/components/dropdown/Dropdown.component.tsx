import { useEffect, useState } from 'react'
import { FlechaSharing } from '@/services'
import styles from './Dropdown.module.scss'
import { Menu } from '@/pages/ecreea/components'
import { MenuItemProps } from '@/pages/ecreea/components/menu/Menu.component'

const fadeIn = styles.Dropdown__fadeIn
const fadeOut = styles.Dropdown__fadeOut
const dropDataIn = styles.Data__dropDataIn
const dropDataOut = styles.Data__dropDataOut

const centralMenuItems: MenuItemProps[] = [
  {
    text: 'El Trabajo en Ecreea',
    href: '/ecreea/el-trabajo-en-ecreea',
    isDisabled: false
  },
  {
    text: 'Aprende con nosotros',
    href: '/ecreea/aprende-con-nosotros',
    isDisabled: false
  },
  {
    text: 'Buscar oportunidades',
    href: '/ecreea/buscar-oportunidades',
    isDisabled: true
  }
]

const Dropdown = (): JSX.Element => {
  const [DropdownStyles, setDropdownStyles] = useState('')
  const [DataStyles, setDataStyles] = useState('')

  const subscription$ = FlechaSharing.getSubject()
  useEffect(() => {
    subscription$.subscribe((data) => {
      setDropdownStyles(data ? fadeIn : fadeOut)
      setDataStyles(data ? dropDataIn : dropDataOut)
    })
  })

  return (
    <>
    <aside className={`${styles.Dropdown} ${DropdownStyles}`}/>
    <div className={`${styles.Data} ${DataStyles}`}>
      <Menu itemsList={centralMenuItems} direction="column"/>
    </div>
    </>
  )
}

export default Dropdown
