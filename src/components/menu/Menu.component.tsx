// styles
import { LinkEcreea } from '@/components'
import styles from './Menu.module.scss'
import { ItemLinkProps } from '@/models'
import { useGetDataLocalStorage } from '@/hooks'

const Menu = (): JSX.Element => {
  const { data: dataNavbar } = useGetDataLocalStorage<ItemLinkProps[]>('navbarData')

  // console.log(dataNavbar)

  return (

    <ul className={styles.Menu}>
     {
      dataNavbar?.map((item: ItemLinkProps) => (
        <li key={item.id}>
          <LinkEcreea href={item.url} disabled={item.desactivar}>
            {item.name}
          </LinkEcreea>
        </li>
      ))

     }
    </ul>
  )
}

export default Menu
