import styled from "@emotion/styled"

import { ControlPanel } from "styles/ControlPanel"
import Link from "styles/Link"
import { t, mq, fore, mix } from "utils/style"
import Installation from "components/Installation"
const width = mq({
  width: {
    T0: "100%",
    S2: "75%",
    M0: "50%",
    M2: "40%",
  },
})
export const Pkg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const PkgHeader = styled.header`
  display: flex;
  flex-direction: column;
  ${t("width")}
  ${width}
  ${ControlPanel} {
    margin-top: 1rem;
  }
`
export const PkgLogo = styled.div`
  svg {
    width: calc(100% - 4rem);
    max-width: 30rem;
    fill: ${fore};
    .secondary {
      fill: ${mix(1 / 2)};
    }
  }
`
export const PkgTitle = styled.h1`
  margin: 0;
  padding: 0;
`
export const PkgInstallation = Installation

export const PkgMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  ${t("width")}
  ${width}
`
export const PkgDetails = styled.div``
export const PkgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: ${p => (p.title ? "2rem" : "0")} 1rem;
`

const graphWidth = mq({
  maxWidth: {
    T0: "100%",
    S2: "75%",
    M0: "50%",
    M2: "40%",
  },
})
export const PkgParagraph = styled.p`
  text-indent: 1.5rem;
  margin: 1rem auto;
`
export const PkgHeading = styled.h2``
export const PkgFeatures = styled.ul`
  padding: 0;
  padding-left: 1.5rem;
  margin: 0;
  text-align: left;
`
export const PkgFeature = styled.li`
  display: list-style;
  list-style: disc;
`
export const PkgCode = styled.div``
export const PkgCodeHeader = styled.h3``
export const PkgCodeBlock = styled.pre``

export const PkgElsewhere = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  svg {
    margin-left: 0.5rem !important;
  }
  ${Link} {
    margin: 2rem 0.5rem 1rem 0.5rem !important;
  }
`

export const PkgExamples = styled.div`
  display: flex;
  flex-wrap: wrap;
`
