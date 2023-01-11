import styles from './LoadingPages.module.scss'
import Lottie from 'react-lottie-player'
import animateLoading from '@/assets/lotties/loading-lottie.json'

const LoadingPages = (): JSX.Element => {
  return (
    <div className={styles.Loading}>
      <Lottie
        loop
        animationData={animateLoading}
        play
        style={{ width: 400, height: 400 }}
      />
    </div>
  )
}

export default LoadingPages
