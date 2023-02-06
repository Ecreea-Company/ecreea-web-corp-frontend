import { Flecha, Menu } from '@/pages/ecreea/components'
import { useWindowSize } from '@/hooks'
import styles from './DropMenu.module.scss'
import { DropItems } from '@/data'

const DropMenu = (): JSX.Element => {
  const { width } = useWindowSize()

  return (
    <div className={styles.Section}>
        {width < 960
          ? (
              <Flecha/>
            )
          : (
                <Menu
                  itemsList={DropItems}
                  direction= 'row'
                />
            )}
      </div>
  )
}

export default DropMenu
