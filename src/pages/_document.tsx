import React from 'react'
import Document, {
  Html,
  Head,
  DocumentContext,
  NextScript,
  Main
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es-AR">
        <Head />
        <body itemScope itemType="https://schema.org/WebSite">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
