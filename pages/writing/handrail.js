import Pkg from "components/Package"
import Link from "components/Link"
import { handrail } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      Add safety to your synchronous functions via Eithers /{" "}
      <Link href="https://en.wikipedia.org/wiki/Logical_disjunction">
        logical disjunction
      </Link>
      .
    </>
  ),
}

const examples = [
  {
    title: `Use guideRail to handle multiple synchronous cases`,
    code: `import {guideRail, fold} from 'handrail'
import {pipe} from 'ramda' // or lodash/fp

// here are two potential error cases
const over21 = ({age}) => age > 20
const hasMoney = ({cash}) => cash - 5 >= 0

// and these are the cases we pass to the end, before folding
const growUp = (user) => 'Expected ' + user.name + ' to be 21!'
const getAJob = (user) => 'Expected ' + user.name + ' to have at least 5 dollars!'

// here's our original function, which has some errors in its assumptions
const bartenderOfIllRepute = (user) => {
  user.cash -= 5
  user.beverages = user.beverages || []
  user.beverages.push('beer')
  return user
}

// here's how we fix it with guideRail
const bartenderOfGoodRepute = pipe(
  guideRail(
    [
      // add safety for age!
      [over21, growUp],
      // add safety for cash!
      [hasMoney, getAJob]
      // add more!
    ],
    // alter the Either value
    bartenderOfIllRepute
  ),
  // this just pulls our value out from the Either
  fold(I, I)
)
`,
  },
]

const features = {
  one: [`Memoized BEM string generators`, [code`blem`]],
  two: [`Wrap a synchronous function with a single Either`, [code`handrail`]],
  three: [
    `Wrap a synchronous function with multiple Eithers`,
    [code`multiRail`, code`guideRail`],
  ],
  four: [`Process Left and Right results independently`, [code`bimap`]],
  five: [`Pull a value from out of the Either monad`, [code`fold`]],
}

const Handrail = props => (
  <Pkg
    {...handrail}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Handrail
