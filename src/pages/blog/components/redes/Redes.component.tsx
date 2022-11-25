import styles from './Redes.module.scss'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineLink
} from 'react-icons/ai'

function Redes (): JSX.Element {
  return (
    <div className={styles.Redes}>
    <div>
      <AiFillFacebook />
    </div>
    <div>
      <AiFillYoutube />
    </div>
    <div>
      <AiFillLinkedin />
    </div>
    <div>
      <AiOutlineLink />
    </div>
  </div>

  )
}

export default Redes
