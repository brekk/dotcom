import Pkg from "components/Package"
import Link from "components/Link"
import { blem } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const features = {
  one: [`Memoized BEM string generators`, [code`blem`]],
}

const paragraphs = {
  one: (
    <>
      blem allows for the creation of BEM notation strings (as described{" "}
      <Link href="https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">
        here
      </Link>
      ) in a simple and intuitive manner.
    </>
  ),
  two: (
    <>
      This portfolio site uses blem extensively. Use the developer tools to
      inspect and see the architecture.
    </>
  ),
  three: (
    <>
      For a simple code sandbox in which to play with blem, see{" "}
      <Link href="https://codepen.io/brekk/pen/WLzEqo">this example</Link> on
      codepen.
    </>
  ),
}

const examples = [
  {
    title: `Generate a BEM-style selector`,
    code: `import blem from 'blem'
 
const bem = blem('xxx')
 
// block
bem() === 'xxx'
// block with modifier
bem('', 'cool') === 'xxx xxx--cool'
// block with modifiers
bem('', 'abc'.split('')) === 'xxx xxx--a xxx-b xxx-c'
 
// element
bem('yyy') === 'xxx__yyy'
// element with modifier
bem('yyy', 'zzz') === 'xxx__yyy xxx__yyy--zzz'
// element with modifiers
bem('yyy', 'abc'.split('')) === 'xxx__yyy xxx__yyy--a xxx__yyy--b xxx__yyy--c'
 
/*
const X = ({
  bem = blem('xxx')
  title
}) => (
  <div className={bem()}>
    <strong className={bem('title')}>
      {title}
    </strong>
  </div>
)
*/
`,
  },
]

const Blem = props => (
  <Pkg
    {...blem}
    paragraphs={paragraphs}
    features={features}
    examples={examples}
  />
)

export default Blem
