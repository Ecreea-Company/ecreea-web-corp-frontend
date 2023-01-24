import { TablaPoliPrivProps } from '@/models'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './TablaPoliPriv.module.scss'

interface TablaPrivProps{
  dataTabla: TablaPoliPrivProps[]
}
function TablaPoliPriv ({ dataTabla }: TablaPrivProps): JSX.Element {
  return (
    <div className={styles.tableContainer}>
      {dataTabla.map((row, index) => (
      <div className={styles.tableRow} key={index}>
        <div className={styles.tableLeftColumn}>
          <div className={styles.tableLeftColumnTitle}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.titleLeft}</ReactMarkdown></div>
          <div className={styles.tableLeftColumnContent}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentLeft1}</ReactMarkdown></div>
          <div className={styles.tableLeftColumnContent}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentLeft2}</ReactMarkdown></div>
        </div>
        <div className={styles.tableRightColumn}>
          <div className={styles.tableRightColumnTitle}><ReactMarkdown remarkPlugins={[remarkGfm]}>{row.titleRight}</ReactMarkdown></div>
          <div className={styles.tableRightColumnContent}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentRight1}</ReactMarkdown>
          </div>
          <div className={styles.tableRightColumnContent}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{row.ContentRight2}</ReactMarkdown>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default TablaPoliPriv
