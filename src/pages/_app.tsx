import '../styles/globals.scss'

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Mercado libre | Mejores tratos</title>
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.17.0/mercadolibre/favicon.svg"
          rel="icon"
          data-head-react="true"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
        />
        <meta
          property="og:image"
          content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
