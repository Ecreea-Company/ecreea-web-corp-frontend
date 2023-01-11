import styles from './LoadingPages.module.scss'
import Lottie from 'react-lottie'
import animateLoading from '@/assets/lotties/loading-lottie.json'

const LoadingPages = (): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animateLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className={styles.Loading}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default LoadingPages
