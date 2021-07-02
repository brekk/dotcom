import { ThemeProvider } from "@emotion/react"

import { Style, theme, globalStyler } from "utils/style"
import { ColorStateProvider } from "utils/data"
import log from "utils/log"

const Site = ({ Component, pageProps }) => (
  <>
    <Style theme={theme} />
    <ColorStateProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorStateProvider>
  </>
)

export default Site
