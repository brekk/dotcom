import IconLink from "components/IconLink"

function IconLinkList({ list }) {
  return (
    <ul>
      {list.map(({ text, icon, href }) => (
        <li key={icon}>
          <IconLink icon={icon} href={href}>
            {text}
          </IconLink>
        </li>
      ))}
    </ul>
  )
}

export default IconLinkList
