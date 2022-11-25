import Image from 'next/image'
import styles from './Proyeccion.module.scss'

function Proyeccion (): JSX.Element {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>Proyección de ingresos</h1>
      <p className={styles.Section__p1}>Con base en Data Real.</p>
      <p className={styles.Section__titleGraf}>
        Siguiendo la tendencia se estima anualmente que, para el 2027
        alcanzaremos los <b>28 mill</b>
      </p>
      <div className={styles.Section__graf}>
        <Image
          src="/pages/inversores/graf-proyeccion.png"
          layout="responsive"
          width={'15rem'}
          height={'7.5rem'}
        />
      </div>
    </div>
  )
}

export default Proyeccion
