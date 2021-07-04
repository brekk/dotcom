import styled from "@emotion/styled"
import { mq, t, mix, fore, back } from "utils/style"

const packageWidth = mq({
  maxWidth: {
    T0: "100%",
    T1: "100%",
    S0: "calc(50% - 2rem)",
    S1: "calc(33.333% - 2rem)",
  },
})

export const OpenSourcePackage = styled.a`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid ${mix(1 / 2)};
  background: ${back};
  color: ${fore};
  cursor: pointer;
  ${t(["border", "background", "color"])}
  ${packageWidth}
  svg {
    fill: ${fore};
    ${t("fill")}
    .secondary {
      fill: ${mix(1 / 2)};
    }
  }
  &:hover {
    background: ${fore};
    color: ${back};
    svg {
      fill: ${back};
    }
    .secondary {
      fill: ${mix(1 / 2)};
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
  margin-bottom: 0.5rem;
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
  background-color: ${mix(2 / 3)};
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  color: ${fore};
  overflow: auto;
  ${t(["background", "color"])}
`
