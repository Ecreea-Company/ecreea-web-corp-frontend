import styles from './TitleIndustria.module.scss'

interface TitleIndustriaProps {
  title: string
  subtitle: string
}

function TitleIndustria ({ title, subtitle }: TitleIndustriaProps): JSX.Element {
  return (
    <div className={styles.Title}>
    <h1>{title}</h1>
    <h1><b>{subtitle}</b></h1>
  </div>
  )
}

export default TitleIndustria
