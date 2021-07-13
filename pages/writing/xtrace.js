import Pkg from "components/Package"
import Link from "components/Link"
import { xtrace } from "data/packages"
import { code } from "utils/text"

const features = {
  one: [`Add unary side-effects`, [code`callWithScopeWhen`]],
  two: [`Add binary side-effects`, [code`callBinaryWithScopeWhen`]],
  three: [`Add "object-style" side-effects`, [code`segment`]],
  four: [
    `Use sugar functions for even easier composition`,
    [
      code`callWithScope`,
      code`callWhen`,
      code`call`,
      code`callBinaryWithScope`,
      code`callBinaryWhen`,
      code`callBinary`,
    ],
  ],
  five: [
    `Use the logging functions for even fewer keystrokes`,
    [code`traceWithScopeWhen`, code`inspect`, code`trace`, code`traceSegment `],
  ],
}

const paragraphs = {
  one: <>Add side-effects to your functional pipelines.</>,
}

const examples = [
  {
    title: `Add painless logging`,
    code: `import { trace } from "xtrace"
import { pipe } from "ramda"
const myFunction = pipe(
  functionA,
  trace("from A -> B"),
  functionB
)
`,
  },
  {
    title: ` Add transparent side-effects`,
    code: `import { callWithScopeWhen } from "xtrace"
import { pipe, prop } from "ramda"
const logWhen = callWithScopeWhen(console.log)
const getId = prop('id')
const idAbove = above => id => id > above
// ... log as you calculate
const myFunction = pipe(
  logWhen(idAbove(300), getId, 'above three hundred'),
  calculate
)
`,
  },
  {
    title: ` Add binary side-effects`,
    code: `import { callBinaryWithScopeWhen } from "xtrace"
import { prop, pipe } from "ramda"
const logWithScopeWhen = callBinaryWithScopeWhen(console.log)
// ... log as you calculate
const myFunction = pipe(
  logWithScopeWhen(
    id => id === 200,
    prop('id'),
    'the 200 id item'
  ),
  calculate
)
`,
  },
  {
    title: ` Add binary side-effects with a curried object interface`,
    code: `import {segment} from "xtrace"
import {prop} from "ramda"
// ... log the item whose id is 300 before calculating
const myFunction = pipe(
  value => segment({
    when: id => id === 300,
    what: prop('id'),
    call: console.log,
    tag: 'the 300 item',
    value
  })
  reduce(calculate, {})
)
`,
  },
]

const Xtrace = props => (
  <Pkg
    {...xtrace}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Xtrace
