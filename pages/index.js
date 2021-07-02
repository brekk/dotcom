import Head from "next/head"
import { useTheme } from "@emotion/react"

import ControlPanel from "components/ControlPanel"
import Header from "components/Header"

import Logo from "public/logo.svg"
import { log } from "utils/log"

export default function Home(props) {
  const theme = useTheme()
  log.component("Home", { props, theme })
  return (
    <div>
      <Head>
        <title>brekk.is</title>
        <meta name="description" content="The Portfolio of Brekk Bockrath" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <ControlPanel />
      <Header />
    </div>
  )
}
