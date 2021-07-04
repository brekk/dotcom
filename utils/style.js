import { css, Global } from "@emotion/react"
import { of, curry, pipe, ap, propOr, pathOr } from "ramda"
import mixColor from "mix-color"
import { renderBreakpoints } from "@open-sorcerers/breakpoints"
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
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
export const Breakpoints = renderBreakpoints(POINTS)

export const mq = makePainter({
  useMin: true,
  useHeight: false,
  baseFontSize: BASE_FONT_SIZE,
  implicit: true,
  points: HORIZONTAL_BREAKPOINTS,
})
