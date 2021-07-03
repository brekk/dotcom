import ControlPanel from "components/ControlPanel"
import IconLink from "components/IconLink"
import IconLinkList from "components/IconLinkList"

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
  return (
    <header>
      <ControlPanel />
      <h1>Brekk Bockrath</h1>
      <h2>JavaScript Engineer / Web Developer</h2>
      <IconLink
        icon={["fas", "file"]}
        href="https://brekk.is/static/resume.pdf"
      >
        Resume / CV
      </IconLink>
      <IconLinkList list={linkList} />
    </header>
  )
}

export default Header
