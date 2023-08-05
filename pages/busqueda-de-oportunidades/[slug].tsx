import { Public } from '@/layouts'
import {
  Button,
  FormularioCV,
  JobRequirements,
  Typography
} from '@/pages/busqueda-de-oportunidades/components'
import { getJob, getJobBySlug } from '@/services/trabajos/Trabajo.service'
import { GetStaticPaths, GetStaticProps } from 'next'
import styles from '@styles/busqueda-de-oportunidades/slug.module.scss'
import { BsExclamationCircle, BsGeoAltFill } from 'react-icons/bs'
import { FiCheckCircle } from 'react-icons/fi'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { adapterJobs } from '@/adapters'
import { RequirementItem } from '@/models'

interface JobSlugProps {
  data: {
    idJob: number
    slug: string
    nombreJob: string
    empresa: string
    tipoContrato: string
    ubicacion: string
    stateJobCall: boolean
    descripcion: string
    specialityJob: RequirementItem[]
  }
}

const JobSlug = ({ data }: JobSlugProps) => {
  const [isActivedModal, setIsActivedModal] = useState(false)

  const handleModal = (e: any) => {
    if (data.stateJobCall) return
    e.preventDefault()
    setIsActivedModal(!isActivedModal)
  }

  return (
    <Public titlePage={data.nombreJob}>
      <section className={styles.All}>
        <section className={styles.Section}>
          <Typography className={styles.title} variant="h1">
            {data.nombreJob}
          </Typography>
          <Typography variant="h3" className={styles.empresa}>
            {data.empresa}
          </Typography>
          <Typography variant="h3">{data.tipoContrato}</Typography>
          <div className={styles.ubicacion}>
            <BsGeoAltFill className={styles.icon} />
            <Typography variant="h3">{data.ubicacion}</Typography>
          </div>
          {data.stateJobCall
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
          <Button
            className={styles.btn}
            url="#"
            isDisabled={data.stateJobCall}
            onClick={handleModal}
          />
        </section>
        <Typography className={styles.description} variant="h3">
          {data.descripcion}
        </Typography>
        <JobRequirements itemsJobs={data.specialityJob} />
        <section className={styles.last_btn}>
          <Button
            className={styles.btn}
            url="#"
            isDisabled={data.stateJobCall}
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
            <Typography className={styles.Modal__Title} variant="h1">
              Conecta con Nosotros
            </Typography>
            <div className={styles.Modal__parrafos}>
              <p>
                Explora una cultura colaborativa de crecimiento y originalidad,
                donde trabajarás con personas que comparten tu pasión.
              </p>
              <p>Si eres Estudiante o Bachiller, ¡Envíanos tu Hoja de Vida!</p>
            </div>
          </div>
          <FormularioCV idJob={data.idJob} />
        </div>
      </div>
    </Public>
  )
}

export default JobSlug

export const getStaticProps: GetStaticProps<JobSlugProps> = async ({
  params
}) => {
  const res = await getJobBySlug(params?.slug)
  const slugJobData = res.data[0]

  const {
    idJob,
    slug,
    nombreJob,
    empresa,
    tipoContrato,
    ubicacion,
    stateJobCall,
    descripcion,
    specialityJob
  } = adapterJobs(slugJobData)

  const data = {
    idJob,
    slug,
    nombreJob,
    empresa,
    tipoContrato,
    ubicacion,
    stateJobCall,
    descripcion,
    specialityJob
  }

  return {
    props: {
      data
    },
    revalidate: 10
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
