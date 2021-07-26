import { css, Global } from "@emotion/react"
import { of, curry, pipe, ap, propOr, pathOr } from "ramda"
import styled from "@emotion/styled"
import mixColor from "mix-color"
import { renderCustomComponent } from "@open-sorcerers/breakpoints"
import { makePainter, asRem, HORIZONTAL_BREAKPOINTS } from "bodypaint"

export const COLORS = Object.freeze({
  BLACK: "black",
  WHITE: "white",
})

// import styled from '@emotion/styled'

export const theme = {
  colors: {
    fore: COLORS.WHITE,
    back: COLORS.BLACK,
  },
}

export const flipTest = propOr(false, "flipped")

export const getForeground = theme =>
  pipe(flipTest, flipped =>
    pathOr(COLORS.BLACK, ["colors", !flipped ? "fore" : "back"], theme)
  )(theme)

export const getBackground = theme =>
  pipe(flipTest, flipped =>
    pathOr(COLORS.WHITE, ["colors", !flipped ? "back" : "fore"], theme)
  )(theme)

export const getTheme = propOr({}, "theme")
export const fore = pipe(getTheme, getForeground)
export const back = pipe(getTheme, getBackground)
export const mix = curry((balance, props) =>
  pipe(of, ap([fore, back]), ([f, b]) => mixColor(f, b, balance))(props)
)
export const t = x =>
  `transition: ${
    Array.isArray(x) ? x.map(xx => `${xx} 0.3s ease-out`) : `${x} 0.3s ease-out`
  };`

const BASE_FONT_SIZE = 16

export const globalStyler = givenTheme => css`
  html,
  body {
    font-size: ${BASE_FONT_SIZE}px;
    scroll-behavior: smooth;
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: ${getBackground(givenTheme)};
    color: ${getForeground(givenTheme)};
    margin: 0;
    padding: 0;
    text-align: center;
    ${t(["background", "color"])}
  }
`
export const Style = ({ theme }) => <Global styles={globalStyler(theme)} />

// and now: we shout about breakpoints
export const POINTS = asRem(BASE_FONT_SIZE, HORIZONTAL_BREAKPOINTS)
const Breakpoint = styled.div`
  position: fixed;
  height: 100vh;
  width: 1rem;
  z-index: 100;
  top: 0;
  left: ${propOr(0, "left")};
  border-left: 1px dashed ${fore};
  opacity: ${propOr(0.1, "opacity")};
  cursor: crosshair;
  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    background-color: ${fore};
    color: ${back};
    content: "${propOr("?", "label")}";
    transform: rotate(-90deg);
    padding: 0.25rem 3rem 0.25rem 1rem;
    width: 10rem;
    margin-left: -6.75rem;
    margin-top: 2rem;
  }
`

export const Breakpoints = renderCustomComponent("left", Breakpoint, POINTS)

export const mq = makePainter({
  useMin: true,
  useHeight: false,
  baseFontSize: BASE_FONT_SIZE,
  implicit: true,
  points: HORIZONTAL_BREAKPOINTS,
})
