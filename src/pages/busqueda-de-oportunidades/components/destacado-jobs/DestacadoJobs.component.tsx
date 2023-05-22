import { Job } from '@/models'
import { LinkRedirect } from '@/pages/busqueda-de-oportunidades/components'
import styles from './DestacadoJobs.module.scss'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useWindowSize } from '@/hooks'

function DestacadoJobs ({ jobs }: {jobs: Job[]}) {
  if (jobs.length === 0) return null
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 960

  const [currentIndex, setCurrentIndex] = useState(0)


  const visibleJobs = isMobile
    ? jobs.slice(currentIndex, currentIndex + 1)
    : jobs.slice(currentIndex, currentIndex + 3)

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => prevIndex + (isMobile ? 1 : 3))
  }

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => prevIndex - (isMobile ? 1 : 3))
  }

  const canGoNext = currentIndex + (isMobile ? 1 : 3) < jobs.length
  const canGoPrev = currentIndex > 0

  return (
    <div className={styles.card}>
      {visibleJobs.map((destacado: Job) => (
          <div key={destacado.idJob} className={styles.cardDestacado}>
              <div className={styles.Item}>
                  <div className={styles.Titulo}>
                  <h1 className={styles.Titulo__desing}>{destacado.nombreJob}</h1>
                  <h2>{destacado.tipoContrato}</h2>
                  </div>

                  <div className={styles.Descripcion}>
                      <p className={styles.Descripcion__parrafo}>{destacado.descripcion}</p>
                      <LinkRedirect
                          className={styles.Descripcion__link}
                          text="Saber más"
                          url={`/busqueda-de-oportunidades/${destacado.slug}`}/>
                  </div>
              </div>
          </div>
      ))}
      <div className={styles.navigation}>
        {canGoPrev && (
          <button className={styles.prevButton} onClick={handlePrevClick}>
            <FaArrowLeft />
          </button>
        )}
        {canGoNext && (
          <button className={styles.nextButton} onClick={handleNextClick}>
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>

  )
}

export default DestacadoJobs
