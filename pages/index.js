import Head from "next/head"
import { useTheme } from "@emotion/react"

import ControlPanel from "components/ControlPanel"
import Header from "components/Header"
import Footer from "components/Footer"

import Logo from "public/logo.svg"
import { log } from "utils/log"
import { fore, back } from "utils/style"

export default function Home(props) {
  const theme = useTheme()
  return (
    <div>
      <Head>
        <title>brekk.is</title>
        <meta name="description" content="The Portfolio of Brekk Bockrath" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo style={{ fill: fore({ theme }) }} />
      <Header />
      <Footer />
    </div>
  )
}
