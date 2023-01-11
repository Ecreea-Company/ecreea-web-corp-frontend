import 'styles/bases/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'
import { useEffect } from 'react'
import { localStorageFooter, localStorageNavbar } from '@/services'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    localStorageFooter()
      .then(() => console.log('Footer Inicializada'))
      .catch(() => console.log('Error al inicializar el footer'))

    localStorageNavbar()
      .then(() => console.log('Navbar Inicializada'))
      .catch(() => console.log('Error al inicializar el navbar'))
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
