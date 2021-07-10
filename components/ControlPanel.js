import { useEffect, useState } from "react"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { equals } from "ramda"

import { Breakpoints } from "utils/style"
import { useBrekkState } from "utils/data"
import { query } from "utils/debug"
import ConditionalIconButton from "components/ConditionalIconButton"
import IconButton from "components/IconButton"
import Button from "styles/Button"
import {
  ControlPanel as CP,
  ThemeDetails,
  ThemeDetailList,
  ThemeDetailItem as Item,
  ThemeDetailTerm as Term,
  ThemeDetailDefinition as Def,
  ButtonBox,
} from "styles/ControlPanel"

const BackButton = props => <IconButton {...props} icon="backward" />
const NextButton = props => <IconButton {...props} icon="forward" />
const FlipButton = props => (
  <IconButton {...props} icon="sync" animation="spin" />
)
const PlayPauseButton = ({ onClick, $isPlaying }) => (
  <ConditionalIconButton
    onClick={onClick}
    icon="stop"
    conditions={[
      [equals(true), () => <Icon icon="stop" />],
      [equals(false), () => <Icon icon="play" />],
    ]}
    state={$isPlaying}
  />
)

function ControlPanel({ showMeta = false }) {
  const {
    $isPlaying,
    $isFlipped,
    $colorStack,
    $palette,
    $themeName,
    prevColor,
    nextColor,
    togglePlaying,
    flipColors,
    theme,
  } = useBrekkState()
  const [$qs, __setQuery] = useState({})
  useEffect(() => {
    __setQuery(query())
  }, [])
  return (
    <CP>
      <ButtonBox>
        <Button unlined>{$colorStack.length > 0 && $colorStack.length}</Button>
        <BackButton onClick={prevColor} />
        <PlayPauseButton onClick={togglePlaying} $isPlaying={$isPlaying} />
        <FlipButton onClick={flipColors} />
        <NextButton onClick={nextColor} />
      </ButtonBox>
      {showMeta && (
        <ThemeDetails>
          <ThemeDetailList>
            {[
              ["theme", $themeName],
              ["foreground", theme.colors.fore],
              ["background", theme.colors.back],
              ["inverted", $isFlipped.toString()],
            ].map(([term, def]) => (
              <Item key={term}>
                <Term>{term}</Term>
                <Def>{def}</Def>
              </Item>
            ))}
          </ThemeDetailList>
        </ThemeDetails>
      )}
      {$qs.debug && <Breakpoints />}
    </CP>
  )
}

export default ControlPanel
