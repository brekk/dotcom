import { useBrekkState } from "utils/data"
import {
  Header,
  OpenSourcePackages as OSP,
  Packages,
  Title,
} from "styles/OpenSourcePackages"
import PreferPackageManager from "components/PreferPackageManager"
import OpenSourcePackage from "components/OpenSourcePackage"
import { packageList } from "data/packages"

function OpenSourcePackages() {
  return (
    <OSP>
      <Header>
        <Title>Open Source Modules</Title>
      </Header>
      <PreferPackageManager />
      <Packages>
        {packageList.map(pkg => (
          <OpenSourcePackage {...pkg} key={pkg.name} />
        ))}
      </Packages>
    </OSP>
  )
}
export default OpenSourcePackages
