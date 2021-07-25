import { nth, last, prop, pipe, __ as $, length } from "ramda"
import {
  useCallback,
  useEffect,
  createContext,
  useContext,
  useState,
} from "react"
import { ThemeProvider } from "@emotion/react"

import { Style, theme, globalStyler } from "utils/style"
import unusual from "utils/random"

import colors from "public/colors.json"

export const BrekkState = createContext({})

export function BrekkStateProvider({ children }) {
  const pickColor = () => unusual.pickKey(colors)
  // npm or yarn
  const [$yarnOrNPM, __setPackageManager] = useState(true)
  const toggleYarnOrNPM = () => __setPackageManager(!$yarnOrNPM)
  // flip state
  const [$isFlipped, __setFlipped] = useState(false)
  const flipColors = useCallback(() => __setFlipped(!$isFlipped), [$isFlipped])
  const grabColor = prop($, colors)
  // useState conventions:
  // - $ denotes state vars
  // - __ denotes state functions
  // color name
  const [$themeName, __setThemeName] = useState("bee")
  // color values
  const [$palette, __setPalette] = useState(colors[$themeName])
  const dynamicTheme = { ...theme, flipped: $isFlipped, colors: $palette }
  // previous colors
  const [$colorStack, __setColorStack] = useState([$themeName])
  const setColor = c => {
    __setThemeName(c)
    __setPalette(grabColor(c))
  }
  const pushColor = c => {
    const stack = length($colorStack) <= 19 ? $colorStack : $colorStack.slice(1)
    setColor(c)
    __setColorStack(stack.concat(c))
  }
  const prevColor = () => {
    const size = length($colorStack)
    if (size > 1) {
      const nextToLast = nth(-2, $colorStack)
      setColor(nextToLast)
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
  useEffect(() => {
    const nextOrFlip = () =>
      unusual.integer({ min: 0, max: 3 }) === 3 ? flipColors() : nextColor()
    let interval
    const startPlaying = () => {
      if ($isPlaying && document.visibilityState !== "hidden") {
        clearInterval(interval)
        interval = setInterval(nextOrFlip, 15e3)
      }
    }
    startPlaying()
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        clearInterval(interval)
        interval = -1
      } else if (interval > -1) {
        startPlaying()
      }
    })
    return () => {
      clearTimeout(interval)
      interval = -1
    }
  }, [$isPlaying, nextColor, flipColors])

  return <BrekkState.Provider value={state}>{children}</BrekkState.Provider>
}

export const useBrekkState = () => {
  const context = useContext(BrekkState)
  if (!context) {
    throw new Error("useBrekkState must be used within a BrekkStateProvider")
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
