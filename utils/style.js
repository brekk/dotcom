import { css, Global } from "@emotion/react"
import { pipe, propOr, pathOr } from "ramda"

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

export const globalStyler = givenTheme => css`
  html,
  body {
    font-size: 16px;
    scroll-behavior: smooth;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: ${getBackground(givenTheme)};
    color: ${getForeground(givenTheme)};
    margin: 0;
    padding: 0;
    text-align: center;
  }
`
export const Style = ({ theme }) => <Global styles={globalStyler(theme)} />
