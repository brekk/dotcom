import { useTheme } from "@emotion/react"
import {
  LogoContainer,
  OpenSourcePackage as OSP,
  PackageDetails,
  PackageName,
  PackageSummary,
  Installation,
} from "styles/OpenSourcePackage"
import { fore } from "utils/style"
import { useBrekkState } from "utils/data"

function OpenSourcePackage({ logo: Logo, name, summary, $yarnOrNPM }) {
  const theme = useTheme()
  return (
    <OSP>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <PackageDetails>
        <PackageName>{name}</PackageName>
        <PackageSummary>{summary}</PackageSummary>
      </PackageDetails>
      <Installation>
        {$yarnOrNPM ? `yarn add ${name}` : `npm i ${name}`}
      </Installation>
    </OSP>
  )
}

export default OpenSourcePackage
