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
