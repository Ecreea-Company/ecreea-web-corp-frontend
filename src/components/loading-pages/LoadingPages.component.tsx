import styles from './LoadingPages.module.scss'
import Lottie from 'react-lottie-player'
import animateLoading from '@/assets/lotties/loading-lineal.json'
import Logo from '@/assets/logo/Logo.component'

const LoadingPages = (): JSX.Element => {
  return (
    <div className={styles.Loading}>
      <div className={styles.Loading__logo}>
        <Logo />
      </div>
      <Lottie
        loop
        animationData={animateLoading}
        play
        className={styles.Loading__lottie}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  )
}

export default LoadingPages
