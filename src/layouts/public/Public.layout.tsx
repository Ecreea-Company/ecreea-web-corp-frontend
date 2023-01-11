import { Footer, Navbar } from '@/contents'
import Head from 'next/head'

import styles from './Public.module.scss'

export interface LayoutPublicProps {
  children: React.ReactNode
  titlePage?: string
}

const Public = ({
  children,
  titlePage = ' Ecreea Company'
}: LayoutPublicProps): JSX.Element => {
  return (
    <div className={styles.PublicLayout}>
      <Head>
        <title>{`${titlePage} | Ecreea`}</title>
      </Head>

      <Navbar />

      {children}

      <Footer />
    </div>
  )
}

export default Public
