import styles from './CreacionDeImpacto.module.scss'

const CreacionDeImpacto = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <h5 className={styles.Section__title}>Creación de Impacto</h5>

      <div className={styles.Section__Parrafo}>
        <ul className={styles.Parrafo__list}>
          <li className={styles.Parrafo__item}>Creer para crear,</li>
          <li className={styles.Parrafo__item}>Creer para amar,</li>
          <li className={styles.Parrafo__item}>Creer para inspirar,</li>
        </ul>
      </div>

      <div className={styles.Section__Parrafo}>
        <ul className={styles.Parrafo__list}>
          <li className={styles.Parrafo__item}>crear para transformar,</li>
          <li className={styles.Parrafo__item}>amar para ser,</li>
          <li className={styles.Parrafo__item}>inspirar para impulsar,</li>
        </ul>
      </div>
      <div className={styles.Section__Parrafo}>
        <ul className={styles.Parrafo__list}>
          <li className={styles.Parrafo__item}>transformar para mejorar.</li>
          <li className={styles.Parrafo__item}>ser para dar.</li>
          <li className={styles.Parrafo__item}>impulsar para ayudar.</li>
        </ul>
      </div>
    </div>
  )
}

export default CreacionDeImpacto
