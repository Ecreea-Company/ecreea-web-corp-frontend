import styles from './Ecreadores.module.scss'

const Ecreadores = (): JSX.Element => {
  return (
    <div className={styles.Section}>
        <h5 className={styles.Section__title}>¡ecreeadores!</h5>
        <p className={styles.Section__parrafo}>
        Somos artistas que crean valor en la vida de nuestros usuarios; trabajamos en más que una empresa, trabajamos en equipo, trabajamos en arte, trabajamos para ecreear un mundo mejor.
        </p>
    </div>
  )
}

export default Ecreadores
