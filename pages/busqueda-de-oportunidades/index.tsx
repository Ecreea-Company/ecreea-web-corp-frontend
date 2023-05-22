/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Public } from '@/layouts'
import { Job, PaginationAPI } from '@/models'
import { GetServerSideProps } from 'next'
import styles from '@styles/busqueda-de-oportunidades/busqueda-de-oportunidades.module.scss'
import {
  DropdownMap,
  FilterButton,
  Typography,
  ListJobs,
  PaginationButton
} from '@/pages/busqueda-de-oportunidades/components'
import { adapterJobs } from '@/adapters'
import { getFechtApi } from '@/services'
import { useState } from 'react'
import { LoadingBlock } from '@/components'
import DestacadoJobs from '@/pages/busqueda-de-oportunidades/components/destacado-jobs/DestacadoJobs.component'

interface BusquedaOportunidadesPageProps {
  jobs: Job[]
  pagination: PaginationAPI
  filters: any
}

const BusquedaOportunidades = ({
  jobs,
  pagination,
  filters
}: BusquedaOportunidadesPageProps) => {
  const [isLoad, setIsLoad] = useState<boolean>(false)
  // const handlePageNavigation = (direction: string) => {
  //   const currentPage = parseInt(router.query.page as string) || 1
  //   const nextPage = direction === 'next' ? currentPage + 1 : currentPage - 1

  //   // Conserva los filtros actuales en la URL
  //   const currentFilters = new URLSearchParams(
  //     router.asPath.split('?')[1] || ''
  //   )
  //   currentFilters.set('page', nextPage.toString())

  //   const errorMessage =
  //     direction === 'next'
  //       ? 'Error al navegar a la siguiente página:'
  //       : 'Error al navegar a la página anterior:'

  //   router
  //     .push(`${router.pathname}?${currentFilters.toString()}`)
  //     .catch((err) => {
  //       console.error(errorMessage, err)
  //     })
  // }

  return (
    <Public titlePage="Busqueda de Oportunidades">
      <div className={styles.Section}>
        <Typography className={styles.Title} variant="h1">
          Únete a nosotros y haz la diferencia
        </Typography>
        {/* <TexfieldOp /> */}
      </div>

      <DestacadoJobs jobs={jobs}/>

      <div className={styles.SlideBTN}>
        <FilterButton />
      </div>
      <div className={styles.Section2}>
        <div className={styles.DropdownLine}>
          <div className={styles.Dropdown}>
              <DropdownMap />
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

  const filters = await Promise.all(
    pathsForFilters.map(async (path) => {
      const res = await getFechtApi(path)
      return res.data
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

  return {
    props: {
      jobs,
      pagination,
      filters
    }
  }
}
