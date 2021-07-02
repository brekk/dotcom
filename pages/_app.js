import { useState } from "react"
import { ThemeProvider } from "@emotion/react"

import { Style, theme, globalStyler } from "utils/style"
import { ColorStateProvider } from "utils/data"
import log from "utils/log"

const Site = ({ Component, pageProps }) => {
  // flip state
  const [$isFlipped, __setFlipped] = useState(false)
  const flipColors = () => __setFlipped(!$isFlipped)
  const dynamicTheme = { ...theme, flipped: $isFlipped }
  return (
    <>
      <Style theme={dynamicTheme} />
      <ColorStateProvider $isFlipped={$isFlipped} flipColors={flipColors}>
        <ThemeProvider theme={dynamicTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorStateProvider>
    </>
  )
}

export default Site
