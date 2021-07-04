import styled from "@emotion/styled"
import { mq, t, mix, fore, back } from "utils/style"

export const OpenSourcePackages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  border-top: 1px solid ${mix(1 / 2)};
  margin: 0;
  ${t("border")};
`

export const Packages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  cursor: pointer;
  code {
    margin-left: 0.5rem;
  }
  svg {
    max-width: 1rem;
    max-height: 1rem;
    margin-right: 0.75rem;
  }
`

export const Title = styled.h3`
  text-transform: uppercase;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
