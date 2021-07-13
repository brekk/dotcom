import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"

import { useBrekkState } from "utils/data"
import { Options } from "styles/PreferPackageManager"

export const PreferPackageManager = () => {
  const { $yarnOrNPM, toggleYarnOrNPM } = useBrekkState()
  return (
    <Options onClick={toggleYarnOrNPM}>
      <Icon icon={$yarnOrNPM ? "circle" : "check-circle"} /> Prefer npm?
    </Options>
  )
}

export default PreferPackageManager
