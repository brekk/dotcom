import styled from "@emotion/styled"
import { mq } from "utils/style"

const headerFlexDirection = mq({
  flexDirection: {
    T0: "column",
    S1: "row",
  },
})

const columnWidth = mq({
  minWidth: {
    T0: "14rem",
    S2: "25rem",
  },
})

export const Header = styled.header`
  display: flex;
  ${headerFlexDirection}
  justify-content: center;
  align-items: center;
`
export const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  align-items: center;
  justify-content: center;
  ${columnWidth}
`
export const H1 = styled.h1`
  margin: 0;
  font-family: "News Cycle", sans-serif;
  font-size: 1.6rem;
  text-transform: uppercase;
`
export const H2 = styled.h2`
  font-size: 1.2rem;
  font-family: "News Cycle", sans-serif;
`
