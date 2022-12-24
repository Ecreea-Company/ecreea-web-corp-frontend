import { Redes } from '../../components'
import styles from './ShareSocial.module.scss'

function ShareSocial ({ slug }: any): JSX.Element {
  return (
    <section className={styles.Section}>
        <h3>Compartir artículo</h3>
        <div>
            <Redes id={slug}/>
        </div>
    </section>
  )
}

export default ShareSocial
