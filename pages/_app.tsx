import 'styles/bases/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'
import { useEffect } from 'react'
import { localStorageFooter } from '@/services'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    localStorageFooter(`${process.env.NEXT_PUBLIC_API_URL}/footer?populate[list][populate][0]=item`)
      .catch((error) => {
        console.error('Error Interno', error)
      })
  }, [])

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
