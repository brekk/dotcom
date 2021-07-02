import { useState } from "react"

import { ColorStateProvider, Themed } from "utils/data"
import log from "utils/log"

const Site = ({ Component, pageProps }) => {
  return (
    <ColorStateProvider>
      <Themed>
        <Component {...pageProps} />
      </Themed>
    </ColorStateProvider>
  )
}

export default Site
