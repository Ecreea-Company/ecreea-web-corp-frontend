import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { JSXElementConstructor, ReactElement, ReactFragment } from 'react'

interface Props {
  html: string
  head?: Array<JSX.Element | null> | undefined
  styles?: JSX.Element | Array<ReactElement<any, string | JSXElementConstructor<any>>> | ReactFragment | undefined
}

export default class CustomDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<Props> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render (): JSX.Element {
    const setInitialTheme = `
        function getUserPreference() {
          if(window.localStorage.getItem('theme')) {
            return window.localStorage.getItem('theme')
          }
          return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
        }
        document.body.dataset.theme = getUserPreference();
      `

    return (
          <Html lang="es">
            <Head />
            <body>
            <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
              <Main />
              <NextScript />
            </body>
          </Html>
    )
  }
}
