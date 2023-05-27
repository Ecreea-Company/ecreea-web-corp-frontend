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

import { getFechtApi, getJobDestacado, getJobsByPage } from '@/services'
import { useState } from 'react'
import { LoadingBlock } from '@/components'

import DestacadoJobs from '@/pages/busqueda-de-oportunidades/components/destacado-jobs/DestacadoJobs.component'
import { DropdownComponentProps } from '@/pages/busqueda-de-oportunidades/components/dropdown/Dropdown.component'

interface BusquedaOportunidadesPageProps {
  jobs: Job[]
  pagination: PaginationAPI
  filters: DropdownComponentProps[]
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

      <FilterButton filters={filters} />

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

export const getServerSideProps: GetServerSideProps<
BusquedaOportunidadesPageProps
> = async ({
  query: {
    page = 1,
    ubicacions = '',
    tipocontratoes = '',
    areatrabajos = '',
    modalidadtrabajos = '',
    companias = ''
  }
}) => {
  const filtersQuery = [
    { property: 'ubicacion', value: ubicacions },
    { property: 'tipo_contrato', value: tipocontratoes },
    { property: 'area_trabajo', value: areatrabajos },
    { property: 'modalidad_trabajo', value: modalidadtrabajos },
    { property: 'compania', value: companias }
  ]

  const pathsForFilters = [
    'ubicacions',
    'tipo-contratoes',
    'area-trabajos',
    'modalidad-trabajos',
    'companias'
  ]

  const filterKeyMap: any = {
    ubicacions: 'Ubicación',
    'tipo-contratoes': 'Tipo de Contrato',
    'area-trabajos': 'Área de Trabajo',
    'modalidad-trabajos': 'Modalidad',
    companias: 'Empresa'
  }

  const filters: DropdownComponentProps[] = await Promise.all(
    pathsForFilters.map(async (path) => {
      const res = await getFechtApi(path)
      return {
        name: filterKeyMap[path],
        slug: path.replace('-', ''),
        options: res.data.map((item: any) => {
          return {
            slug: item.attributes.slug,
            name: item.attributes.nombre
          }
        })
      }
    })
  ).then((res) => res)

  const [data, pagination] = await getJobsByPage({
    page: page as number,
    filters: filtersQuery
  }).then((res) => [res.data, res.meta.pagination])

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

  const destacados = await getJobDestacado().then((res) => res.data)

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
