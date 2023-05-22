import styles from './LoadingBlock.module.scss'

function LoadingBlock ({
  children,
  state
}: {
  children: JSX.Element[] | JSX.Element
  state: boolean
}) {
  if (!state) return <>{children}</>
  return <div className={styles.isLoading}>{children}</div>
}

export default LoadingBlock
