import { Redes } from '../../components'
import styles from './ShareSocial.module.scss'

function ShareSocial ({ id }: any): JSX.Element {
  return (
    <section className={styles.Section}>
        <h3>Compartir artículo</h3>
        <div>
            <Redes id={id}/>
        </div>
    </section>
  )
}

export default ShareSocial
