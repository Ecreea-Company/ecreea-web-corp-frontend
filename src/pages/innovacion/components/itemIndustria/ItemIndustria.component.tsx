import styles from './ItemIndustria.module.scss'

interface ItemIndustriaProps {
  title: string
  subtitle: string
}

const ItemIndustria = ({
  title,
  subtitle
}: ItemIndustriaProps): JSX.Element => {
  return (
    <div className={styles.ItemIndustria}>
      <h1 className={styles.ItemIndustria__title}>{title}</h1>
      <p className={styles.ItemIndustria__parrafo}>{subtitle}</p>
    </div>
  )
}

export default ItemIndustria
