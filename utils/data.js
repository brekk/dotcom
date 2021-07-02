import { prop, pipe, __ as $, length } from "ramda"
import { createContext, useContext, useState } from "react"
import { ThemeProvider } from "@emotion/react"

import { Style, theme, globalStyler } from "utils/style"
import unusual from "utils/random"

import colors from "public/colors.json"

export const ColorState = createContext({})

export function ColorStateProvider({ children }) {
  const pickColor = () => unusual.pickKey(colors)
  // flip state
  const [$isFlipped, __setFlipped] = useState(false)
  const flipColors = () => __setFlipped(!$isFlipped)
  const grabColor = prop($, colors)
  // useState conventions:
  // - $ denotes state vars
  // - __ denotes state functions
  // color name
  const [$themeName, __setThemeName] = useState("yemen")
  // color values
  const [$palette, __setPalette] = useState(colors[$themeName])
  const dynamicTheme = { ...theme, flipped: $isFlipped, colors: $palette }
  // previous colors
  const [$colorStack, __setColorStack] = useState([])
  const setColor = c => {
    __setThemeName(c)
    __setPalette(grabColor(c))
  }
  const pushColor = c => {
    setColor(c)
    __setColorStack($colorStack.concat(c))
  }
  const prevColor = () => {
    const size = length($colorStack)
    if (size > 1) {
      const last = $colorStack[$colorStack.length - 1]
      setColor(last)
      __setColorStack($colorStack.slice(0, -1))
    }
  }
  const nextColor = pipe(pickColor, pushColor)
  // play state
  const [$isPlaying, __setPlaying] = useState(true)
  const togglePlaying = () => __setPlaying(!$isPlaying)
  const state = {
    $palette,
    $themeName,
    $colorStack,
    $isFlipped,
    $isPlaying,
    __setPlaying,
    prevColor,
    nextColor,
    flipColors,
    togglePlaying,
    theme: dynamicTheme,
  }
  return <ColorState.Provider value={state}>{children}</ColorState.Provider>
}

export const useColorState = () => {
  const context = useContext(ColorState)
  if (!context) {
    throw new Error("useColorState must be used within a ColorStateProvider")
  }
  return context
}
export const Themed = ({ children }) => {
  const data = useColorState()
  return (
    <>
      <Style theme={data.theme} />
      <ThemeProvider theme={data.theme}>{children}</ThemeProvider>
    </>
  )
}
