import Image from 'next/image'
import styles from './Somos.module.scss'

function Somos (): JSX.Element {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>Somos lo que medimos</h1>
      <p className={styles.Section__p1}>
        Medimos nuestro progreso, el progreso desarrolla nuestro aprendizaje y
        así llegamos al éxito.
      </p>
      <p className={styles.Section__titleGraf}>
        Promedio de crecimiento mensual del <b>43%</b>
      </p>
      <div className={styles.Section__graf}>
        <Image
          src="/pages/inversores/graf-somos.png"
          layout="responsive"
          width={'15rem'}
          height={'7.5rem'}
        />
      </div>
    </div>
  )
}

export default Somos
