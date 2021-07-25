import Link from "components/Link"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import HB from "styles/HomeButton"

function HomeButton() {
  return (
    <HB>
      <Link href="/" aria-label="Go Home" title="Go Home">
        <Icon icon="home" />
      </Link>
      {"↫"}
    </HB>
  )
}

export default HomeButton
