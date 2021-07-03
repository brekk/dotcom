import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import Button from "styles/Button"
import { useTheme } from "@emotion/react"
import "utils/icons"

function IconButton({ onClick, icon, unlined = false }) {
  const theme = useTheme()
  return (
    <Button onClick={onClick} theme={theme} unlined={unlined}>
      <Icon icon={icon} />
    </Button>
  )
}

export default IconButton
