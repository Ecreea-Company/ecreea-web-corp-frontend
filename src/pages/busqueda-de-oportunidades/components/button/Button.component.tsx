import React from 'react'
import styles from './Button.module.scss'

const Button = (): JSX.Element => {
  return (
    <button className={styles.button}>
      Enviar CV
    </button>
  )
}

export default Button
