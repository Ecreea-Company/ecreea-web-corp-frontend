import Image from 'next/image'
import styles from './Costo.module.scss'

function Costo (): JSX.Element {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>Costo - Beneficio</h1>
      <p className={styles.Section__p1}>
        Medimos nuestro progreso, el progreso desarrolla nuestro aprendizaje y
        así llegamos al éxito.
      </p>
      <p className={styles.Section__titleGraf}>
      Siguiendo la tendencia se estima anualmente, que para el 2027 llegaremos a los <b> 28 mill.</b>
      </p>
      <div className={styles.Section__graf}>
        <Image
          src="/pages/inversores/graf-costo.png"
          layout="responsive"
          width={'15rem'}
          height={'7.5rem'}
        />
      </div>
    </div>
  )
}

export default Costo
