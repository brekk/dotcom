import styled from "@emotion/styled"
import { t, back, fore } from "utils/style"

export const Link = styled.a`
  line-height: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.5rem;
  font-size: 1em;
  color: ${fore};
  text-decoration: none;
  ${t("color")}
  svg {
    min-width: 1rem;
    max-width: 1em;
    max-height: 1em;
    margin-right: 0.5rem;
    padding-bottom: 0.25rem;
    path {
      fill: ${fore};

      ${t("fill")}
    }
  }
`
export default Link
