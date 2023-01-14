import styles from './Contactos.module.scss'
import { ItemContactoProps } from '@/models'

export interface ContactoProps{
  itemList: ItemContactoProps[]
}

const Contactos = ({ itemList }: ContactoProps): JSX.Element => {
  return (
    <>
    {itemList.map((item, index) => (
      <div className={styles.Section} key={index}>
        <h1 className={styles.Section__title}>{item.title}</h1>
        <div className={styles.Textos}>
        {item.numberTelf ? <p className={styles.Textos__text}>{item.numberTelf}</p> : ''}
        <p className={styles.Textos__text}>{item.numberCel}</p>
        <p className={styles.Textos__text}>{item.correo}</p>
      </div>
    </div>
    ))}
    </>
  )
}

export default Contactos
