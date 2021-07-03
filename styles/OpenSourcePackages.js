import styled from "@emotion/styled"
import { mix, fore, back } from "utils/style"

export const OpenSourcePackages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-top: 1px solid ${mix(1 / 2)};
  margin: 0 1rem;
`

export const Options = styled.div`
  margin: 1rem;
`

export const Title = styled.h3`
  text-transform: uppercase;
`
