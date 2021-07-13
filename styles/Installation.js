import styled from "@emotion/styled"
import { mix, fore, t } from "utils/style"
import { propEq, ifElse, always } from "ramda"

const isIndividual = propEq("individual", true)
const whenIndividual = (a, b) => ifElse(isIndividual, always(a), always(b))

export const Installation = styled.pre`
  font-family: "Fira Code", monospace;
  font-size: 0.8rem;
  background-color: ${mix(0.7)};
  padding: ${whenIndividual("1rem", "0.5rem 1rem")};
  color: ${fore};
  overflow: auto;
  ${t(["background", "color"])}
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto 0;
`

export default Installation
