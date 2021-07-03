import { useState } from "react"

import { BrekkStateProvider, Themed } from "utils/data"
import log from "utils/log"

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
