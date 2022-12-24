import styles from './Redes.module.scss'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterSquare
} from 'react-icons/ai'

function Redes ({ slug }: any): JSX.Element {
  return (
    <div className={styles.Redes}>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://www.ecreea.com/blog/${slug}`}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://www.youtube.com/@Ecreea2Business"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillYoutube />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.ecreea.com/blog/${slug}`}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=Ecreea-Company&url=https://www.ecreea.com/blog/${slug}&hashtags=Ecreea-Company`}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterSquare />
      </a>
    </div>
  )
}

export default Redes
