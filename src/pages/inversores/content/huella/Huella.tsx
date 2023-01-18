import styles from './Huella.module.scss'
import { TitleGraf } from '../../components'

function Huella (): JSX.Element {
  const title = {
    title: 'La huella de la pasión',
    description: '¿Qué marcamos en ustedes?'
  }
  return (
    <div className={styles.Section}>
      <div className={styles.Section__OneBlock}>
        <div className={styles.OneBlock__title}>
          <TitleGraf title={title.title} description={title.description} />
        </div>

        <p className={styles.OneBlock__desc}>
          Apasionados por la transformación que brinda excelencia operativa.
        </p>

        <div className={styles.OneBlock__Cohete}>
          <ul className={styles.Cohete__porcentaje}>
            <li>60%</li>
            <li>25%</li>
            <li>18%</li>
          </ul>
          <ul className={styles.Cohete__desc}>
            <li>
              <h3>Innovación</h3>
              <p>Clientes desarrollan proyectos de innovación.</p>
            </li>
            <li>
              <h3>Tiempo</h3>
              <p>Aumentan su productividad anualmente.</p>
            </li>
            <li>
              <h3>Costos</h3>
              <p>Reducen sus costos anualmente.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Section__SecondBlock}>
        <p> <span>¡Ya </span> <span>emprendimos el viaje, acompáñanos a las estrellas!</span> </p>
      </div>
    </div>
  )
}

export default Huella
