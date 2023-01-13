import styles from './Contactos.module.scss'

interface ContactoProps{
  title: string
  text1: string
  text2: string
  text3?: string
}

function Contactos ({ title, text1, text2, text3 }: ContactoProps): JSX.Element {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>{title}</h1>
      <div className={styles.Textos}>
        <p className={styles.Textos__text}>{text1}</p>
        <p className={styles.Textos__text}>{text2}</p>
        {text3 ? <p className={styles.Textos__text}>{text3}</p> : ''}
      </div>
    </div>
  )
}

export default Contactos
