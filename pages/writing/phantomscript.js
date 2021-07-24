import Pkg from "components/Package"
import Link from "components/Link"
import { phantomscript } from "data/packages"
import { longFlag, shortFlag, code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      Phantomscript was originally written about{" "}
      <Link href="https://github.com/jagracey/PhantomScript">here</Link>. This
      codebase simply encapsulates the ideas described in the original repo as
      an installable / runnable module.
    </>
  ),
  two: (
    <>
      This was done as an educational exercise but has potential for misuse. Use
      at your own risk.{" "}
      <Link href="https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66">
        Relevant
      </Link>{" "}
      article explaining how zero-width characters can be used in an underhanded
      manner.
    </>
  ),
  three: (
    <>
      Learn more about Unicode{" "}
      <Link href="https://github.com/Wisdom/Awesome-Unicode">here</Link>.
    </>
  ),
}

const examples = [
  {
    title: `Convert stdin to zero-width characters`,
    code: `npx phantomscript -e "encode this string"`,
  },
  {
    title: `Convert stdin from zero-width characters`,
    code: `npx phantomscript -e "encode this string" | npx phantomscript -d`,
  },
  {
    title: `Use the programmatic API`,
    code: `import {encode, decode} from 'phantomscript'
const MAGIC_KEY = encode('my-secret-key)
const logic = (input) => {
  if (MAGIC_KEY === encode(input)) {
    // do stuff?
  }
}`,
  },
]

const flags = [
  [[shortFlag("e"), longFlag("encode")], "convert to phantomscript"],
  [
    [shortFlag("d"), longFlag("decode")],
    <>convert from phantomscript ({code`-e`} flag takes precedence)</>,
  ],
  [[shortFlag("o"), longFlag("output")], "write to file"],
  [[longFlag("stdin")], "read from stdin"],
  [[shortFlag("h"), longFlag("help")], "output usage information"],
]

const features = {
  one: [`Convert text into zero-width characters`, [code`encode`]],
  two: [`Convert zero-width characters back into text`, [code`decode`]],
  three: [`A highly modularized codebase`],
}

const Phantomscript = props => (
  <Pkg
    {...phantomscript}
    paragraphs={paragraphs}
    features={features}
    flags={flags}
    examples={examples}
  />
)

export default Phantomscript
