import Head from "next/head"
import { useState } from "react"

import { BrekkStateProvider, Themed } from "utils/data"

const iconRef = size => (
  <link
    href={`icon-${size}.png`}
    rel="icon"
    type="image/png"
    sizes={`${size}x${size}`}
    key={size}
  />
)

const Site = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {["72", "96", "128", "144", "152", "192", "384", "512"].map(size =>
          iconRef(size)
        )}
        <meta name="theme-color" content="#EAE8F8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Lato&family=News+Cycle:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BrekkStateProvider>
        <Themed>
          <Component {...pageProps} />
        </Themed>
      </BrekkStateProvider>
    </>
  )
}

export default Site
