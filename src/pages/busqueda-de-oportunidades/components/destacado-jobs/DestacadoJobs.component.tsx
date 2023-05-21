import { Job } from '@/models'
import { LinkRedirect } from '@/pages/busqueda-de-oportunidades/components'
import styles from './DestacadoJobs.module.scss'

function DestacadoJobs ({ jobs }: {jobs: Job[]}) {
  return (
    <div className={styles.card}>
    {jobs.map((destacado: Job) => (
        <div key={destacado.idJob} className={styles.cardDestacado}>
            <div className={styles.Item}>
                <div>
                <h1 className={styles.Item__titulo}>{destacado.nombreJob}</h1>
                <h2>{destacado.tipoContrato}</h2>
                </div>

                <div>
                    <p className={styles.Item__parrafo}>{destacado.descripcion}</p>
                    <LinkRedirect
                        className={styles.Item__link}
                        text="Saber más"
                        url={`/busqueda-de-oportunidades/${destacado.slug}`}/>
                </div>
            </div>
        </div>
    ))}

    </div>

  )
}

export default DestacadoJobs
