import styled from "@emotion/styled"
import { fore, t, mq } from "utils/style"

const margin = mq({
  margin: {
    T0: "2rem 0",
    S1: "1rem 0",
  },
})
const minWidth = mq({
  width: {
    T0: "20rem",
    S0: "24rem",
    M1: "36rem",
  },
})

export const LogoBox = styled.div`
  fill: ${fore};
  ${margin};
  ${t(["fill", "width"])}
  ${minWidth}
  svg {
    width: 100%;
    ${t("width")}
  }
`
