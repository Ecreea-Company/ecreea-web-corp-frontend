import styles from './Titulos.module.scss'

export interface TitulosProps{
  title: string
  subtitle: string
}

const Contactos = ({ title, subtitle }: TitulosProps): JSX.Element => {
  return (
    <>
      <div className={styles.Titulo}>
        <h1 className={styles.Titulo__title}>{title}<br/>{subtitle}</h1>
      </div>
    </>
  )
}

export default Contactos
