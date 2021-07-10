import styled from "@emotion/styled"
import { mq } from "utils/style"

const columnToRow = mq({
  flexDirection: {
    T0: "column",
    S2: "row",
  },
})
export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;
  ${columnToRow}
`

const columnToRowItem = mq({
  width: {
    T0: "100%",
    S1: "50%",
  },
})

export const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${columnToRowItem}
`
export default List
