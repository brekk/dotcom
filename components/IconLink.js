import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import "utils/icons"
import Link from "styles/IconLink"

function IconLink({ href, children, icon }) {
  return (
    <Link href={href}>
      <Icon icon={icon} />
      {children}
    </Link>
  )
}

export default IconLink
