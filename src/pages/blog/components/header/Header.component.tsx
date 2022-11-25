import styles from './Header.module.scss'
import { RiArrowDownSLine } from 'react-icons/ri'
import Link from 'next/link'

function Header (): JSX.Element {
  return (
    <div className={styles.Header}>
      <Link href={'/blog'}>
        <a>
          <h1>Blog Ecreea</h1>
        </a>
      </Link>
      <div>
        <RiArrowDownSLine size={'2rem'} />
      </div>
    </div>
  )
}

export default Header
