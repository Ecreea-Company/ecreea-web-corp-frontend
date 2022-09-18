import styles from './Fuerza.module.scss'
function Fuerza (): JSX.Element {
  return (
    <div className={styles.Section}>
      <div className={styles.Description}>
        <h1 className={styles.Description__title} >La fuerza nos acompaña</h1>
        <p className={styles.Description__parrafo}>
        Nuestra fuerza en el mercado aumenta, con más talento y tecnología hacia la disrupción  de una nueva era.
        </p>
      </div>
    </div>
  )
}

export default Fuerza
