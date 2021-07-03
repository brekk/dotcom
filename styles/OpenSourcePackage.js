import styled from "@emotion/styled"
import { mix, fore, back } from "utils/style"

export const OpenSourcePackage = styled.a`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  background: ${back};
  color: ${fore};
  cursor: pointer;
  svg {
    fill: ${fore};
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
`
export const PackageName = styled.strong`
  font-weight: bolder;
  margin-right: 1.5rem;
`
export const PackageSummary = styled.span`
  font-weight: 400;
`
export const Installation = styled.div`
  background-color: ${mix(0.5)};
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  color: ${back};
`
