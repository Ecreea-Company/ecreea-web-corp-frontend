import styles from './Link.module.scss'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'

interface LinkProps {
  text: string
  url: string
  colorText?: string
}

function LinkRedirect ({ text, colorText, url }: LinkProps): JSX.Element {
  return (
    <Link href={url}>
      <a>
        <h2 className={styles.Link} style={{ color: colorText }}>
          {text}
          <div className={styles.Link__icon}>
            <IoIosArrowForward />
          </div>
        </h2>
      </a>
    </Link>
  )
}

export default LinkRedirect
