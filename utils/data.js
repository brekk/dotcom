import { prop, pipe, __ as $, length } from "ramda"
import { createContext, useContext, useState } from "react"

import unusual from "utils/random"

import colors from "public/colors.json"

export const ColorState = createContext({})

export function ColorStateProvider({ children }) {
  const pickColor = () => unusual.pickKey(colors)
  const grabColor = prop($, colors)
  // useState conventions:
  // - $ denotes state vars
  // - __ denotes state functions
  // color name
  const [$themeName, __setThemeName] = useState("yemen")
  // color values
  const [$palette, __setPalette] = useState(colors[$themeName])
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
  // flip state
  const [$isFlipped, __setFlipped] = useState(false)
  const flipColor = () => {
    if ($isFlipped) {
    }
  }
  // play state
  const [$isPlaying, __setPlaying] = useState(true)
  const togglePlaying = () => __setPlaying(!$isPlaying)
  const state = {
    $palette,
    $themeName,
    $colorStack,
    $isFlipped,
    $isPlaying,
    __setFlipped,
    __setPlaying,
    prevColor,
    nextColor,
    togglePlaying,
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
