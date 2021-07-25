import Pkg from "components/Package"
import Link from "components/Link"
import { entrust } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const features = {
  one: [
    `Delegatee-last curried function generators`,
    [code`e0`, code`e1`, `...`, code`e9`, code`e10`],
  ],
  two: [`Invoke delegated methods with array-based arguments`, [code`eN`]],
  three: [`Outrageously useful debug-mode™`, [code`eD`]],
}

const paragraphs = {
  one: (
    <>
      You can use {code`entrust`} to easily transform methods into a curried,
      delegatee-last (data-last) form. If you are used to functional programming
      (FP) paradigms, this makes FP in JS much easier.
      <Example
        title={"Example"}
        code={`import {e0} from 'entrust'
e0('toUpperCase')('abcde') === 'ABCDE'
`}
      />
    </>
  ),

  two: (
    <>
      {code`entrust`} is built using{" "}
      <Link href="/writing/katsu-curry">katsu-curry</Link>&apos;s {code`curry`}{" "}
      implementation. However, if you would like to use a different curry
      implementation, this is easily accomplished using the {code`custom`} API.
      This technique is used to generate {code`entrust`}&apos;s
      &ldquo;debug-mode&rdquo; export.
    </>
  ),
}

const examples = [
  {
    title: `Common uses`,
    code: `import {e0, e1, e2} from 'entrust'
const toUpper = e0('toUpperCase')
// toUpper('xyz') === 'XYZ'
const toLower = e0('toLowerCase')
// toLower('XYZ') === 'xyz'
const split = e1('split')
// split('x', 'axbxc') === ['a', 'b', 'c']
const join = e1('join')
// join('x', ['a', 'b', 'c']) === 'axbxc'
const map = e1('map')
// map(x => x * 2, [1,2,3]) === [2,4,6]
const reduce = e2('reduce')
// reduce(
//   (a, b) => a + b,
//   0,
//   [1,2,3,4,5]
// ) === 15
`,
  },
  {
    title: `Using entrust with composition`,
    code: `import {pipe} from 'ramda' // or lodash/fp
const talkProper = pipe(
  e1('split')(' '),
  e1('map')(
    x => x[0].toUpperCase() + x.substr(1)
  ),
  e1('join')(' ')
)
// talkProper('entrust is cool') === 'Entrust Is Cool'
`,
  },
]

const Entrust = props => (
  <Pkg
    {...entrust}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Entrust
