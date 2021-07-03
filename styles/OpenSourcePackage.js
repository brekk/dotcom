import styled from "@emotion/styled"
import { mix, fore, back } from "utils/style"

export const OpenSourcePackage = styled.a`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid ${mix(1 / 2)};
  background: ${back};
  color: ${fore};
  cursor: pointer;
  svg {
    fill: ${fore};
    .secondary {
      fill: ${mix(1 / 3)} !important;
    }
  }
  &:hover {
    background: ${fore};
    color: ${back};
    svg {
      fill: ${back};
    }
    .secondary {
      fill: ${mix(1 / 3)} !important;
    }
  }
  &:last-of-type {
    margin-bottom: 3rem;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    max-width: calc(100% - 2rem);
    height: auto;
  }
`

export const PackageDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.5rem 0;
  align-items: center;
`
export const PackageName = styled.strong`
  font-weight: bolder;
  font-size: 1.2em;
  margin-right: 1rem;
`
export const PackageSummary = styled.span`
  font-weight: 400;
`
export const Installation = styled.pre`
  font-family: "Fira Code", monospace;
  background-color: ${mix(0.5)};
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  color: ${back};
`
