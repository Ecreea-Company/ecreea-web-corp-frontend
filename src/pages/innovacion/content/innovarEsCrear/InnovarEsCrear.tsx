import styles from './InnovarEsCrear.module.scss'

const InnovarEsCrear = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <section className={styles.Section__OneBlock}>
        <h1 className={styles.OneBlock__title}>Innovar es crear.</h1>
        <p className={styles.OneBlock__parrafo}>Crear valor para servir</p>
      </section>
      <section className={styles.Section__SecondBlock}>
        <p className={styles.SecondBlock__frase}>“El futuro pertenece a aquellos que creen en la belleza de sus sueños”</p>
        <p className={styles.SecondBlock__autor}>Eleanor Roosevelt</p>
      </section>
    </div>
  )
}

export default InnovarEsCrear
