import { Public } from '@/layouts'
import {
  ButtonOp,
  ContentJob,
  FormularioCV,
  TypographyOp
} from '@/pages/busqueda-de-oportunidades/components'
import { getJob, getJobBySlug } from '@/services/trabajos/Trabajo.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import styles from '@styles/busqueda-de-oportunidades/slug.module.scss'
import { BsExclamationCircle, BsGeoAltFill } from 'react-icons/bs'
import { useWindowSize } from '@/hooks'
import Dropdown from '@/components/dropdowns/Dropdowns.component'
import { FiCheckCircle } from 'react-icons/fi'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { adapterJobs } from '@/adapters'

const Job: NextPage = ({ data }: any) => {
  const { width } = useWindowSize()
  const [isActivedModal, setIsActivedModal] = useState(false)

  const itemsJobs = [
    { title: 'Área de trabajo', dataJob: data.specialityJob.areaTrabajo },
    { title: 'Beneficios', dataJob: data.specialityJob.beneficios },
    { title: 'Funciones', dataJob: data.specialityJob.funciones },
    { title: 'Competencias', dataJob: data.specialityJob.competencias },
    { title: 'Carreras', dataJob: data.specialityJob.carreras },
    { title: 'Conocimiento deseados', dataJob: data.specialityJob.conocimientoDeseado },
    { title: 'Idiomas', dataJob: data.specialityJob.idiomas },
    { title: 'Modalidad de Trabajo', dataJob: data.specialityJob.modalidadTrabajo }
  ]

  const handleModal = (e: any) => {
    e.preventDefault()
    setIsActivedModal(!isActivedModal)
  }

  return (
    <Public titlePage={data.nombre_puesto}>
      <section className={styles.All}>
        <section className={styles.Section}>
          <TypographyOp className={styles.title} variant="h1">
            {data.nombreJob}
          </TypographyOp>
          <TypographyOp variant="h3" className={styles.empresa}>{data.empresa}</TypographyOp>
          <TypographyOp variant="h3">{data.tipoContrato}</TypographyOp>
          <div className={styles.ubicacion}>
            <BsGeoAltFill className={styles.icon} />
            <TypographyOp variant="h3">{data.ubicacion}</TypographyOp>
          </div>
          {data.convocatoria_cerrada
            ? (
            <div className={styles.convocatoria_cerrada}>
              <BsExclamationCircle className={styles.icon} />
              <p>Convocatoria cerrada</p>
            </div>
              )
            : (
            <div className={styles.convocatoria_abierta}>
              <FiCheckCircle className={styles.icon} />
              <p>Vacante disponible</p>
            </div>
              )}
          <ButtonOp
            className={styles.btn}
            url="#"
            isDisabled={data.convocatoria_cerrada}
            onClick={handleModal}
          />
        </section>
        <TypographyOp className={styles.description} variant="h3">{data.descripcion}</TypographyOp>
        {width < 960
          ? (
          <>
            {itemsJobs.map((item, index) => (
              <Dropdown
                className={styles.contentJobDrop}
                key={index}
                title={item.title}
                items={item.dataJob}
              />
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
          <ButtonOp
            className={styles.btn}
            url="#"
            isDisabled={data.convocatoria_cerrada}
            onClick={handleModal}
          />
        </section>
      </section>

      <div
        className={`${styles.Modal} ${
          isActivedModal ? styles.Modal__open : styles.Modal__close
        }`}
      >
        <div className={styles.Modal__content}>
          <button onClick={handleModal}>
            <IoCloseOutline />
          </button>
          <div className={styles.Modal__descrip}>
            <TypographyOp className={styles.Modal__Title} variant="h1">
              Conecta con Nosotros
            </TypographyOp>
            <div className={styles.Modal__parrafos}>
              <p>
                Explora una cultura colaborativa de crecimiento y originalidad,
                donde trabajarás con personas que comparten tu pasión.
              </p>
              <p>Si eres Estudiante o Bachiller, ¡Envíanos tu Hoja de Vida!</p>
            </div>
          </div>
         <FormularioCV idJob={data.id}/>
        </div>
      </div>
    </Public>
  )
}

export default Job

export const getStaticProps: GetStaticProps<{ data: any }> = async ({
  params
}) => {
  const res = await getJobBySlug(params?.slug)
  const slugJobData = res.data[0]

  const newData = adapterJobs(slugJobData)

  return {
    props: {
      data: newData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const jobs = await getJob()
  const paths = jobs.data.map((obj: any) => ({
    params: { slug: obj.attributes.slug.toString() }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}
