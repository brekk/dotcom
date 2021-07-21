import Pkg from "components/Package"
import Link from "components/Link"
import { breakpoints } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"
import { Breakpoints } from "utils/style"

const paragraphs = {
  one: (
    <>
      {code`breakpoints`} is a simple {code`react`}-based tool for rendering
      breakpoints while developing websites. It has tooling which ostensibly
      would allow it to be used in a non-React context, but it was not
      necessarily designed as such.
    </>
  ),
  two: (
    <>
      {code`breakpoints`} pairs very well with{" "}
      <Link href="/writing/bodypaint">bodypaint</Link>. For a working example of
      the two, please see{" "}
      <Link href="https://github.com/open-sorcerers/breakpoints-and-bodypaint-example">
        this example
      </Link>
      .
    </>
  ),
}

const examples = [
  {
    title: `Render horizontal breakpoints`,
    code: `import {
  asRem,
  HORIZONTAL_BREAKPOINTS
} from 'bodypaint'
import {
  renderBreakpoints
} from '@open-sorcerers/breakpoints'

export const Breakpoints = renderBreakpoints(
  asRem(16, HORIZONTAL_BREAKPOINTS)
)`,
  },
  {
    title: `Render vertical breakpoints`,
    code: `import {
  asRem,
  VERTICAL_BREAKPOINTS
} from 'bodypaint'
import {
  renderVerticalBreakpoints
} from '@open-sorcerers/breakpoints'

export const VBreakpoints = renderVerticalBreakpoints(
  asRem(16, VERTICAL_BREAKPOINTS)
)`,
  },
  {
    title: `Render custom breakpoints`,
    code: `import {
  BREAKPOINTS 
} from 'bodypaint'
import {
  renderCustomComponent
} from '@open-sorcerers/breakpoints'

const CustomBreakpoint = x => (
  <>{JSON.stringify(x, null, 2)}</>
)

export const Breakpoints = renderCustomComponent(
  'left',
  CustomBreakpoints,
  BREAKPOINTS
)`,
  },
]

const features = [
  [
    `A simple function for rendering ad-hoc horizontal breakpoints`,
    [code`renderBreakpoints`],
  ],
  [
    `A simple function for rendering ad-hoc vertical breakpoints`,
    [code`renderVerticalBreakpoints`],
  ],
  [`Breakpoint component`, [code`<Breakpoint/>`]],
  [`VBreakpoint component`, [code`<VBreakpoint/>`]],
  [`Provide your own custom Breakpoints`, [code`renderCustomComponent`]],
]

const BreakpointsPkg = props => (
  <>
    <Pkg
      {...breakpoints}
      paragraphs={paragraphs}
      features={features}
      examples={examples}
    />
    <Breakpoints />
  </>
)

export default BreakpointsPkg
