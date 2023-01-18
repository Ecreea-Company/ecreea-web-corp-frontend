import styles from './Contactos.module.scss'
import { ItemContactoProps } from '@/models'

export interface ContactoProps{
  itemList: ItemContactoProps[]
}

const Contactos = ({ itemList }: ContactoProps): JSX.Element => {
  const firstData = itemList.slice(0, 1)
  const filteredData = itemList.slice(-2)

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
        {firstData.map((item, index) => (
          <div className={styles.Container2} key={index}>
            <h1 className={styles.Container2__title}>{item.titleSection}</h1>
            {item.dataSection.map((subitem, subindex) => (
              <div className={styles.SubContainer} key={subindex}>
                <h1 className={styles.SubContainer__title}>{subitem.title}</h1>
                <div className={styles.Textos}>
                {subitem.numberTelf ? <p className={styles.Textos__text}>{subitem.numberTelf}</p> : ''}
                <p className={styles.Textos__text}>{subitem.numberCel}</p>
                <p className={styles.Textos__text}>{subitem.correo}</p>
              </div>
            </div>
            ))}
            <div className={styles.Line}></div>
          </div>
        ))}
      </div>

    {filteredData.map((item, index) => (
      <div className={styles.Section2} key={index}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>{item.titleSection}</h1>
          {item.dataSection.map((subitem, subindex) => (
            <div className={styles.SubContainer} key={subindex}>
              <h1 className={styles.SubContainer__title}>{subitem.title}</h1>
              <div className={styles.Textos}>
              {subitem.numberTelf ? <p className={styles.Textos__text}>{subitem.numberTelf}</p> : ''}
              <p className={styles.Textos__text}>{subitem.numberCel}</p>
              <p className={styles.Textos__text}>{subitem.correo}</p>
              </div>
            </div>
          ))}
          <div className={styles.Line}></div>
        </div>
      </div>
    ))}
    </>
  )
}

export default Contactos
