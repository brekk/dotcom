import styled from "@emotion/styled"
import { mq, fore, back } from "utils/style"
import Link from "styles/Link"

export const Example = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

export const ExampleTitle = styled.h4`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin: 2rem 0 0;
  padding: 0;
  ${Link} {
    margin-right: 0.5rem;
  }
`

export const ExamplePre = styled.pre`
  display: flex;
  flex-direction: column;
`

export const ExampleCode = styled.code`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${back};
  background: ${fore};
  padding: 1rem;
  white-space: pre-wrap;
  margin: 0 auto;
  width: calc(100% - 2rem);
`
