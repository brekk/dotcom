import { nth, prop, pipe, __ as $, length } from "ramda"
import { createContext, useContext, useState } from "react"
import { ThemeProvider } from "@emotion/react"

import { Style, theme, globalStyler } from "utils/style"
import unusual from "utils/random"

import colors from "public/colors.json"

export const ColorState = createContext({})

export function ColorStateProvider({ children }) {
  const pickColor = () => unusual.pickKey(colors)
  // npm or yarn
  const [$yarnOrNPM, __setPackageManager] = useState(true)
  const toggleYarnOrNPM = () => __setPackageManager(!$yarnOrNPM)
  // flip state
  const [$isFlipped, __setFlipped] = useState(false)
  const flipColors = () => __setFlipped(!$isFlipped)
  const grabColor = prop($, colors)
  // useState conventions:
  // - $ denotes state vars
  // - __ denotes state functions
  // color name
  const [$themeName, __setThemeName] = useState("raccoon")
  // color values
  const [$palette, __setPalette] = useState(colors[$themeName])
  const dynamicTheme = { ...theme, flipped: $isFlipped, colors: $palette }
  // previous colors
  const [$colorStack, __setColorStack] = useState([])
  const setColor = c => {
    console.log("setting color to ", c)
    __setThemeName(c)
    __setPalette(grabColor(c))
  }
  const pushColor = c => {
    setColor(c)
    __setColorStack($colorStack.concat(c))
  }
  const prevColor = () => {
    const size = length($colorStack)
    if (size) {
      const last = nth(-1, $colorStack)
      console.log("LAST", last)
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
    $yarnOrNPM,
    toggleYarnOrNPM,
    __setPlaying,
    prevColor,
    nextColor,
    flipColors,
    togglePlaying,
    theme: dynamicTheme,
  }
  return <ColorState.Provider value={state}>{children}</ColorState.Provider>
}

export const useBrekkState = () => {
  const context = useContext(ColorState)
  if (!context) {
    throw new Error("useBrekkState must be used within a ColorStateProvider")
  }
  return context
}
export const Themed = ({ children }) => {
  const data = useBrekkState()
  return (
    <>
      <Style theme={data.theme} />
      <ThemeProvider theme={data.theme}>{children}</ThemeProvider>
    </>
  )
}
