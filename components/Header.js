import { useTheme } from "@emotion/react"

import ControlPanel from "components/ControlPanel"
import IconLink from "components/IconLink"
import IconLinkList from "components/IconLinkList"
import { H2, H1, Header as H, HeaderColumn } from "styles/Header"
import { LogoBox } from "styles/Logo"
import Logo from "logos/brekk-is.svg"

import blem from "blem"
const bem = blem("Header")

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
    <H className={bem()}>
      <HeaderColumn className={bem("column", "one")}>
        <LogoBox theme={theme} className={bem("logo-container")}>
          <Logo className={bem("logo")} />
        </LogoBox>
        <ControlPanel className={bem("control-panel")} />
      </HeaderColumn>
      <HeaderColumn className={bem("column", "two")}>
        <H1 className={bem("like-breakfast")}>Brekk Bockrath</H1>
        <H2 className={bem("like-java-but-not")}>
          {" "}
          JavaScript Engineer / Web Developer
        </H2>
        <IconLink
          icon={["fas", "file"]}
          href="/resume.pdf"
          className={bem("icon-link")}
        >
          Resume / CV
        </IconLink>
        <IconLinkList list={linkList} className={bem("icon-link-list")} />
      </HeaderColumn>
    </H>
  )
}

export default Header
