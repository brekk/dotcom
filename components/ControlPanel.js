import { useColorState } from "utils/data"
import ConditionalIconButton from "components/ConditionalIconButton"
import IconButton from "components/IconButton"

const BackButton = props => <IconButton {...props} icon="backward" />
const NextButton = props => <IconButton {...props} icon="forward" />
const FlipButton = props => <IconButton {...props} icon="sync" />
const PlayPauseButton = ({ $isPlaying }) => (
  <ConditionalIconButton
    icon="stop"
    conditions={[
      [x => x === true, () => "stop"],
      [x => x === false, () => "play"],
    ]}
    state={$isPlaying}
  />
)

function ControlPanel() {
  const { $palette, $themeName, prevColor, nextColor, togglePlaying } =
    useColorState()
  return (
    <div>
      <BackButton onClick={prevColor} />
      <PlayPauseButton onClick={togglePlaying} />
      <FlipButton />
      <NextButton onClick={nextColor} />
    </div>
  )
}

export default ControlPanel
