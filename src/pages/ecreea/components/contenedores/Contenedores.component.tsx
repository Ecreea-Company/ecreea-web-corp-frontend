import styles from './Contenedores.module.scss'

interface ContenedoresProps{
  title?: string
  text: string
  gap?: string
  paddingBot?: string
  padding?: string
  fontSizeTitle?: any
  fontSizeText?: any
}
function Contenedores ({ title, text, paddingBot, fontSizeText, fontSizeTitle, gap, padding }: ContenedoresProps): JSX.Element {
  return (
    <div className={styles.Container} style={{ gap, padding }}>
      {title ? <h1 className={styles.Container__title} style={ { fontSize: fontSizeTitle }}>{title}</h1> : ''}
      <h1 className={styles.Container__subtitle} style={ { paddingBottom: paddingBot, fontSize: fontSizeText } }>{text}</h1>
    </div>
  )
}

export default Contenedores
