import { useEffect, useState } from 'react'
import { FlechaSharing } from '@/services'
import styles from './Dropdown.module.scss'
import { Menu } from '@/pages/ecreea/components'
import { ItemLinkProps } from '@/models'

const fadeIn = styles.Dropdown__fadeIn
const fadeOut = styles.Dropdown__fadeOut
const dropDataIn = styles.Data__dropDataIn
const dropDataOut = styles.Data__dropDataOut

const centralMenuItems: ItemLinkProps[] = [
  {
    name: 'El Trabajo en Ecreea',
    url: '/ecreea/el-trabajo-en-ecreea',
    desactivar: false,
    id: 1
  },
  {
    name: 'Aprende con nosotros',
    url: '/ecreea/aprende-con-nosotros',
    desactivar: false,
    id: 2
  },
  {
    name: 'Buscar oportunidades',
    url: '/ecreea/buscar-oportunidades',
    desactivar: true,
    id: 3
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
