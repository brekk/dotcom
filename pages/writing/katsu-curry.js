import Pkg from "components/Package"
import Link from "components/Link"
import { katsuCurry } from "data/packages"
import { code } from "utils/text"

const features = {
  one: ["Traditional parameter currying:", [code`curry`]],
  two: [
    "Object-style currying:",
    [code`curryObjectK`, code`curryObjectN`, code`curryObjectKN`],
  ],
  three: [
    "Partial application with any combination of arguments",
    [code`$`, code`PLACEHOLDER`],
  ],
  four: [
    "Utilities",
    ["for remapping parameters", [code`remap`, code`remapArray`]],
    ["for function composition", [code`pipe`, code`compose`]],
    ["for function constants", [code`K`]],
    ["for functional identity", [code`I`]],
  ],
  five: [
    "An outrageously useful debug-mode™",
    [
      `add clarity when things aren't working (at the cost of speed)`,
      code`import debug from 'katsu-curry/debug'`,
      code`require('katsu-curry/debug')`,
    ],
  ],
}

const paragraphs = {
  one: (
    <>
      <Link href="https://fr.umio.us/favoring-curry">Currying</Link> is a
      technique for taking a function which expects multiple parameters into one
      which, when supplied with{" "}
      <Link href="https://brekk.github.io/katsu-curry/docs/API.html#curry">
        fewer parameters
      </Link>{" "}
      (or potentially,{" "}
      <Link href="https://brekk.github.io/katsu-curry/docs/API.html#curryObjectN">
        other expectations
      </Link>
      ) returns a new function that awaits the remaining ones.
    </>
  ),
  two: (
    <>
      This library provides solutions for{" "}
      <Link href="https://brekk.github.io/katsu-curry/docs/API.html#curry">
        traditional curry
      </Link>
      , specifying a{" "}
      <Link href="https://brekk.github.io/katsu-curry/docs/API.html#curryObjectK">
        number of keys for object-style curry
      </Link>{" "}
      (as originated by the <Link href="https://npmjs.org/Pkg/fpo">fpo</Link>{" "}
      module and <Link href="https://leanpub.com/fljs">this book</Link>) as well
      as a (currently underwhelming in performance){" "}
      <Link href="https://brekk.github.io/katsu-curry/docs/API.html#curryObjectK">
        explicit-key object-style curry
      </Link>
      ).
    </>
  ),
  three: (
    <>
      Additionally, similarly to{" "}
      <Link href="https://brekk.github.io/katsu-curry/#benchmark">
        other libraries
      </Link>{" "}
      in the space, this library provides a &quot;placeholder&quot; value which
      can be used to{" "}
      <Link href="https://brekk.github.io/katsu-curry/docs/API-in-debug-mode.html">
        omit a parameter
      </Link>{" "}
      in partial-application.
    </>
  ),
}

const examples = [
  {
    title: `Deal with parameters at your leisure`,
    code: `import {curry} from 'katsu-curry'
const add = curry((a, b, c) => a + b + c)
add(1,2,3)
add(1,2)(3)
add(1)(2)(3)
`,
  },
  {
    title: `Use the placeholder to skip parameters`,
    code: `import {curry, $} from 'katsu-curry'
// $ is also aliased to PLACEHOLDER
const divide = curry((a,b) => a / b)
divide(2) // of limited utility
divide(2)(3) // 2/3
divide($,2)(3) // 3/2
`,
  },
  {
    title: `Use debug mode for additional clarity`,
    code: `import {curry} from 'katsu-curry/debug'
const over = (a,b) => a / b // named functions are useful!
const divide = curry(over)
divide(2).toString() // curry(over)(2)(?)
divide(2)(3) // 2/3
divide($,2).toString() // curry(over)(🍛,2)(?)
`,
  },
  {
    title: `Use object-mode with a specific arity`,
    code: `import {curryObjectN} from 'katsu-curry'
const threeKeyProps = curryObjectN(3, Object.keys)
threeKeyProps({a: 1, b: 2, c: 3}) // ['a', 'b', 'c']
const oneMore = threeKeyProps({a: 1, b: 2}) // function expecting one more param
const encase = (x) => ({[x]: x})
'cdefghi'.split('').map(encase).map(oneMore)
/*
[ [ 'a', 'b', 'c' ],
  [ 'a', 'b', 'd' ],
  [ 'a', 'b', 'e' ],
  [ 'a', 'b', 'f' ],
  [ 'a', 'b', 'g' ],
  [ 'a', 'b', 'h' ],
  [ 'a', 'b', 'i' ] ]
*/
`,
  },
  {
    title: `Use object-mode with specific keys`,
    code: `import {curryObjectK} from 'katsu-curry'
const abc = curryObjectK(['a', 'b', 'c'], Object.values)
abc({a: 1, b: 2, c: 3}) // [1, 2, 3]
const oneMore = abc({a: 1, b: 2}) // function expecting "c"
const encase = (x) => ({[x]: x})
'cdefghi'.split('').map(encase).map(oneMore)
/*
[ [ 1, 2, 3 ],
  function,
  function,
  function,
  function,
  function,
  function ]
*/    
`,
  },
]

const KatsuCurry = props => (
  <Pkg
    {...katsuCurry}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default KatsuCurry
