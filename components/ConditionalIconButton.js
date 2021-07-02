import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { cond, T } from "ramda"
import Button from "styles/Button"
import "utils/icons"

function ConditionalIconButton({ onClick, conditions = [], icon, state }) {
  return (
    <Button onClick={onClick}>
      {conditions ? (
        cond([...conditions, icon ? [T, () => <Icon icon={icon} />] : []])(
          state
        )
      ) : (
        <Icon icon={icon} />
      )}
    </Button>
  )
}

export default ConditionalIconButton
