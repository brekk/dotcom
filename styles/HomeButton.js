import styled from "@emotion/styled"
import Link from "styles/Link"

export const HomeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
  ${Link} {
    margin-right: 0.25rem;
  }
  svg {
    width: 1.5rem;
    max-width: 1.5rem;
  }
  path {
    width: 2.5rem;
    max-width: 2.5rem;
  }
`
export default HomeButton
