import styled from "@emotion/styled"

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 15rem;
  justify-content: center;
`

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ThemeDetailList = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ThemeDetailItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const ThemeDetailTerm = styled.dt`
  font-weight: bolder;
`
export const ThemeDetailDefinition = styled.dd`
  font-weight: 400;
`

export const ThemeDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.5rem;
  text-transform: uppercase;
`
