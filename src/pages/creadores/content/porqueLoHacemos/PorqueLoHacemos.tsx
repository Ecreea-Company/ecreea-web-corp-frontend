import styles from './PorqueLoHacemos.module.scss'

const PorqueLoHacemos = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>¿Por qué lo hacemos?</h1>
      <p className={styles.Section__parrafo}>
        Porque todas las personas tienen el poder de crear lo que quisieran y
        mejorar al mundo con ello.
      </p>
    </div>
  )
}

export default PorqueLoHacemos
