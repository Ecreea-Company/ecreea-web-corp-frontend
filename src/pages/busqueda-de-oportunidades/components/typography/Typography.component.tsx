import React, { ReactNode } from 'react'
import styles from './Typography.module.scss'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  children: ReactNode
}

function Typography ({ variant, children, className }: TypographyProps) {
  switch (variant) {
    case 'h1':
      return <h1 className={`${styles.h1} ${className}`}>{children}</h1>
    case 'h2':
      return <h2 className={`${styles.h2} ${className}`}>{children}</h2>
    case 'h3':
      return <h3 className={`${styles.h3} ${className}`}>{children}</h3>
    case 'p':
    default:
      return <p className={`${styles.p} ${className}`}>{children}</p>
  }
}

export default Typography
