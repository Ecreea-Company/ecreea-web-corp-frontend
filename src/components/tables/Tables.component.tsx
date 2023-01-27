import { TablesProps } from '@/models'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './Tables.module.scss'

interface TableProps {
  dataTabla: TablesProps
}

const Tables = ({ dataTabla }: TableProps): JSX.Element => {
  return (
    <div className={styles.Table}>
      <div className={styles.Table__titles}>
        {
          dataTabla.titles.map((title, index) => {
            return (
              <p key={index}>{title}</p>
            )
          })
        }
      </div>

      {
          dataTabla.content.map((item, index) => {
            return (
              <div key={index} className={styles.Table__rows}>
                <ReactMarkdown className={styles.Colums} remarkPlugins={[remarkGfm]}>{item.colum1}</ReactMarkdown>
                <ReactMarkdown className={styles.Colums} remarkPlugins={[remarkGfm]}>{item.colum2}</ReactMarkdown>
              </div>
            )
          })
        }

    </div>
  )
}

export default Tables
