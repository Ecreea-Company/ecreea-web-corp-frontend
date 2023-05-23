/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Public } from '@/layouts'
import { Job, PaginationAPI } from '@/models'
import { GetServerSideProps } from 'next'
import styles from '@styles/busqueda-de-oportunidades/busqueda-de-oportunidades.module.scss'
import {
  ListOfDropdown,
  FilterButton,
  Typography,
  ListJobs,
  PaginationButton
} from '@/pages/busqueda-de-oportunidades/components'
import { adapterJobs } from '@/adapters'

import { getFechtApi, getJobDestacado } from '@/services'
import { useState } from 'react'
import { LoadingBlock } from '@/components'

import DestacadoJobs from '@/pages/busqueda-de-oportunidades/components/destacado-jobs/DestacadoJobs.component'

interface BusquedaOportunidadesPageProps {
  jobs: Job[]
  pagination: PaginationAPI
  filters: any
  jobsDestacados: Job[]
}

const BusquedaOportunidades = ({
  jobs,
  pagination,
  filters,
  jobsDestacados
}: BusquedaOportunidadesPageProps) => {
  const [isLoad, setIsLoad] = useState<boolean>(false)

  return (
    <Public titlePage="Busqueda de Oportunidades">
      <div className={styles.Section}>
        <Typography className={styles.Title} variant="h1">
          Únete a nosotros y haz la diferencia
        </Typography>
        {/* <Textfield /> */}
      </div>

      <DestacadoJobs jobs={jobsDestacados} />

      <div className={styles.SlideBTN}>
        <FilterButton filters={filters} />
      </div>
      <div className={styles.Section2}>
        <div className={styles.DropdownLine}>
          <div className={styles.Dropdown}>
            <ListOfDropdown filters={filters} />
          </div>
          <div className={styles.Line} />
        </div>
        <div className={styles.Position}>
          <LoadingBlock state={isLoad}>
            <ListJobs jobs={jobs} />
            <PaginationButton pagination={pagination} setIsLoad={setIsLoad} />
          </LoadingBlock>
        </div>
      </div>
    </Public>
  )
}

export default BusquedaOportunidades

interface GetJobs {
  page: number
}

export const getJobsByPage = async ({ page }: GetJobs) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs?populate=*&sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=5`
  ).then(async (res) => await res.json())

  return res
}

interface Filter {
  name: string
  options: string[]
}

export const getServerSideProps: GetServerSideProps<
BusquedaOportunidadesPageProps
> = async ({ query: { page = 1, ...queries } }) => {
  // const res = await getTrabajosByPage(page, queries)

  const pathsForFilters = [
    'ubicacions',
    'tipo-contratoes',
    'area-trabajos',
    'modalidad-trabajos',
    'companias'
  ]

  const filters: Filter[] = await Promise.all(
    pathsForFilters.map(async (path) => {
      const res = await getFechtApi(path)
      return {
        name: path,
        options: res.data.map((item: any) => {
          return {
            slug: item.attributes.slug,
            name: item.attributes.nombre
          }
        })
      }
    })
  ).then((res) => res)

  const [data, pagination] = await getJobsByPage({ page: page as number }).then(
    (res) => [res.data, res.meta.pagination]
  )

  const jobs = data.map((job: Job) => {
    const {
      slug,
      nombreJob,
      tipoContrato,
      fechaPublicacion,
      empresa,
      descripcion
    } = adapterJobs(job)
    return {
      slug,
      nombreJob,
      tipoContrato,
      fechaPublicacion,
      empresa,
      descripcion
    }
  })

  const destacados = await getJobDestacado()
    .then(res => res.data)

  const jobsDestacados = destacados.map((dest: Job) => {
    const { idJob, slug, nombreJob, tipoContrato, descripcion, destacado } =
      adapterJobs(dest)
    return { idJob, slug, nombreJob, tipoContrato, descripcion, destacado }
  })

  return {
    props: {
      jobs,
      pagination,
      filters,
      jobsDestacados
    }
  }
}
