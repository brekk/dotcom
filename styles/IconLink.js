import styled from "@emotion/styled"
import { t, back, fore } from "utils/style"
import Link from "components/Link"

export const IconLink = styled(Link)`
  line-height: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1em;
  color: ${fore};
  text-decoration: none;
  ${t("color")}

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    path {
      fill: ${fore};
      ${t("fill")}
    }
  }
  &:hover {
    background-color: ${fore};
    color: ${back};
    svg {
      path {
        fill: ${back};
      }
    }
  }
`
export default IconLink
