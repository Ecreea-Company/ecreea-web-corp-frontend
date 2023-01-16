import { Public } from '@/layouts'
import styles from '@styles/contacto/Contacto.module.scss'
import { Contactos, Titulos } from '@/pages/contacto/components'
import type { NextPage } from 'next'
import { DataContactoTalento, DataContactoCorporativos, DataContactoInversores } from '@/data'

const Sostenibilidad: NextPage = () => {
  return (
    <Public titlePage="Contacto">
      <>
      <div className={styles.Section}>
        <div className={styles.Fondo}>
          <div className={styles.Container1}>
            <h1 className={styles.Container1__title}>
            Siempre
            </h1>
            <h1 className={styles.Container1__title}>
            conectados
            </h1>
          </div>
        </div>
        <div className={styles.Container2}>
          <Titulos title={'Contacto'} subtitle={'Inversores y Accionistas'}/>
          <Contactos itemList={DataContactoInversores}></Contactos>
          <div className={styles.Line}></div>
        </div>
      </div>

      <div className={styles.Section2}>
        <Titulos title={'Contactos'} subtitle={'Corporativos'}/>
        <div className={styles.Texto}>
        <Contactos itemList={DataContactoCorporativos}></Contactos>
        </div>
      </div>

      <div className={styles.Section3}>
      <div className={styles.Line}></div>
        <div className={styles.Container}>
        <Titulos title={'Contacto'} subtitle={'Talento'}/>
        <Contactos itemList={DataContactoTalento}></Contactos>
        </div>
        <div className={styles.Line}></div>
      </div>

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

export default Sostenibilidad
