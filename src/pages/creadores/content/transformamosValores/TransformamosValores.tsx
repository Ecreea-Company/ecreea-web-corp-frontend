import styles from './TransformamosValores.module.scss'

const TransformamosValores = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>Transformamos con valores</h1>
      <div className={styles.Section__parrafos}>
        <p><b>Obsesión</b> por el cliente.</p>
        <p><b>Pasión</b> por la Innovación y disrupción.</p>
        <p>Trabajo en <b>equipo.</b></p>
        <p><b>Visionarios.</b></p>
        <p><b>Excelencia</b> operativa.</p>
      </div>
    </div>
  )
}

export default TransformamosValores
