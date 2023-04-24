import { Public } from '@/layouts'
import { ButtonOp, ContentJob, TypographyOp } from '@/pages/busqueda-de-oportunidades/components'
import { getTrabajosBySlug } from '@/services/trabajos/Trabajo.service'
import { GetServerSideProps, NextPage } from 'next'
import styles from '@styles/busqueda-de-oportunidades/slug.module.scss'
import { BsExclamationCircle, BsGeoAltFill } from 'react-icons/bs'
import { useWindowSize } from '@/hooks'
import Dropdown from '@/components/dropdowns/Dropdowns.component'
import { FiCheckCircle } from 'react-icons/fi'

const Job: NextPage = ({ data }: any) => {
  const { width } = useWindowSize()

  const itemsJobs = [
    { title: 'Área de trabajo', dataJob: data.area_trabajo },
    { title: 'Funciones', dataJob: data.funciones },
    { title: 'Beneficios', dataJob: data.beneficios },
    { title: 'Competencias', dataJob: data.competencias },
    { title: 'Carreras', dataJob: data.carreras },
    { title: 'Conocimiento deseados', dataJob: data.conocimiento_deseado },
    { title: 'Idiomas', dataJob: data.idiomas },
    { title: 'Modalidad de Trabajo', dataJob: data.modalidad_trabajo }
  ]

  return (
    <Public titlePage={data.nombre_puesto}>
      <section className={styles.All}>
        <section className={styles.Section}>
          <TypographyOp className={styles.title} variant="h1">{data.nombre_puesto}</TypographyOp>
          <TypographyOp variant="h3">{data.tipo_contrato}</TypographyOp>
          <div className={styles.ubicacion}>
            <BsGeoAltFill className={styles.icon}/>
            <TypographyOp variant="h3">{data.ubicacion}</TypographyOp>
          </div>
          {data.convocatoria_cerrada
            ? <div className={styles.convocatoria_cerrada}>
                <BsExclamationCircle className={styles.icon} />
                <p>Convocatoria cerrada</p>
                </div>
            : <div className={styles.convocatoria_abierta}>
                <FiCheckCircle className={styles.icon} />
                <p>Vacante disponible</p>
              </div> }
          <ButtonOp className={styles.btn} url='#' isDisabled={data.convocatoria_cerrada}/>
          <TypographyOp variant="h3">{data.descripcion}</TypographyOp>
        </section>
        {width < 960
          ? (
            <>
            {itemsJobs.map((item, index) => (
              <Dropdown className={styles.contentJobDrop} key={index} title={item.title} items={item.dataJob}/>
            ))}
            </>
            )
          : (
          <section className={styles.contentjob}>
            {itemsJobs.map((item, index) => (
              <ContentJob key={index} title={item.title} items={item.dataJob} />
            ))}
          </section>
            )}
        <section className={styles.last_btn}>
          <ButtonOp className={styles.btn} url='' isDisabled={data.convocatoria_cerrada}/>
        </section>
      </section>
    </Public>
  )
}

export default Job

export const getServerSideProps: GetServerSideProps<{ data: any }> = async ({
  params
}) => {
  const res = await getTrabajosBySlug(params?.slug)
  const dataCruda = res.data[0]

  const jobsAdapter = {
    slug: dataCruda.attributes.slug,
    nombre_puesto: dataCruda.attributes.nombre_puesto,
    tipo_contrato: dataCruda.attributes.tipo_contrato.data.attributes.nombre,
    createdAt: new Date(dataCruda.attributes.createdAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    descripcion: dataCruda.attributes.descripcion,
    ubicacion: dataCruda.attributes.ubicacion.data.attributes.nombre,
    area_trabajo: dataCruda.attributes.area_trabajo.data.attributes.nombre,
    funciones: dataCruda.attributes.funciones.map((funcion: any) => funcion.nombre),
    beneficios: dataCruda.attributes.beneficios.map((beneficio: any) => beneficio.nombre),
    competencias: dataCruda.attributes.competencias.map((competencia: any) => competencia.nombre),
    carreras: dataCruda.attributes.carreras.map((carrera: any) => carrera.nombre),
    conocimiento_deseado: dataCruda.attributes.conocimiento_deseado.map((conocimiento: any) => conocimiento.nombre),
    idiomas: dataCruda.attributes.idiomas,
    modalidad_trabajo: dataCruda.attributes.modalidad_trabajo.data.attributes.nombre,
    convocatoria_cerrada: dataCruda.attributes.convocatoria_cerrada
  }

  return {
    props: {
      data: jobsAdapter
    }
  }
}
