import React from 'react'
import { TypographyOp } from '..'
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
            <TypographyOp variant={'h3'} className={styles.title}>{title}</TypographyOp>
          </div>}
          <div className={`${styles.right} ${showGridLeft ? '' : styles.fullWidth}`}>

            {Array.isArray(items)
              ? (
                  items?.map((item: any, index: number) => (
                  <TypographyOp variant={'h3'} key={index}>{item}</TypographyOp>
                  ))
                )
              : (
                <TypographyOp variant={'h3'}>{items}</TypographyOp>
                )}
          </div>
        </div>
      </div>
      {showLine && <div className={styles.Line}/>}
    </>
  )
}

export default ContentJob
