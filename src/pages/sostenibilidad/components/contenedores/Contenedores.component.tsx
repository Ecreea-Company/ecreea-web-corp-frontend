import styles from './Contenedores.module.scss'

interface ContenedoresProps{
  title?: string
  text: string
  width?: string
  height?: string
  alignItems?: string
  paddingBot?: string
}
function Contenedores ({ title, text, width, alignItems, paddingBot, height }: ContenedoresProps): JSX.Element {
  return (
    <div className={styles.Container} style={ { alignItems, paddingBottom: paddingBot } }>
      <div className={styles.Container__paragraph} style={ { width, height }} >
        {title ? <h1>{title}</h1> : ''}
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Contenedores
