import Pkg from "components/Package"
import Link from "components/Link"
import { ripjam } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      {code`ripjam`} is useful if you want to quickly build reusable testing
      harnesses.
    </>
  ),
  two: (
    <>
      By default it is designed to work with `jest`, but it should be usable
      with other <Link href="#custom-hook">testing frameworks</Link>.
    </>
  ),
}

const examples = [
  {
    title: `Basic reusable testing`,
    code: `import { hook } from 'ripjam/test'

// call the hook to get access to the interfaces within a jest context
const { riptest } = hook()

// a function to test
function basic(x) {
  return x * 2
}

// create a reusable test we can call
const testBasic = riptest(basic)

// pass a description, a single input and an expected output
testBasic('basic test', 1, 2)

// pass a description, arguments as an input and an expected output
testBasic('basic test with array params', [1], 2)
`,
  },
  {
    title: `Test two function implementations`,
    code: `import { hook } from 'ripjam/test'

const { same } = hook()

function basic(x) {
  return x * 2
}

const multiple = x => y => x * y

same([multiple(2), basic], 'multiple is the same as basic', 100, 200)
`,
  },
  {
    title: `Test two API implementations`,
    code: `import { hook } from 'ripjam/test'

const { shared } = hook()

function basic(x) {
  return x * 2
}

const multiple = x => y => x * y 

const oldImplementation = { basic, dope: z => 'dope: ' + z }
const newImplementation = {
  basic: multiple(2),
  dope: x => ['dope:', x].join(' '),
  newFunction: z => z * z * z
}

const answers = {
  basic: [100, 200],
  dope: ['yo', 'dope: yo']
}

shared(
  [oldImplementation, newImplementation],
  'test all the shared functionality',
  answers
)
`,
  },
]

const features = {
  one: [`Curried reusable tests`, [code`riptest`]],
  two: [`Test functions across two different implementations`, [code`same`]],
  three: [
    `Test interfaces across two different implementations`,
    [code`shared`],
  ],
}

const details = [
  {
    title: "Exclusive / specific interface testing",
    paragraphs: {
      one: (
        <>
          If the {code`shared`} function is given two implementations like the
          above and the answers object is missing an expected value, this will
          throw an error, unless you add a specific {code`only`} or {code`skip`}{" "}
          array to your answers object, e.g.
        </>
      ),
    },
    examples: [
      {
        title: `Shared function testing`,
        code: `const answers = {
  basic: [100, 200],
  a: ['yo', 'dope: yo']
  only: ['a'], // test only the 'a' interface on both objects
  skip: ['basic'] // do not test the 'basic' interface on both objects (not needed here as only above does the same)
}

shared(
  [oldImplementation, newImplementation],
  'test all the shared functionality',
  answers
)
        `,
      },
    ],
  },
  {
    title: `Custom testing hook`,
    paragraphs: {
      one: (
        <>
          If you would like to use a different testing framework than{" "}
          {code`jest`}, you can roll your own customized version of the
          out-of-the-box {code`hook`} that {code`ripjam`} provides like so:
        </>
      ),
    },
    examples: [
      {
        title: "Custom hook",
        code: `import {
  riptestWithConfiguration,
  sameImplementation,
  sameInterface
} from 'ripjam/test'

// you supply these
const binaryTestingFunction = (str, run) => test(str, run)
const binaryAssertionFunction = (input, output) => expect(input).toEqual(output)

const customhook = () => {
  const riptest = riptestWithConfiguration(binaryTestingFunction, binaryAssertionFunction)
  const config = {riptest, check: binaryTestingFunction, claim: binaryAssertionFunction}
  const same = sameImplementation(config)
  const shared = sameInterface(config)
  return { riptest, same, shared }
}

export const hook = customhook`,
      },
    ],
  },
]

const Ripjam = props => (
  <Pkg
    {...ripjam}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
    details={details}
  />
)

export default Ripjam
