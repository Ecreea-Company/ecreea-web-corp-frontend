import { useRouter } from 'next/router'
import styles from './PaginationButton.module.scss'
import { PaginationAPI } from '@/models'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import React from 'react'

interface PaginationButtonProps {
  pagination: PaginationAPI
  setIsLoad: (newState: boolean) => any
}

function PaginationButton ({ pagination, setIsLoad }: PaginationButtonProps) {
  const router = useRouter()

  const handleNextPage = async () => {
    await router.push({
      pathname: '/busqueda-de-oportunidades',
      query: { ...router.query, page: pagination.page + 1 }
    }).then(setIsLoad(true)).finally(() => setIsLoad(false))
  }

  const handlePreviousPage = async () => {
    await router.push({
      pathname: '/busqueda-de-oportunidades',
      query: { ...router.query, page: pagination.page - 1 }
    }).then(setIsLoad(true)).finally(() => setIsLoad(false))
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
        disabled={pagination.pageCount === pagination.page || pagination.pageCount === 0}
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
