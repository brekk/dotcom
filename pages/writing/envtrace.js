import Pkg from "components/Package"
import Link from "components/Link"
import { envtrace } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      All the convenience of {code`xtrace`} combined with the environmental
      logging of {code`debug`} in a single package.
    </>
  ),
}

const examples = [
  {
    title: `Add conditional logging`,
    code: `// my-file.js
import { pipe } from 'ramda'
import { envtrace } from 'envtrace'

const ntrace = envtrace('dope')

const myFunction = pipe(
  ntrace('input'),
  x => x * 2,
  ntrace('output')
)
// Run this file with:
// DEBUG=dope node my-file.js
`,
  },
  {
    title: `Multiple conditional logs`,
    code: `// file: example-complex.js
const { pipe } = require('ramda')
const { complextrace } = require('envtrace')

const log = complextrace('example', [
  'info',
  'warn',
  'detail',
  'error'
])

const example = pipe(
  log.info('input'),
  x => x * 2,
  log.warn('twice'),
  x => x * 3,
  log.detail('deets'),
  x => x * 4,
  log.error('nice'),
  x => x * 5,
  log.info('output')
)
example(10)
// This file can be run with DEBUG=example:* node example-complex.js
// And this will print:
/*
example:info input 10 +0ms
example:warn twice 20 +0ms
example:detail deets 60 +0ms
example:error nice 240 +0ms
example:info output 1200 +3ms
*/
`,
  },
  {
    title: `Multiple conditional logs with scoped strings`,
    code: `// file: example-multi.js
import { pipe } from 'ramda'
import { multitrace } from 'envtrace'

const log = multitrace({
  server: 'my-app:server:info',
  api: 'my-app:server:api',
  client: 'my-app:client',
})

// this is a poor real-world example but will run
const example = pipe(
  log.server('input'),
  x => x * 2,
  log.api('twice'),
  x => x * 3,
  log.client('deets'),
  x => x * 4,
  log.client('nice'),
  x => x * 5,
  log.client('output')
)
example(10)
// This file can be run with DEBUG=my-app:* node example-multi.js
// And this will print:
/*
my-app:server:info input 10 +0ms
my-app:server:api twice 20 +0ms
my-app:client deets 60 +0ms
my-app:client nice 240 +0ms
my-app:client output 1200 +3ms
*/
// This file can be run with DEBUG=my-app:server* node example-multi.js
// And this will print:
/*
my-app:server:info input 10 +0ms
my-app:server:api twice 20 +0ms
*/
`,
  },
]

const features = {
  one: [`effortless conditional logging`, [code`envtrace`]],
  two: [`conditional logging with multiple loggers`, [code`complextrace`]],
  three: [`conditional logging with scoped context`, [code`multitrace`]],
}

const Envtrace = props => (
  <Pkg
    {...envtrace}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Envtrace
