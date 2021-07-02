import IconLink from "components/IconLink"
import IconLinkList from "components/IconLinkList"

const linkList = [
  { text: "Gitlab", icon: "gitlab", href: "https://gitlab.com/brekk" },
  { text: "Github", icon: "github", href: "https://github.com/brekk" },
  { text: "Dribbble", icon: "dribbble", href: "https://dribbble.com/brekk" },
  { text: "Twitter", icon: "twitter", href: "https://twitter.com/brekk" },
  { text: "Calendly", icon: "calendar", href: "https://calendly.com/brekk" },
  { text: "Codepen", icon: "codepen", href: "https://codepen.com/brekk" },
]

function Header() {
  return (
    <header>
      <h1>Brekk Bockrath</h1>
      <h2>JavaScript Developer / Web Designer</h2>
      <IconLink>Resume / CV</IconLink>
      <IconLinkList list={linkList} />
    </header>
  )
}

export default Header
