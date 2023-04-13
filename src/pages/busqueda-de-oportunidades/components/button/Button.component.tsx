import React from 'react'
import styles from './Button.module.scss'

interface BtnProps {
  url: string
  className?: string
}

const Button = ({ url, className }: BtnProps): JSX.Element => {
  return (
    <a className={`${styles.button} ${className}`} href={url}>
      Enviar CV
    </a>
  )
}

export default Button
