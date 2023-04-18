import React from 'react'
import styles from './Button.module.scss'

interface BtnProps {
  url: string
  className?: string
  isDisabled?: boolean
}

const Button = ({ url, className, isDisabled = false }: BtnProps): JSX.Element => {
  const buttonStyle = isDisabled ? `${styles.button} ${styles.disabled}` : `${styles.button} ${className}`

  return (
    <a className={`${buttonStyle} ${className}`} href={url} aria-disabled={isDisabled}>
      Enviar CV
    </a>
  )
}

export default Button
