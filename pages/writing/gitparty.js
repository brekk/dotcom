import Pkg from "components/Package"
import Link from "components/Link"
import { gitparty } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      Add a {code`.gitpartyrc`} file to add additional data to your git commits.
    </>
  ),
}

const examples = [
  {
    title: `.gitpartyrc`,
    code: `js:
  key: J
  color: bgBlueBright
  matches:
  - src/*.js
lint:
  key: L
  color: bgMagenta
  matches:
  - \**/.eslintrc
tests:
  key: T
  color: bgRed
  matches:
  - \**/*.spec.js
gitpartyrc:
  key: G
  color: bgRedBright
  matches:
  - \**/.gitpartyrc
config:
  key: C
  color: bgCyan
  matches:
  - \**/package.json
  - \**/rollup/*
  - \**/webpack*
  - \**/^.*
dependencies:
  key: D
  color: bgYellow
  matches:
  - \**/package.json
  - \**/yarn.lock
`,
  },
]

const Gitparty = props => (
  <Pkg {...gitparty} paragraphs={paragraphs} examples={examples} />
)

export default Gitparty
