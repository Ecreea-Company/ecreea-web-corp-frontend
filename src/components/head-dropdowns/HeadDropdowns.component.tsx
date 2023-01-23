import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './HeadDropdowns.module.scss'

interface HeadDropdownsProps {
  title: string
  content: string
}

const HeadDropdowns = ({ title, content }: HeadDropdownsProps): JSX.Element => {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Section__title}>{title}</h1>
      <div className={styles.Section__paragragh}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default HeadDropdowns
