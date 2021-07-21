import Pkg from "components/Package"
import Link from "components/Link"
import { bodypaint } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      <code>bodypaint</code> is a library for improving the <code>emotion</code>{" "}
      API for responsive design. It is similar in nature to{" "}
      <Link href="//npmjs.org/package/facepaint">facepaint</Link> (and relies
      upon it internally) but has a more natural API.
    </>
  ),
  two: (
    <>
      bodypaint pairs very well with{" "}
      <Link href="/writing/breakpoints">breakpoints</Link>. For a working
      example of the two, please see{" "}
      <Link href="https://github.com/open-sorcerers/breakpoints-and-bodypaint-example">
        this example
      </Link>
      .
    </>
  ),
}

const examples = [
  {
    title: `Set styles via named breakpoints`,
    code: `/** @jsxImportSource @emotion/react */
import { bodypaint } from 'bodypaint'
import { css } from '@emotion/react'

const POINTS = {
  TINY: 1,
  SMALL: 320,
  MEDIUM: 640,
  LARGE: 960
}

const mq = makePainter({
  useMin: true,
  useHeight: false,
  baseFontSize: 16,
  implicit: true
  points: POINTS
})

const responsiveStyles = mq({
  background: {
    TINY: 'lime',
    SMALL: 'yellow',
    MEDIUM: 'orange',
    LARGE: 'red'
  }
})

const styles = css\`
  width: 2rem;
  height: 2rem;
  \${responsiveStyles}
\`

const Box = () => <div css={styles}>This is a box.</div>
`,
  },
]

const features = {
  one: [`Default export`, [code`bodypaint`]],
  two: [`Configurable export`, [code`makePainter`]],
  three: [
    `API`,
    [
      <>{code`useMin`} &mdash; use minimum or maximum?</>,
      <>{code`useHeight`} &mdash; use width or height?</>,
      <>{code`baseFontSize`} &mdash; font size in pixels</>,
      <>{code`implicit`} &mdash; fill any implicit gaps</>,
      <>{code`points`} &mdash; a list or named object of points</>,
    ],
  ],
}

const Bodypaint = props => (
  <Pkg
    {...bodypaint}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Bodypaint
