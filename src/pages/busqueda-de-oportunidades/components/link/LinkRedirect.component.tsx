import styles from './Link.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

interface LinkProps {
  text: string
  url: string
  colorText?: string
  disabled?: boolean
}

function LinkRedirect ({ text, colorText, url, disabled }: LinkProps): JSX.Element {
  return (
    <a href={url}>
      <h2 className={styles.Link} aria-disabled={disabled}
    onClick={(e) => (disabled ? e.preventDefault() : null)} style={{ color: colorText }}>
        {text}
        <div className={styles.Link__icon}>
          <IoIosArrowForward />
        </div>
      </h2>
    </a>
  )
}

export default LinkRedirect
