import { useBrekkState } from "utils/data"
import Inst from "styles/Installation"
import PreferPackageManager from "components/PreferPackageManager"

export const Installation = props => {
  const { org, name, showPreferencePane = false } = props
  const { $yarnOrNPM } = useBrekkState()
  const pkg = org ? `@${org}/${name}` : name
  return (
    <>
      <Inst {...props}>{$yarnOrNPM ? `yarn add ${pkg}` : `npm i ${pkg}`}</Inst>
      {showPreferencePane && <PreferPackageManager />}
    </>
  )
}

export default Installation
