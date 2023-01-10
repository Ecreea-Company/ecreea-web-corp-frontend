import { Footer } from '@/contents'
import Head from 'next/head'
import { Navbar, Sidebar } from './content'
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

      <Sidebar />

      {children}

      <Footer />
    </div>
  )
}

export default Public
