import { TitleGraf } from '../../components'
import Image from 'next/image'
import styles from './Costo.module.scss'

function Costo (): JSX.Element {
  const title = {
    title: 'Costo - Beneficio',
    description: ''
  }
  return (
    <div className={styles.Section}>
      <div className={styles.Section__title}>
        <TitleGraf title={title.title} description={title.description} />
      </div>
      <div className={styles.Section__descImg}>
        <p>
          Siguiendo la tendencia se estima anualmente, que para el 2027
          llegaremos a los <b>28 mill.</b>
        </p>
      </div>
      <div className={styles.Section__grafica}>
        <div className={styles.Grafica__img}>
          <Image layout="fill" src={'/pages/inversores/graf-costo.png'} />
        </div>
      </div>
    </div>
  )
}

export default Costo
