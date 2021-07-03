import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { equals } from "ramda"

import { useColorState } from "utils/data"
import ConditionalIconButton from "components/ConditionalIconButton"
import IconButton from "components/IconButton"
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
const FlipButton = props => <IconButton {...props} icon="sync" />
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
  } = useColorState()
  return (
    <CP>
      <ButtonBox>
        {$colorStack.length > 0 && $colorStack.length}
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
      <pre>
        <code>{JSON.stringify($colorStack, null, 2)}</code>
      </pre>
    </CP>
  )
}

export default ControlPanel
