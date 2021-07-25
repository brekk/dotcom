import ControlPanel from "components/ControlPanel"
import blem from "blem"

export const bem = blem("Footer")

function Footer() {
  return (
    <footer className={bem()}>
      <ControlPanel showMeta />
    </footer>
  )
}

export default Footer
