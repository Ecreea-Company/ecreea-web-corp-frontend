import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowDown } from 'react-icons/hi'
import styles from './StandLibro.module.scss'

function StandLibro (): JSX.Element {
  return (
    <div className={styles.Section}>
      <div className={styles.Section__background}>
        <div className={styles.Section__contentImg}>
          <div className={styles.Section__img}>
            <Image src="/pages/blog/libro_ebook.jpg" layout="fill" />
          </div>
        </div>
        <div className={styles.Section__contentText}>
         <div className={styles.info}>
         <h3>EBOOK GRATUITO</h3>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
         </div>
          <Link href="/ebook/formulario">
            <a><span>Descargar</span> <span><HiArrowNarrowDown/></span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StandLibro
