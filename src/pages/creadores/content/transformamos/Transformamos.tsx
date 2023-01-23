import styles from './Transformamos.module.scss'

const Transformamos = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <div className={styles.Section__Block1}>
        <h1 className={styles.Block1__title}>Transformamos con una misión</h1>
        <p className={styles.Block1__parrafo}>
          Crear transformación para impulsar el mundo hacia adelante.
        </p>
      </div>
      <div className={styles.Section__Block2}>
        <h1 className={styles.Block2__title}>Transformamos con una visión</h1>
        <p className={styles.Block1__parrafo}>
          Inspirar a crear un mundo mejor.
        </p>
      </div>
    </div>
  )
}

export default Transformamos
