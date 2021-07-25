import styled from "@emotion/styled"
import { mq, t, mix, fore, back } from "utils/style"

export const OpenSourcePackages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  border-top: 1px solid ${mix(1 / 2)};
  margin: 0;
  margin-bottom: 3rem;
  ${t("border")};
`

export const Packages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

export const Title = styled.h3`
  text-transform: uppercase;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
