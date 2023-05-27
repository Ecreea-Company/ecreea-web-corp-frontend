import React from 'react'
import { Typography } from '..'
import styles from './ContentJob.module.scss'

export interface ContentJobProps{
  title?: string
  items: any
  showLine?: boolean
  showGridLeft?: boolean
}

function ContentJob ({ title, items, showLine = true, showGridLeft = true }: ContentJobProps) {
  return (
    <>
      <div className={styles.All}>
        <div className={styles.grid}>
          {showGridLeft && <div className={styles.left}>
            <Typography variant={'h3'} className={styles.title}>{title}</Typography>
          </div>}
          <div className={`${styles.right} ${showGridLeft ? '' : styles.fullWidth}`}>

            {Array.isArray(items)
              ? (
                  items?.map((item: any, index: number) => (
                  <Typography variant={'h3'} key={index}>{item}</Typography>
                  ))
                )
              : (
                <Typography variant={'h3'}>{items}</Typography>
                )}
          </div>
        </div>
      </div>
      {showLine && <div className={styles.Line}/>}
    </>
  )
}

export default ContentJob
