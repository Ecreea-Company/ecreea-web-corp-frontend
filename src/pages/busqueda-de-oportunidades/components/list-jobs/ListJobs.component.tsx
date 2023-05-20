import { Job } from '@/models'
import styles from './ListJobs.module.scss'
import {
  Button,
  LinkRedirect,
  Typography
} from '@/pages/busqueda-de-oportunidades/components'

function ListJobs ({ jobs }: { jobs: Job[] }) {
  if (jobs.length === 0 || !jobs) return <h1>No hay trabajos disponibles</h1>

  return (
    <>
      {jobs.map((job: Job) => (
        <div key={job.slug} className={styles.Trabajo}>
          <div className={styles.Line}></div>
          <div className={styles.Row}>
            <div className={styles.Texto}>
              <Typography variant="h2">{job.nombreJob}</Typography>
              <Typography variant="h3">{job.tipoContrato}</Typography>
              <Typography variant="h3">{job.fechaPublicacion}</Typography>
              <Typography variant="h3">{job.empresa}</Typography>
            </div>
            <div className={styles.MostrarBtn}>
              <Button url={`/busqueda-de-oportunidades/${job.slug}`} />
            </div>
          </div>
          <div className={styles.Row2}>
            <div className={styles.MostrarTypo}>
              <Typography variant="p">{job.descripcion}</Typography>
            </div>
            <div className={styles.linkWidth}>
              <LinkRedirect
                text="Saber más"
                url={`/busqueda-de-oportunidades/${job.slug}`}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListJobs
