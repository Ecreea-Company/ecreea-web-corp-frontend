import styles from './Contenedores.module.scss'

interface ContenedoresProps{
  title?: string
  text: string
  width?: string
  alignItems?: string
  paddingBot?: string
}
function Contenedores ({ title, text, width, alignItems, paddingBot }: ContenedoresProps): JSX.Element {
  return (
    <div className={styles.Container} style={ { alignItems, paddingBottom: paddingBot } }>
      <div className={styles.Container__paragraph} style={ { width } } >
        {title ? <h1>{title}</h1> : ''}
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Contenedores
