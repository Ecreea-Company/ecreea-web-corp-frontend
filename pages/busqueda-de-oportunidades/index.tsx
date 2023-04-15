import { Public } from '@/layouts'
import { GetStaticProps, NextPage } from 'next'
import styles from '@styles/busqueda-de-oportunidades/busqueda-de-oportunidades.module.scss'
import { ButtonOp, DropdownMapOp, LinkRedirectOp, SlideButtonOP, TexfieldOp, TypographyOp } from '@/pages/busqueda-de-oportunidades/components'
import { getTrabajos } from '@/services/trabajos/Trabajo.service'

const BusquedaOportunidades: NextPage = ({ data, dataDrop }: any) => {
  const jobs = Array.isArray(data) ? data : [data]

  return (
    <Public titlePage="Busqueda de Oportunidades">
      <div className={styles.Section}>
        <TypographyOp className={styles.Title} variant="h1">Únete a nosotros y haz la diferencia</TypographyOp>
        <TexfieldOp/>
      </div>

      <div className={styles.SlideBTN}>
        <SlideButtonOP/>
      </div>
      <div className={styles.Section2}>
        <div className={styles.DropdownLine}>
          <div className={styles.Dropdown}>
            <DropdownMapOp/>
          </div>
          <div className={styles.Line}/>
        </div>
        <div className={styles.Position}>
          {jobs?.map((item: any) => (
            <div key={item.slug} className={styles.Trabajo}>
              <div className={styles.Line}></div>
              <div className={styles.Row}>
                <div className={styles.Texto}>
                  <TypographyOp variant="h2">{item.nombre_puesto}</TypographyOp>
                  <TypographyOp variant="h3">{item.tipo_contrato}</TypographyOp>
                  <TypographyOp variant="h3">{item.createdAt}</TypographyOp>
                </div>
                <div className={styles.MostrarBtn}>
                  <ButtonOp url={`/busqueda-de-oportunidades/${item.slug}`}/>
                </div>
              </div>
              <div className={styles.Row2}>
                <div className={styles.MostrarTypo}>
                  <TypographyOp variant="p">{item.descripcion}</TypographyOp>
                </div>
                <div className={styles.linkWidth}>
                  <LinkRedirectOp text='Saber más' url={`/busqueda-de-oportunidades/${item.slug}`}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Public>
  )
}

export default BusquedaOportunidades

export const getServerSideProps: GetStaticProps<{ data: any }> = async () => {
  const res = await getTrabajos()
  const jobsDataCruda = await res.data
  const jobsAdapter = jobsDataCruda.map((dataCruda: any) => ({
    slug: dataCruda.attributes.slug,
    nombre_puesto: dataCruda.attributes.nombre_puesto,
    tipo_contrato: dataCruda.attributes.tipo_contrato.data.attributes.nombre,
    createdAt: new Date(dataCruda.attributes.createdAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    descripcion: dataCruda.attributes.descripcion
  }))

  return {
    props: {
      data: jobsAdapter
    }
  }
}
