import styled from "@emotion/styled"
import { t, fore, back } from "utils/style"
import { ifElse, pipe, propEq, equals } from "ramda"

const whenUnlined = (a, b) => props =>
  ifElse(
    propEq("unlined", true),
    () => a,
    () => b
  )(props)

const spinHover = ifElse(
  propEq("animation", "spin"),
  () => `transform: rotate(180deg);`,
  () => `transform: rotate(0deg);`
)

const twoOrThreeRem = whenUnlined("1rem", "2.6rem")

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${fore};
  font-size: 1.2em;
  padding: 0.75rem;
  background: ${back};
  margin: 0 0.25rem;
  border-radius: 5rem;
  width: ${twoOrThreeRem};
  height: ${twoOrThreeRem};
  border: ${whenUnlined("0", "2px")} solid ${fore};
  ${t(["color", "background", "border"])}
  line-height: 3rem;
  cursor: pointer;
  svg {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    max-width: 1.5rem;
    max-height: 1.5rem;
    ${t("transform")}
    path {
      fill: ${fore};
      ${t("fill")}
    }
  }
  &:hover {
    background: ${fore};
    color: ${back};
    svg {
      ${spinHover}
      path {
        fill: ${back};
      }
    }
  }
`
export default Button
