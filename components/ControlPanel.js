import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { equals } from "ramda"

import { useColorState } from "utils/data"
import ConditionalIconButton from "components/ConditionalIconButton"
import IconButton from "components/IconButton"
import ButtonBox from "styles/ButtonBox"

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

function ControlPanel() {
  const {
    $palette,
    $themeName,
    prevColor,
    nextColor,
    togglePlaying,
    $isPlaying,
    flipColors,
  } = useColorState()
  return (
    <ButtonBox>
      <BackButton onClick={prevColor} />
      <PlayPauseButton onClick={togglePlaying} $isPlaying={$isPlaying} />
      <FlipButton onClick={flipColors} />
      <NextButton onClick={nextColor} />
    </ButtonBox>
  )
}

export default ControlPanel
