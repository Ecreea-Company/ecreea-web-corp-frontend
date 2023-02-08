import Link from 'next/link'
import styles from './LinkEcreea.module.scss'
import { useState, useEffect } from 'react'

interface LinkEcreeaProps {
  children: React.ReactNode
  href: string
  disabled?: boolean
}

function LinkEcreea ({ children, href, disabled }: LinkEcreeaProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 48) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  return (
    <Link href={disabled ? '#' : href}>
      <a className={`${styles.LinkEcreea} ${isScrolled ? styles.LinkScroll : ''}`} aria-disabled={disabled}
      onClick={(e) => (disabled ? e.preventDefault() : null)}
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkEcreea
