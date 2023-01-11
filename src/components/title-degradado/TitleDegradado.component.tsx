import styles from './TitleDegradado.module.scss'

interface TitleDegradadoProps {
  text: string
  degradado: string
}

function TitleDegradado ({
  text,
  degradado
}: TitleDegradadoProps): JSX.Element {
  return (
    <h1
      className={`${degradado} ${styles.Title}`}
    >
      {text}
    </h1>
  )
}

export default TitleDegradado
