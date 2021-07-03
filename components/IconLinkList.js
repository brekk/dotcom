import IconLink from "components/IconLink"
import List from "styles/IconLinkList"

function IconLinkList({ list }) {
  return (
    <List>
      {list.map(({ text, icon, href }) => (
        <li key={icon}>
          <IconLink icon={icon} href={href}>
            {text}
          </IconLink>
        </li>
      ))}
    </List>
  )
}

export default IconLinkList
