import Head from "next/head"
import { BrekkStateProvider, Themed } from "utils/data"

const Site = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
