import { Public } from '@/layouts'
import type { NextPage } from 'next'
import styles from '@styles/legal/Legal.module.scss'
import { Dropdown, ListLegal } from '@/pages/legal/components'
import { DataLegal } from '@/data'

const Legal: NextPage = () => {
  const firstData = DataLegal[0]
  const secondData = DataLegal.slice(1)

  return (
    <Public titlePage="Legal">
      <div className={styles.Section}>
        <h1 className={styles.Section__title}>Legal Ecreea</h1>
        <ListLegal data={firstData.data}/>
      </div>
      <Dropdown itemList={secondData}/>
    </Public>
  )
}

export default Legal
