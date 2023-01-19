import { Public } from '@/layouts'
import styles from '@styles/contacto/Contacto.module.scss'
import { ContactosData, ListContact } from '@/pages/contacto/components'
import type { NextPage } from 'next'
import { DataContacto } from '@/data'

const Contacto: NextPage = () => {
  const firstData = DataContacto[0]
  const secondData = DataContacto.slice(1)

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
          <h1 className={styles.Container2__title}>{firstData.titleSection}</h1>
          <ContactosData itemList={firstData.dataSection}/>
        </div>
      </div>

      {secondData.map((item, index) => (
        <ListContact key={index} title={item.titleSection} data={item.dataSection} />
      ))}

      <div className={styles.Section2}>
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
