import { Public } from '@/layouts'
import type { NextPage } from 'next'
import styles from '@styles/legal/Legal.module.scss'
import { Dropdowns } from '@/components'
import { DataLegal } from '@/data'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

const Legal: NextPage = () => {
  const TermYCond = DataLegal[0]
  const ContentDrop = DataLegal.slice(1)

  return (
    <Public titlePage="Legal">
      <div className={styles.Section}>
        <h1 className={styles.Section__title}>Legal Ecreea</h1>
        <div className={styles.Section__paragragh}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {TermYCond.data}
          </ReactMarkdown>
        </div>
      </div>

      <div>
        {ContentDrop.map((item, index) => (
          <Dropdowns key={index} title={item.title} content={item.data} />
        ))}
      </div>
    </Public>
  )
}

export default Legal
