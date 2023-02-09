import { Footer, Navbar } from '@/contents'
import Head from 'next/head'

import styles from './Public.module.scss'

export interface LayoutPublicProps {
  children: React.ReactNode
  titlePage?: string
  isFixed?: boolean
}

const Public = ({ children, titlePage = ' Ecreea Company', isFixed }: LayoutPublicProps): JSX.Element => {
  return (
    <div className={styles.PublicLayout}>
      <Head>
        <title>{`${titlePage} | Ecreea`}</title>
      </Head>

      <Navbar isFixed={isFixed} />

      {children}

      <Footer />
    </div>
  )
}

export default Public
