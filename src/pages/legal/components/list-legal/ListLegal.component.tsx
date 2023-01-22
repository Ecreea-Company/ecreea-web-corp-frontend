import styles from './ListLegal.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ListLegalProps {
  data: string
}

const Data = ({ data }: ListLegalProps) => {
  return (
    <div className={styles.Section}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {data}
      </ReactMarkdown>
    </div>
  )
}

export default Data
