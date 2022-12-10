import styles from './ModeloNegocio.module.scss'

function ModeloNegocio (): JSX.Element {
  return (
    <div className={styles.Section}>
      <div className={styles.Description}>
        <h1 className={styles.Description__title}>
          Modelo de negocios escalable
        </h1>
        <p className={styles.Description__parrafo}>
          Usamos la tecnología e innovación como catapulta de crecimiento para
          nuestro gran talento humano.
        </p>
      </div>
    </div>
  )
}

export default ModeloNegocio
