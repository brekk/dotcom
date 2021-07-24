import Pkg from "components/Package"
import Link from "components/Link"
import { ljs2 } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: <>LJS2 is a tool for literate programming in JS.</>,
}

const examples = [
  {
    title: `an-includable-file.md`,
    code: `This is an *import*!`,
  },
  {
    title: `an-includable-literate-file.js`,
    code: `const otherCode = () => {}`,
  },
  {
    title: `a-literate-js-file.js`,
    code: `// # a-literate-js-file.js
// # use the '#' character to ignore a line on a single line
/**
The slash-double-asterisk above is called a "magic header" and this makes this block comment visible in the resulting markdown file.
# h1
_markdown_!
*/
// # use the "=>" magic directive to either:
// # read some other file as a plain document
// => plain some-file.md
// # or read some other file as another literate JS file
// => include some-include.js

const myCode = () => {
  // ostensibly you'd put some real code here that does something
}

`,
  },
  {
    title: `Run ljs2!`,
    code: `$ npx ljs2 ./my-example-file.js
`,
  },
  {
    title: `Results`,
    code: `The slash-double-asterisk above is called a "magic header" and this makes this block comment visible in the resulting markdown file.
# h1
_markdown_!

This is an *import*!

\`\`\`js
const otherCode = () => {}
\`\`\`

\`\`\`js
const myCode = () => {
  // ostensibly you'd put some real code here that does something
}
\`\`\`
`,
  },
]

const LJS2 = props => (
  <Pkg {...ljs2} paragraphs={paragraphs} examples={examples} />
)

export default LJS2
