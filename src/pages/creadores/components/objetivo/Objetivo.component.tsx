import styles from './Objetivo.module.scss'

export interface ObjetivoProps {
  title: string
  img: string
  parrafo: string
}

const Objetivo = ({ title, img, parrafo }: ObjetivoProps): JSX.Element => {
  return (
    <section className={styles.Objetivo}>
      <h1 className={styles.Objetivo__title}>{title}</h1>
      <img src={img} alt="imagen" className={styles.Objetivo__img} />
      <p className={styles.Objetivo__parrafo}>{parrafo}</p>
    </section>
  )
}

export default Objetivo
