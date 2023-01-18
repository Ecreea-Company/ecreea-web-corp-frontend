import styles from './ContactosData.module.scss'
import { DataContactoProps } from '@/models'

export interface ContactoProps{
  itemList: DataContactoProps[]
}

const Contactos = ({ itemList }: ContactoProps): JSX.Element => {
  return (
    <>
      {itemList.map((item, index) => (
        <div className={styles.SubContainer} key={index}>
          <h1 className={styles.SubContainer__title}>{item.title}</h1>
            <div className={styles.Textos}>
              <p className={styles.Textos__text}>{item.numberTelf}</p>
              <p className={styles.Textos__text}>{item.numberCel}</p>
              <p className={styles.Textos__text}>{item.correo}</p>
            </div>
        </div>
      ))}
      <div className={styles.Line}></div>
    </>
  )
}

export default Contactos
