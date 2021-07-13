import { useTheme } from "@emotion/react"
import {
  LogoContainer,
  OpenSourcePackage as OSP,
  PackageDetails,
  PackageName,
  PackageSummary,
} from "styles/OpenSourcePackage"
import { fore } from "utils/style"
import Installation from "components/Installation"

function OpenSourcePackage({ logo: Logo, name, summary, org }) {
  const theme = useTheme()
  return (
    <OSP href={`/writing/${name}`}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <PackageDetails>
        <PackageName>{name}</PackageName>
        <PackageSummary>{summary}</PackageSummary>
      </PackageDetails>
      <Installation org={org} name={name} />
    </OSP>
  )
}

export default OpenSourcePackage
