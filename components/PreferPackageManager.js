import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"

import { useBrekkState } from "utils/data"
import { Options } from "styles/PreferPackageManager"

export const PreferPackageManager = props => {
  const { $yarnOrNPM, toggleYarnOrNPM } = useBrekkState()
  return (
    <Options onClick={toggleYarnOrNPM} {...props}>
      <Icon icon={$yarnOrNPM ? "circle" : "check-circle"} /> Prefer npm?
    </Options>
  )
}

export default PreferPackageManager
