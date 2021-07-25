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
import blem from "blem"
const bem = blem("OpenSourcePackages")

function OpenSourcePackages() {
  return (
    <OSP className={bem()}>
      <Header className={bem("header")}>
        <Title className={bem("title")}>Open Source Modules</Title>
      </Header>
      <PreferPackageManager className={bem("package-manager")} />
      <Packages className={bem("list")}>
        {packageList.map(pkg => (
          <OpenSourcePackage
            {...pkg}
            key={pkg.name}
            className={bem("package")}
          />
        ))}
      </Packages>
    </OSP>
  )
}
export default OpenSourcePackages
