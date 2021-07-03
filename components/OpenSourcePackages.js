import { useBrekkState } from "utils/data"
import {
  Title,
  OpenSourcePackages as OSP,
  Options,
} from "styles/OpenSourcePackages"
import OpenSourcePackage from "./OpenSourcePackage"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"

import Blem from "logos/blem.svg"
import Bodypaint from "logos/bodypaint.svg"
import Brainwave from "logos/brainwave.svg"
import Breakpoints from "logos/breakpoints.svg"
import Entrust from "logos/entrust.svg"
import FUtility from "logos/f-utility.svg"
import Flexeca from "logos/flexeca.svg"
import Gitparty from "logos/gitparty.svg"
import HalfBaked from "logos/half-baked.svg"
import Handrail from "logos/handrail.svg"
import KatsuCurry from "logos/katsu-curry.svg"
import Ljs2 from "logos/ljs2.svg"
import Phantomscript from "logos/phantomscript.svg"
import Snang from "logos/snang.svg"
import Torpor from "logos/torpor.svg"
import Wave from "logos/wave.svg"
import Xtrace from "logos/xtrace.svg"

const packages = [
  {
    logo: KatsuCurry,
    name: "katsu-curry",
    summary: "curry for your functions",
  },
  { logo: Xtrace, name: "xtrace", summary: "side-effect / logging library" },
  {
    logo: Entrust,
    name: "entrust",
    summary: "tacit programming utility library",
  },
  { logo: Blem, name: "blem", summary: "dead-simple BEM notation library" },
  { logo: Snang, name: "snang", summary: "transform stdin with tacit JS" },
  { logo: FUtility, name: "f-utility", summary: "functional utilities" },
  { logo: Bodypaint, name: "bodypaint", summary: "responsive CSS-in-JS" },
  {
    logo: Breakpoints,
    org: "open-sorcerers",
    name: "breakpoints",
    summary: "manage complex breakpoints",
  },
  { logo: Torpor, name: "torpor", summary: "futuristic fs" },
  { logo: Handrail, name: "handrail", summary: "add safety with Eithers" },
  { logo: Ljs2, name: "ljs2", summary: "literate programming library for js" },
  {
    logo: Phantomscript,
    name: "phantomscript",
    summary: "zero-width character utility",
  },
  { logo: Gitparty, name: "gitparty", summary: "git log on steroids" },
  {
    logo: Brainwave,
    name: "brainwave",
    summary: "orchestrate frontmatter content",
  },
]

function OpenSourcePackages() {
  const { $yarnOrNPM, toggleYarnOrNPM } = useBrekkState()

  return (
    <OSP>
      <Title>Open Source Modules</Title>
      <Options onClick={toggleYarnOrNPM}>
        <Icon icon={$yarnOrNPM ? "circle" : "check-circle"} /> Prefer npm?
      </Options>
      {packages.map(pkg => (
        <OpenSourcePackage {...pkg} key={pkg.name} $yarnOrNPM={$yarnOrNPM} />
      ))}
    </OSP>
  )
}
export default OpenSourcePackages
