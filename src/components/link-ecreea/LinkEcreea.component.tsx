import Link from 'next/link'
import styles from './LinkEcreea.module.scss'

interface LinkEcreeaProps {
  children: React.ReactNode
  href: string
  disabled?: boolean
}

function LinkEcreea ({ children, href, disabled }: LinkEcreeaProps) {
  return (
    <Link href={disabled ? '#' : href}>
      <a className={styles.LinkEcreea} aria-disabled={disabled}
      onClick={(e) => (disabled ? e.preventDefault() : null)}
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkEcreea
