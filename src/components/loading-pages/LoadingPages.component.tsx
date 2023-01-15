import styles from './LoadingPages.module.scss'
import Lottie from 'react-lottie-player'
import animateLoading from '@/assets/lotties/loading-circle.json'

const LoadingPages = (): JSX.Element => {
  return (
    <div className={styles.Loading}>
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
