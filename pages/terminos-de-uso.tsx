import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { HeadDropdowns } from '@/components'
import { DataTerminosUso } from '@/data'
import { CuerpoTerminos } from '@/pages/terminos-de-uso/components'
import styles from '@styles/terminos-de-uso/TerminosDeUso.module.scss'

const Legal: NextPage = () => {
  return (
    <Public titlePage="Terminos de uso">
      <HeadDropdowns title='Términos de Uso' subtitle='Información Legal y Avisos'></HeadDropdowns>
      <div className={styles.Section}>
        <div className={styles.Line}/>
      </div>
      {DataTerminosUso.map((item, index) => (
        <CuerpoTerminos key={index} title={item.title} content={item.data} />
      ))}
    </Public>
  )
}

export default Legal
