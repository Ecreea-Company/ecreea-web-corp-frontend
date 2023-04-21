/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Public } from '@/layouts'
import { GetServerSideProps, NextPage } from 'next'
import styles from '@styles/busqueda-de-oportunidades/busqueda-de-oportunidades.module.scss'
import { ButtonOp, DropdownMapOp, LinkRedirectOp, SlideButtonOP, TexfieldOp, TypographyOp } from '@/pages/busqueda-de-oportunidades/components'
import { getTrabajosByPage } from '@/services/trabajos/Trabajo.service'
import { useRouter } from 'next/router'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const BusquedaOportunidades: NextPage = ({ data, meta }: any) => {
  const jobs = Array.isArray(data) ? data : [data]
  const router = useRouter()

  const handlePageNavigation = (direction: string) => {
    const currentPage = parseInt(router.query.page as string) || 1
    const nextPage = direction === 'next' ? currentPage + 1 : currentPage - 1

    // Conserva los filtros actuales en la URL
    const currentFilters = new URLSearchParams(router.asPath.split('?')[1] || '')
    currentFilters.set('page', nextPage.toString())

    const errorMessage = direction === 'next' ? 'Error al navegar a la siguiente página:' : 'Error al navegar a la página anterior:'

    router.push(`${router.pathname}?${currentFilters.toString()}`).catch((err) => {
      console.error(errorMessage, err)
    })
  }

  const handleNextPage = () => {
    handlePageNavigation('next')
  }

  const handlePreviousPage = () => {
    handlePageNavigation('previous')
  }

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
          <div className={styles.Section3}>
            <button
              className={styles.Control}
              disabled={meta.pagination.page === 1}
              onClick={handlePreviousPage}
            >
              <span>
                <MdArrowBackIos size={'1.5rem'} />
              </span>
              <span className={styles.Control__text}>Anterior</span>
            </button>
            <button
              className={styles.Control}
              disabled={meta.pagination.pageCount === meta.pagination.page}
              onClick={handleNextPage}
            >
              <span className={styles.Control__text}>Siguiente</span>
              <span>
                <MdArrowForwardIos size={'1.5rem'} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Public>
  )
}

export default BusquedaOportunidades

export const getServerSideProps: GetServerSideProps<{ data: any }> = async ({
  query: { page = 1, ...filters }
}) => {
  const res = await getTrabajosByPage(page, filters)
  const jobsDataCruda = await res.data
  const jobsAdapter = jobsDataCruda.map((dataCruda: any) => ({
    slug: dataCruda.attributes.slug,
    nombre_puesto: dataCruda.attributes.nombre_puesto,
    tipo_contrato: dataCruda.attributes.tipo_contrato.data.attributes.nombre,
    createdAt: new Date(dataCruda.attributes.createdAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    descripcion: dataCruda.attributes.descripcion
  }))

  const meta = {
    ...res.meta
  }

  return {
    props: {
      data: jobsAdapter,
      meta
    }
  }
}
