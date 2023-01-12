import styles from './LoadingPages.module.scss'
import Lottie from 'react-lottie-player'
import animateLoading from '@/assets/lotties/loading-lineal.json'

const LoadingPages = (): JSX.Element => {
  return (
    <div className={styles.Loading}>
      <Lottie
        loop
        animationData={animateLoading}
        play
        style={{ width: 500 }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  )
}

export default LoadingPages
