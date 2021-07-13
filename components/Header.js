import { useTheme } from "@emotion/react"

import ControlPanel from "components/ControlPanel"
import IconLink from "components/IconLink"
import IconLinkList from "components/IconLinkList"
import { H2, H1, Header as H, HeaderColumn } from "styles/Header"
import { LogoBox } from "styles/Logo"
import Logo from "logos/brekk-is.svg"

const linkList = [
  { text: "Gitlab", icon: ["fab", "gitlab"], href: "https://gitlab.com/brekk" },
  { text: "Github", icon: ["fab", "github"], href: "https://github.com/brekk" },
  {
    text: "Dribbble",
    icon: ["fab", "dribbble"],
    href: "https://dribbble.com/brekk",
  },
  {
    text: "Twitter",
    icon: ["fab", "twitter"],
    href: "https://twitter.com/brekk",
  },
  {
    text: "Calendly",
    icon: "calendar-times",
    href: "https://calendly.com/brekk",
  },
  {
    text: "Codepen",
    icon: ["fab", "codepen"],
    href: "https://codepen.com/brekk",
  },
]

function Header() {
  const theme = useTheme()
  return (
    <H>
      <HeaderColumn>
        <LogoBox theme={theme}>
          <Logo />
        </LogoBox>
        <ControlPanel />
      </HeaderColumn>
      <HeaderColumn>
        <H1>Brekk Bockrath</H1>
        <H2>JavaScript Engineer / Web Developer</H2>
        <IconLink
          icon={["fas", "file"]}
          href="https://brekk.is/static/resume.pdf"
        >
          Resume / CV
        </IconLink>
        <IconLinkList list={linkList} />
      </HeaderColumn>
    </H>
  )
}

export default Header
