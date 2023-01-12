import styles from './Contenedores.module.scss'

interface ContenedoresProps{
  title?: string
  text: string
}
function Contenedores ({ title, text }: ContenedoresProps): JSX.Element {
  return (
    <div className={styles.Container} >
      {title ? <h1 className={styles.Container__title}>{title}</h1> : ''}
      <h1 className={styles.Container__subtitle}>{text}</h1>
    </div>
  )
}

export default Contenedores
