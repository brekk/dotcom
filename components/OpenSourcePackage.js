import { useTheme } from "@emotion/react"
import blem from "blem"
import {
  LogoContainer,
  OpenSourcePackage as OSP,
  PackageDetails,
  PackageName,
  PackageSummary,
} from "styles/OpenSourcePackage"
import { fore } from "utils/style"
import Installation from "components/Installation"

export const bem = blem("OpenSourcePackage")

function OpenSourcePackage({ logo: Logo, name, summary, org }) {
  const theme = useTheme()
  return (
    <OSP href={`/writing/${name}`} className={bem("", name)} name={name}>
      <LogoContainer className={bem("logo-container", name)} name={name}>
        <Logo
          className={bem("logo", name)}
          name={name}
          aria-label={name}
          title={name}
        />
      </LogoContainer>
      <PackageDetails className={bem("details")}>
        <PackageSummary className={bem("summary")}>{summary}</PackageSummary>
      </PackageDetails>
      <Installation org={org} name={name} />
    </OSP>
  )
}

export default OpenSourcePackage
