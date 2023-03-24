import { Public } from '@/layouts'
import { NextPage } from 'next'
import styles from '@styles/busqueda-de-oportunidades/busqueda-de-oportunidades.module.scss'
import { ButtonOp, DropdownMapOp, LinkRedirectOp, SlideButtonOP, TexfieldOp, TypographyOp } from '@/pages/busqueda-de-oportunidades/components'
import { TrabajoProps } from '@/models'
import { useFetchData } from '@/hooks'
import { LoadingPages } from '@/components'

export async function getServerSideProps () {
  const res = await fetch('http://localhost:1337/api/jobs?populate=*')
  const data = await res.json()

  return {
    props: {
      jobs: data
    }
  }
}

export default function BusquedaOportunidades ({ jobs }: any) {
  // const { data: dataTrabajo, loading } = useFetchData<{ data: TrabajoProps[] }>('http://localhost:1337/api/jobs')

  // if (loading) {
  // return <LoadingPages/>
  // }

  return (
    <Public titlePage="Busqueda de Oportunidades">
      <section className={styles.Section}>
        <TypographyOp className={styles.Title} variant="h1">Únete a nosotros y haz la diferencia</TypographyOp>
        <TexfieldOp/>
      </section>

      <div className={styles.SlideBTN}>
        <SlideButtonOP/>
      </div>
      <section className={styles.Section2}>
        <div className={styles.DropdownLine}>
          <div className={styles.Dropdown}>
            <DropdownMapOp/>
          </div>
          <div className={styles.Line}/>
        </div>
        <div className={styles.Position}>
          {jobs?.map((item: any) => (
            <div key={item.id} className={styles.Trabajo}>
              <div className={styles.Line}></div>
              <div className={styles.Row}>
                <div className={styles.Texto}>
                  <TypographyOp variant="h2">{item.attributes.nombre_puesto}</TypographyOp>
                  <TypographyOp variant="h3">{item.attributes.tipo_contrato.data.attributes.nombre}</TypographyOp>
                  <TypographyOp variant="h3">{new Date(item.attributes.createdAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</TypographyOp>
                </div>
                <div className={styles.MostrarBtn}>
                  <ButtonOp/>
                </div>
              </div>
              <div className={styles.Row2}>
                <div className={styles.MostrarTypo}>
                  <TypographyOp variant="p">{item.attributes.descripcion}</TypographyOp>
                </div>
                <div className={styles.linkWidth}>
                  <LinkRedirectOp text='Saber más' url='#'/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Public>
  )
}
