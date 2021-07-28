import styled from "@emotion/styled"
import { ifElse, propEq } from "ramda"
import { mq, t, mix, fore, back } from "utils/style"
import Link from "components/Link"
import { ControlPanel } from "styles/ControlPanel"

const packageWidth = mq({
  width: {
    T0: "calc(100% - 10rem)",
    S1: "calc(50% - 4rem)",
    S3: "calc(33.333% - 3.5rem)",
    M2: "calc(33.333% - 6rem)",
  },
})

const packageBordersLastThree = props =>
  mq({
    borderBottom: {
      T0: `1px solid ${mix(1 / 2)(props)}`,
      S3: `1px solid transparent`,
    },
  })
const packageBordersLastTwo = props =>
  mq({
    borderBottom: {
      T0: `1px solid ${mix(1 / 2)(props)}`,
      S1: `1px solid transparent`,
      S3: `1px solid transparent`,
    },
  })

export const OpenSourcePackage = styled(Link)`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  padding: 1rem;
  background: ${back};
  border-bottom: 1px solid ${mix(1 / 2)};
  color: ${fore};
  cursor: pointer;
  ${t(["border", "background", "color", "width"])}
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
  &:nth-last-of-type(3) {
    ${packageBordersLastThree}
  }
  &:nth-last-of-type(2),
  &:last-of-type {
    ${packageBordersLastTwo}
  }
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 100%;
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
  font-size: 1em;
  margin-right: 0.5rem;
`
export const PackageSummary = styled.span`
  font-weight: 400;
`
