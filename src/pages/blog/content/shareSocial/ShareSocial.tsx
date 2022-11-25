import { Redes } from '../../components'
import styles from './ShareSocial.module.scss'

function ShareSocial (): JSX.Element {
  return (
    <section className={styles.Section}>
        <h3>Compartir artículo</h3>
        <div>
            <Redes/>
        </div>
    </section>
  )
}

export default ShareSocial
