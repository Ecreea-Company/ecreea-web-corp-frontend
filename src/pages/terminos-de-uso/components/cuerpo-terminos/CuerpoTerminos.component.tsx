import styles from './CuerpoTerminos.module.scss'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

export interface CuerpoTerminosProps{
  title?: string
  content: string
}

const CuerpoTerminos = ({ title, content }: CuerpoTerminosProps): JSX.Element => {
  return (
    <>
      <div className={styles.Section}>
          <div className={styles.Title}>
            {title}
          </div>
          <ReactMarkdown className={styles.Paragraph} remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
      </div>
    </>
  )
}

export default CuerpoTerminos
