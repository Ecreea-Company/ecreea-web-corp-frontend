import styles from './Contactos.module.scss'
import { ContactosData } from '..'
import { ItemContactoProps } from '@/models'

export interface ContactoProps{
  itemList: ItemContactoProps[]
}

const Contactos = ({ itemList }: ContactoProps): JSX.Element => {
  const firstData = itemList[0]
  const secondData = itemList.slice(1)

  return (
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
      <div className={styles.Section2} key={index}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>{item.titleSection}</h1>
          <ContactosData itemList={item.dataSection}/>
        </div>
      </div>
      ))}
    </>
  )
}

export default Contactos
