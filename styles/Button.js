import styled from "@emotion/styled"
import { fore, back } from "utils/style"
import { pipe } from "ramda"
import trace from "utils/log"

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
  width: ${({ unlined }) => (unlined ? "2rem" : "3rem")};
  height: ${({ unlined }) => (unlined ? "2rem" : "3rem")};
  border: ${({ unlined }) => (unlined ? "0" : "2px")} solid ${fore};
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
    path {
      fill: ${fore};
    }
  }
`
export default Button
