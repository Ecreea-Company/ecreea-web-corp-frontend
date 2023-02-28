import { BsSearch } from 'react-icons/bs'
import styles from './Textfield.module.scss'

const TextField = (): JSX.Element => {
  return (
    <div className={styles.textField}>
      <div className={styles.textPad}>
        <span className={styles.iconContainer}>
          <BsSearch/>
        </span>
        <input type="text" placeholder="Encuentra tu oportunidad" />
      </div>
    </div>
  )
}

export default TextField
