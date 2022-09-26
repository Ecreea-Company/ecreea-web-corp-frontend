import 'styles/bases/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/ecreea.svg" />
      </Head>

      <GoogleAnalytics measurementId="G-CQFPFTTPJ5" />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
