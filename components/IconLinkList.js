import IconLink from "components/IconLink"
import { List, Item } from "styles/IconLinkList"

function IconLinkList({ list }) {
  return (
    <List>
      {list.map(({ text, icon, href }) => (
        <Item key={icon}>
          <IconLink icon={icon} href={href}>
            {text}
          </IconLink>
        </Item>
      ))}
    </List>
  )
}

export default IconLinkList
