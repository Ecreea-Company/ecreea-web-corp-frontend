import { Public } from '@/layouts'
import styles from '@styles/contacto/Contacto.module.scss'
import { Contactos } from '@/pages/contacto/components'
import type { NextPage } from 'next'
import { DataContacto } from '@/data'

const Contacto: NextPage = () => {
  return (
    <Public titlePage="Contacto">
      <>

      <Contactos itemList={DataContacto}></Contactos>

      <div className={styles.Section4}>
        <div className={styles.Titulo}>
          <h1 className={styles.Titulo__title}>Información</h1>
          <h1 className={styles.Titulo__title}>corporativa</h1>
        </div>
        <div className={styles.Container}>
          <div className={styles.Container__caja}>
            <p>Ecreea Company. <br/> Trujillo, Perú.</p>
          </div>
          <div className={styles.Container__caja}>
            <p><b>RUC:</b> 20605479686</p>
            <p><b>N° de Partida registral:</b> <br/> 10234567890987654</p>
          </div>
          <div className={styles.Container__caja}>
            <p>Inscrito en el registro <br/> público de Trujillo, Perú</p>
          </div>
        </div>
      </div>
    </>
    </Public>
  )
}

export default Contacto
