// styles
import { LinkEcreea } from '@/components'
import styles from './MenuNavbarDesktop.module.scss'
import { ItemLinkProps } from '@/models'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface MenuNavbarDesktopProps {
  listItems: ItemLinkProps[] | undefined
}

const MenuNavbarDesktop = ({ listItems }: MenuNavbarDesktopProps): JSX.Element => {
  if (!listItems) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444" >
        <p className={styles.Skeleton}>
          <Skeleton count={1} />
        </p>
      </SkeletonTheme>
    )
  }

  return (
    <ul className={styles.Menu}>
      {listItems.map((item: ItemLinkProps) => (
        <li key={item.id}>
          <LinkEcreea href={item.url} disabled={item.desactivar}>
            {item.name}
          </LinkEcreea>
        </li>
      ))}
    </ul>
  )
}

export default MenuNavbarDesktop
