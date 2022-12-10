import styles from './NuestraEsencia.module.scss'

const NuestraEsencia = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <h5 className={styles.Section__title}>Nuestra Esencia</h5>
      <p className={styles.Section__parrafo}>
        Están siempre ahí para guiarnos y son consistentemente aplicados en
        todo Ecreea:
      </p>

      <ul className={styles.Section__MaquinaEscribir}>
        <li className={styles.MaquinaEscribir__item}>
          <span>ecreeadores</span>
        </li>
        <li className={styles.MaquinaEscribir__item}>
          <span>amantes</span>
        </li>
        <li className={styles.MaquinaEscribir__item}>
          <span>artistas</span>
        </li>
        <li className={styles.MaquinaEscribir__item}>
          <span>visionarios</span>
        </li>
      </ul>
      <ul className={styles.Section__Frases}>
        <li className={styles.Frases__item}>
          <span>Creer para crear</span>
        </li>
        <li className={styles.Frases__item}>
          <span>Amamos lo que hacemos y dejamos nuestro corazón en ello</span>
        </li>
        <li className={styles.Frases__item}>
          <span>Hacemos arte todo lo que creamos</span>
        </li>
        <li className={styles.Frases__item}>
          <span>Vemos lo que no todos pueden ver</span>
        </li>
      </ul>
    </div>
  )
}

export default NuestraEsencia
