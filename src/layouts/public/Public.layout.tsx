// node modules
import Head from 'next/head'

// content
import { Navbar, Sidebar } from './content'

// interfaces
import { LayoutPublicProps } from '@/interfaces'

// styles
import styles from './Public.module.scss'

const Public = ({
  children,
  titlePage = ' Ecreea Company'
}: LayoutPublicProps): JSX.Element => {
  return (
    <div className={styles.PublicLayout}>
      {/* meta datos */}
      <Head>
        <title>{`${titlePage} | Ecreea`}</title>
      </Head>

      <Navbar />

      {/* Solo aparece en mobile and tablet */}
      <Sidebar />

      {children}
    </div>
  )
}

export default Public
