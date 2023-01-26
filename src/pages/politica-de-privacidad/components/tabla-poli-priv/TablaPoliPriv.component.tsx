import { TablaPoliPrivProps } from '@/models'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './TablaPoliPriv.module.scss'

interface TablaPrivProps{
  dataTabla: TablaPoliPrivProps[]
}
function TablaPoliPriv ({ dataTabla }: TablaPrivProps): JSX.Element {
  console.log(dataTabla)
  return (
    <div className={styles.tableContainer}>
      {dataTabla.map((row, index) => (
      <div className={styles.tableRow} key={index}>
          <div className={styles.tableTitle}>
            <div className={styles.table}>{row.titleLeft}</div>
            <div className={styles.table}>{row.titleRight}</div>
          </div>
          <div className={styles.tableColumnContent}>
            <div className={styles.table}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentLeft1}</ReactMarkdown></div>
            <div className={styles.table}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentRight1}</ReactMarkdown></div>
          </div>
          <div className={styles.tableColumnContent2}>
            <div className={styles.table}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentLeft2}</ReactMarkdown></div>
            <div className={styles.table}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentRight2}</ReactMarkdown></div>
          </div>
      </div>
      ))}
    </div>
  )
}

export default TablaPoliPriv
