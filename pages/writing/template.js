import Pkg from "components/Package"
import Link from "components/Link"
import { bodypaint } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      Use inline javascript to manipulate text streams. Based on ideas from{" "}
      <code>jayin</code> and <code>pipeable-js</code>
    </>
  ),
}

const examples = [
  {
    title: `Grab eslint related devDependencies`,
    code: `cat package.json | snang -iP "prop('devDependencies') | keys | filter(includes('eslint')) | join(C._)" 
`,
  },
]

const features = {
  one: [`Memoized BEM string generators`, [code`blem`]],
}

const Bodypaint = props => (
  <Pkg
    {...bodypaint}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Bodypaint
