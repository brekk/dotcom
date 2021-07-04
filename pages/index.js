import Head from "next/head"
import { useTheme } from "@emotion/react"

import ControlPanel from "components/ControlPanel"
import Header from "components/Header"
import OpenSourcePackages from "components/OpenSourcePackages"
import Footer from "components/Footer"
import { LogoBox } from "styles/Logo"

import Logo from "public/logo.svg"
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
      <LogoBox theme={theme}>
        <Logo />
      </LogoBox>
      <Header />
      <OpenSourcePackages />
      <Footer />
    </div>
  )
}
