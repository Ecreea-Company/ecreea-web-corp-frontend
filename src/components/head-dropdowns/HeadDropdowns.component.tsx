import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './HeadDropdowns.module.scss'

interface HeadDropdownsProps {
  title: string
  subtitle?: string
  content?: string
}

const HeadDropdowns = ({ title, content, subtitle }: HeadDropdownsProps): JSX.Element => {
  return (
    <div className={styles.Section}>
      <h1 className={styles.Title}>{title}</h1>
      {subtitle ? <h2 className={styles.Title__subtitle}>{subtitle}</h2> : ''}
      <div className={styles.Section__paragraph}>
      {content
        ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
          )
        : (
            ''
          )}
      </div>
    </div>
  )
}

export default HeadDropdowns
