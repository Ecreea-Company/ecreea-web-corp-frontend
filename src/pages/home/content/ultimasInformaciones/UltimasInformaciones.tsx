// npm packages

import { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

// styles
import styles from './UltimasInformaciones.module.scss'

const UltimasInformaciones = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <section className={styles.Section}>
      <h1 className={styles.Section__title}>Últimas informaciones</h1>
      <section className={styles.Section__video}>
        {isPlaying
          ? (
          <video
            src="/videos/video.mp4"
            style={{ width: '100%', height: '100%' }}
            controls
            autoPlay
          ></video>
            )
          : (
          <div>
            <svg
              width="65"
              height="76"
              viewBox="0 0 65 76"
              fill="none"
              stroke='currentColor'
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsPlaying(true)}
            >
              <path
                d="M2 3.35898L62 38L2 72.641L2 3.35898Z"
                stroke='currentColor'
                strokeWidth="1.5"
              />
            </svg>
          </div>
            )}
      </section>
      <a
        href="https://www.facebook.com/ecreaacompany"
        className={styles.Section__link}
      >
        <p>Ver más Noticias</p>
        <i>
          <MdKeyboardArrowRight />
        </i>
      </a>
    </section>
  )
}

export default UltimasInformaciones
