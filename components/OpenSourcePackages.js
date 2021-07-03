import { useBrekkState } from "utils/data"
import OpenSourcePackage from "./OpenSourcePackage"

import Blem from "logos/blem.svg"
import Bodypaint from "logos/bodypaint.svg"
import Brainwave from "logos/brainwave.svg"
import Breakpoints from "logos/breakpoints.svg"
import Entrust from "logos/entrust.svg"
import Utility from "logos/f-utility.svg"
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
]

function OpenSourcePackages() {
  const { $yarnOrNPM, toggleYarnOrNPM } = useBrekkState()

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={!$yarnOrNPM ? "checked" : ""}
          onClick={toggleYarnOrNPM}
        />{" "}
        Prefer NPM?
      </div>
      {packages.map(pkg => (
        <OpenSourcePackage {...pkg} key={pkg.name} $yarnOrNPM={$yarnOrNPM} />
      ))}
    </>
  )
}
export default OpenSourcePackages
