import { ButtonOp, DropdownOp, LinkRedirectOp, TypographyOp } from '..'
import SlideButton from '../filter-button/FilterButton.component'
import styles from './Trabajo.module.scss'

const TrabajoDesktop = (): JSX.Element => {
  return (
    <>
    <div className={styles.SlideBTN}>
      <SlideButton/>
    </div>
    <section className={styles.Section}>
      <div className={styles.Dropdown}>
        <DropdownOp/>
        <div className={styles.Line}/>
      </div>
      <div className={styles.Trabajo}>
        <div className={styles.Line}></div>
        <div className={styles.Row}>
          <div className={styles.Texto}>
            <TypographyOp variant="h2">Ejecutiva comercial</TypographyOp>
            <TypographyOp variant="h3">Prácticas Pre-Profesionales</TypographyOp>
            <TypographyOp variant="h3">14 de Enero de 2023</TypographyOp>
          </div>
          <div className={styles.MostrarBtn}>
            <ButtonOp/>
          </div>
        </div>
        <div className={styles.Row2}>
          <div className={styles.MostrarTypo}>
            <TypographyOp variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</TypographyOp>
          </div>
          <div className={styles.linkWidth}>
            <LinkRedirectOp text='Saber más' url='#'/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TrabajoDesktop
