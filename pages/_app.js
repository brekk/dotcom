import { useState } from "react"

import { BrekkStateProvider, Themed } from "utils/data"

const Site = ({ Component, pageProps }) => {
  return (
    <BrekkStateProvider>
      <Themed>
        <Component {...pageProps} />
      </Themed>
    </BrekkStateProvider>
  )
}

export default Site
