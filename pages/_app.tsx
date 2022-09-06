import 'styles/bases/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/ecreea.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
