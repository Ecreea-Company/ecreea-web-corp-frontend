import styles from './ItemIndustria.module.scss'

interface ItemIndustriaProps {
  title: string
  subtitle: string
  fontSizeText?: any
  fontSizeTitle?: any
  padddingRightText?: string
}

function ItemIndustria ({ title, subtitle, fontSizeText, fontSizeTitle, padddingRightText }: ItemIndustriaProps): JSX.Element {
  return (
    <div className={styles.ItemIndustria}>
      <h1 className={styles.ItemIndustria__title} style={{ fontSize: fontSizeTitle }}>{title}</h1>
      <p className={styles.ItemIndustria__parrafo} style={{ fontSize: fontSizeText, paddingRight: padddingRightText }}>{subtitle}</p>
    </div>
  )
}

export default ItemIndustria
