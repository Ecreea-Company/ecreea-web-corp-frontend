import styles from '@styles/404/FourOhFour.module.scss'
import { LinkEcreea } from '@/components'
import Gato404 from '@/assets/404/gato-web-ligth'
import Logo from '@/assets/logo/Logo.component'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function FourOhFour () {
  return (
    <section className={styles.Page}>
      <div className={styles.Page__gato}>
        <Gato404 />
      </div>
      <Logo />
      <h4>Página no encontrada</h4>
      <p>La URL solicitada /x no se encontró en este servidor.</p>

      <LinkEcreea href="/">
        <h5>
          Ir a Home <span><MdOutlineKeyboardArrowRight/></span>
        </h5>
      </LinkEcreea>
    </section>
  )
}
