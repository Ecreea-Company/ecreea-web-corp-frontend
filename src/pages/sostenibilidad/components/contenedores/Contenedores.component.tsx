import styles from './Contenedores.module.scss'

interface ContenedoresProps{
  title?: string
  text: string
  widthN?: string
  alignItems?: string
  paddingBot?: string
}
function Contenedores ({ title, text, widthN, alignItems, paddingBot }: ContenedoresProps): JSX.Element {
  return (
    <div className={styles.Container} style={ { alignItems, paddingBottom: paddingBot } }>
      <div className={styles.Container__paragraph} style={ { width: widthN }} >
        {title ? <h1>{title}</h1> : ''}
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Contenedores
