import { useRouter } from 'next/router'
import styles from './PaginationButton.module.scss'
import { PaginationAPI } from '@/models'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

function PaginationButton ({ pagination }: { pagination: PaginationAPI }) {
  const router = useRouter()
  const pathname = router.pathname

  const handleNextPage = async () => {
    // handlePageNavigation('next')
    await router.push(`${pathname}?page=${pagination.page + 1}`)
  }

  const handlePreviousPage = async () => {
    // handlePageNavigation('previous')

    await router.push(`${pathname}?page=${pagination.page - 1}`)
  }

  return (
    <div className={styles.ButtonFilters}>
      <button
        className={styles.Control}
        disabled={pagination.page === 1}
        onClick={ handlePreviousPage}
      >
        <span>
          <MdArrowBackIos size={'1.5rem'} />
        </span>
        <span className={styles.Control__text}>Anterior</span>
      </button>
      <button
        className={styles.Control}
        disabled={pagination.pageCount === pagination.page}
        onClick={handleNextPage}
      >
        <span className={styles.Control__text}>Siguiente</span>
        <span>
          <MdArrowForwardIos size={'1.5rem'} />
        </span>
      </button>
    </div>
  )
}

export default PaginationButton
