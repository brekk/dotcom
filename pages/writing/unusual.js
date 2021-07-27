import Pkg from "components/Package"
import Link from "components/Link"
import { unusual } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: <>Inspired by {code`chance`} but designed to be much smaller in size.</>,
}

const examples = [
  {
    title: `Create an random value with a seed`,
    code: `const Unusual = require('unusual')
// or, in ESM
import Unusual from 'unusual'
const SEED = 420 // accepts numbers / strings / arrays
const unusualInstance = new Unusual(SEED)
const x = unusualInstance.random()
`,
  },
  {
    title: `Shuffle an array of values`,
    code: `const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const x = unusualInstance.shuffle(alphabet)
console.log(x)
/* [
  'j', 'e', 'x', 'p', 'f', 'r',
  'd', 'g', 'z', 'l', 't', 'u',
  'o', 'a', 'n', 'v', 's', 'k',
  'h', 'm', 'c', 'y', 'b', 'i',
  'w', 'q'
] */
`,
  },
  {
    title: `Use debug mode for more detail`,
    code: `import Unusual from 'unusual/debug'
const SEED = 420 // accepts numbers / strings / arrays
const unusualInstance = new Unusual(SEED)
const x = unusualInstance.random()
console.log("X", x)
// run this file with the environment variable DEBUG=unusual*
`,
  },
]

const features = {
  random: [`Idempotent Math.random`, [code`random`]],
  floor: [<>Idiomatic {code`Math.floor(Math.random() * x)`}</>, [code`floor`]],
  floorMin: [<>{code`floor`} with a minimum value</>, [code`floorMin`]],
  range: [`Select a number in a range`, [code`range`]],
  pick: [`Pick a value in an array`, [code`pick`]],
  pickKey: [`Pick a key from an object`, [code`pickKey`]],
  pickValue: [`Pick a value from an object`, [code`pickValue`]],
  shuffle: [`Randomly shuffle an array`, [code`shuffle`]],
  five: [
    <>
      An outrageously useful debug-mode™ which relies on{" "}
      <Link href="/envtrace">{code`envtrace`}</Link>
    </>,
    [
      `add clarity when things aren't working`,
      code`import debug from 'unusual/debug'`,
      code`require('unusual/debug')`,
    ],
  ],
}

const Unusual = props => (
  <Pkg
    {...unusual}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Unusual
