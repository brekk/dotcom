import styled from "@emotion/styled"
import { fore, t, mq } from "utils/style"

const margin = mq({
  margin: {
    T0: "2rem 0",
    S1: "1rem 0",
  },
})
const minWidth = mq({
  minWidth: {
    T0: "16rem",
    S0: "24rem",
  },
})

export const LogoBox = styled.div`
  fill: ${fore};
  ${margin};
  ${t("fill")}
  svg {
    ${minWidth}
  }
`
