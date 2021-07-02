import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import Button from "styles/Button"
import { useTheme } from "@emotion/react"
import "utils/icons"

function IconButton({ onClick, icon }) {
  const theme = useTheme()
  return (
    <Button onClick={onClick} theme={theme}>
      <Icon icon={icon} />
    </Button>
  )
}

export default IconButton
