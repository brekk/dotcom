import { css, Global } from "@emotion/react"
import { pathOr } from "ramda"

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

export const getForeground = pathOr(COLORS.BLACK, ["colors", "fore"])
export const getBackground = pathOr(COLORS.WHITE, ["colors", "back"])

export const fore = pathOr(COLORS.BLACK, ["theme", "colors", "fore"])
export const back = pathOr(COLORS.WHITE, ["theme", "colors", "back"])

export const globalStyler = givenTheme => css`
  html,
  body {
    font-size: 16px;
    scroll-behavior: smooth;
    background-color: ${getBackground(givenTheme)};
    color: ${getForeground(givenTheme)};
    margin: 0;
    padding: 0;
    text-align: center;
  }
`
export const Style = ({ theme }) => <Global styles={globalStyler(theme)} />
