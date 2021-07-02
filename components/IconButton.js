import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import Button from "styles/button"
import "utils/icons"

function IconButton({ onClick, icon }) {
  return (
    <Button onClick={onClick}>
      <Icon icon={icon} />
    </Button>
  )
}

export default IconButton
