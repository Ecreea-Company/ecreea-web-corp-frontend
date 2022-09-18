import styles from './ViajeCreativo.module.scss'

const ViajeCreativo = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <section className={styles.Section__OneBlock}>
        <h1 className={styles.OneBlock__title}>
          Tu viaje creativo empieza aquí.
        </h1>
      </section>
      <section className={styles.Section__SecondBlock}>
        <p className={styles.SecondBlock__parrafo}>
          Nuestra pasión es crear valor en nuestros usuarios e impactar en la
          transformación de las industrias, para ello es imprescindible la
          habilidad de convertir creativamente el conocimiento en nuevos
          productos y/o servicios, en base a tecnología, para el desarrollo de
          nuevos modelos de negocios disruptivos.
        </p>
      </section>
    </div>
  )
}

export default ViajeCreativo
