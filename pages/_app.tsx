import 'styles/bases/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'
import LoadingPages from '@/components/loading-pages/LoadingPages.component'
import { useInitialValues, useStateLoading } from '@/hooks'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  useInitialValues()
  const { loading } = useStateLoading()

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/ecreea.svg" />
      </Head>

      <GoogleAnalytics measurementId="G-CQFPFTTPJ5" />

      {loading ? <LoadingPages /> : <Component {...pageProps} />}

    </>
  )
}

export default MyApp
