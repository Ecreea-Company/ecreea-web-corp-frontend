import styles from './TitleGraf.module.scss'

interface TitleGrafProps {
  title: string
  description: string
}

function TitleGraf ({ title, description }: TitleGrafProps): JSX.Element {
  return (
    <div className={styles.Title}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default TitleGraf
