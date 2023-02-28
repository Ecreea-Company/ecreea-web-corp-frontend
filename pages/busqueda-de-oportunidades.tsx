import { Public } from '@/layouts'
import { NextPage } from 'next'
import styles from '@styles/busqueda-de-oportunidades/busqueda-de-oportunidades.module.scss'
import { TexfieldOp, TrabajoDesktopOP, TypographyOp } from '@/pages/busqueda-de-oportunidades/components'

const Artistas: NextPage = () => {
  return (
    <Public titlePage="Busqueda de Oportunidades">
      <section className={styles.Section}>
        <TypographyOp className={styles.Title} variant="h1">Únete a nosotros y haz la diferencia</TypographyOp>
        <TexfieldOp/>
      </section>

      <TrabajoDesktopOP/>

    </Public>
  )
}

export default Artistas
