import BlemLogo from "logos/blem.svg"
import BodypaintLogo from "logos/bodypaint.svg"
import BrainwaveLogo from "logos/brainwave.svg"
import BreakpointsLogo from "logos/breakpoints.svg"
import EntrustLogo from "logos/entrust.svg"
import FUtilityLogo from "logos/f-utility.svg"
import FlexecaLogo from "logos/flexeca.svg"
import GitpartyLogo from "logos/gitparty.svg"
import HalfBakedLogo from "logos/half-baked.svg"
import HandrailLogo from "logos/handrail.svg"
import KatsuCurryLogo from "logos/katsu-curry.svg"
import Ljs2Logo from "logos/ljs2.svg"
import PhantomscriptLogo from "logos/phantomscript.svg"
import SnangLogo from "logos/snang.svg"
import TorporLogo from "logos/torpor.svg"
import XtraceLogo from "logos/xtrace.svg"

const logoNameSummaryHost = (logo, name, summary, org, host = true) => ({
  logo,
  name,
  org,
  summary,
  source: host ? "Github" : "Gitlab",
  host: host ? `//github.com/${org}/${name}` : `//gitlab.com/${org}/${name}`,
})

const lunch = logoNameSummaryHost

export const katsuCurry = lunch(
  KatsuCurryLogo,
  "katsu-curry",
  "curry for your functions"
)
export const xtrace = lunch(
  XtraceLogo,
  "xtrace",
  "side-effect / logging library"
)

export const entrust = lunch(
  EntrustLogo,
  "entrust",
  "tacit programming utility library"
)
export const blem = lunch(BlemLogo, "blem", "dead-simple BEM notation library")
export const snang = lunch(SnangLogo, "snang", "transform stdin with tacit JS")
export const futility = lunch(FUtilityLogo, "f-utility", "functional utilities")
export const bodypaint = lunch(
  BodypaintLogo,
  "bodypaint",
  "responsive CSS-in-JS"
)
export const breakpoints = lunch(
  BreakpointsLogo,
  "breakpoints",
  "manage complex breakpoints",
  "open-sorcerers"
)
export const torpor = lunch(TorporLogo, "torpor", "futuristic fs")
export const handrail = lunch(
  HandrailLogo,
  "handrail",
  "add safety with Eithers"
)
export const ljs2 = lunch(
  Ljs2Logo,
  "ljs2",
  "literate programming library for js"
)
export const phantomscript = lunch(
  PhantomscriptLogo,
  "phantomscript",
  "zero-width characters"
)
export const gitparty = lunch(GitpartyLogo, "gitparty", "git log on steroids")
export const brainwave = lunch(
  BrainwaveLogo,
  "brainwave",
  "orchestrated frontmatter"
)

export const packages = {
  katsuCurry,
  xtrace,
  entrust,
  blem,
  snang,
  futility,
  bodypaint,
  breakpoints,
  torpor,
  handrail,
  ljs2,
  phantomscript,
  gitparty,
  brainwave,
}

export const packageList = Object.values(packages)