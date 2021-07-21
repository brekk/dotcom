import Pkg from "components/Package"
import Link from "components/Link"
import { snang } from "data/packages"
import { code } from "utils/text"
import Example from "components/Example"

const paragraphs = {
  one: (
    <>
      Use inline javascript to manipulate text streams. Based on ideas from{" "}
      <code>jayin</code> and <code>pipeable-js</code>
    </>
  ),
  two: (
    <ol>
      <li>x refers to the current buffer contents</li>
      <li>
        Both ramda and entrust have been injected into the sandbox, so any
        method of theirs will work
      </li>
      <li>
        <code>fluture</code> has also been injected into the sandbox, but it is
        aliased to the literal <code>F</code>.
      </li>
      <li>
        <code>exec</code> allows you to run <code>child_process.execSync</code>{" "}
        on the given string. This allows you to construct meta commands.
      </li>
    </ol>
  ),
}
const longFlag = x => `--${x}`
const shortFlag = x => `-${x}`
const flags = [
  [
    [longFlag("debug"), shortFlag("d")],
    `Pass integers in to get specific debug information`,
  ],
  [[longFlag("help"), shortFlag("h")], `See this help text`],
  [
    [longFlag("color"), shortFlag("C")],
    `Display output with color. Use --${code`no-color`} to turn color off.`,
  ],
  [
    [longFlag("shell"), shortFlag("P")],
    `Specify pipe commands with "|" delimiters, like in *nix`,
  ],
  [[longFlag("pipe"), shortFlag("p")], `Wrap passed expression in pipe`],
  [[longFlag("compose"), shortFlag("c")], `Wrap passed expression in compose`],
  [[longFlag("json"), shortFlag("i")], `Read JSON values in`],
  [[longFlag("jsonOut"), shortFlag("o")], `Pass JSON values out`],
  [
    [longFlag("prettyPrint"), shortFlag("L")],
    `Print the commands you've passed into snang, but pretty`,
  ],
  [
    [longFlag("print"), shortFlag("l")],
    `Print the commands you've passed into snang`,
  ],
  [
    [longFlag("exportFile"), shortFlag("x")],
    `Print the commands you've passed into snang, but as a file`,
  ],
  [
    [longFlag("exportES6"), shortFlag("X")],
    `Print the commands you've passed into snang, but as an ES6 file`,
  ],
  [
    [longFlag("readStdinOnExport"), shortFlag("t")],
    <>
      Used in concert with -{code`X`} / -{code`x`}, this makes the resulting
      file deal with stdin as an input
    </>,
  ],
  [
    [longFlag("readFileOnExport"), shortFlag("u")],
    <>
      Used in concert with -{code`X`} / -{code`x`}, this makes the resulting
      file deal with a file as an input
    </>,
  ],
  [
    [longFlag("readDirOnExport"), shortFlag("v")],
    <>
      Used in concert with -{code`X`} / -{code`x`}, this makes the resulting
      file deal with a directory as an input
    </>,
  ],
  [
    [longFlag("read"), shortFlag("r")],
    `Read from a file. If this is not passed, snang reads from stdin.`,
  ],
  [
    [longFlag("write"), shortFlag("w")],
    `Write from a file. If this is not passed, snang writes to stdout.`,
  ],
  [
    [longFlag("require"), shortFlag("q")],
    `Add a commonjs file to be used within snang's vm.`,
  ],
  [
    [longFlag("import"), shortFlag("Q")],
    `Add an ES6 style file to be used within snang's vm. Impacts performance, as this transpiles sources on the fly.`,
  ],
  [
    [longFlag("future"), shortFlag("f")],
    `If the resulting output of the expression is a Future, fork it to (stderr, stdout).`,
  ],
  [
    [longFlag("trim"), shortFlag("m")],
    `Trim the trailing \\n of the input. Default: true`,
  ],
  [
    [longFlag("source"), shortFlag("s")],
    <>
      Add a source file which takes the form --
      {code`source ref:path/to/file.js`}. Adds a source object to the VM which
      has sources as Futures.
    </>,
  ],
  [
    [longFlag("config"), shortFlag("k")],
    `Pass a config file to snang. Uses cosmiconfig, so any of the following is valid: '.snangrc' '.snangrc.json' '.snangrc.js' '.snangrc.yaml' '.snangrc.config.js' or a "snang" property in package.json.`,
  ],
]

const examples = [
  {
    title: `Grab eslint related devDependencies`,
    code: `cat package.json | snang -iP "prop('devDependencies') | keys | filter(includes('eslint')) | join(C._)" 
`,
  },
  {
    title: `read name from package.json`,
    code: `// each line below is equivalent
snang --read package.json --json "x.name"                               
snang --read package.json --json --pipe "prop('name')"
cat package.json | snang -i "x.name"
cat package.json | snang -ip "prop('name')"
`,
  },
  {
    title: `list the devDependencies in package.json which have eslint in the name of the key, as a string`,
    code: `// each line below is equivalent
snang --read package.json --json --shell "prop('devDependencies') | keys | filter(matches('eslint')) | join(' ')"
cat package.json | snang -iP "prop('devDependencies') | keys | filter(matches('eslint')) | join(' ')"
`,
  },
  {
    title: `read package.json, filter devDependencies and then pass to yarn and execute`,
    code: `// each line below is equivalent
cat package.json | snang --json "exec( 'yarn add ' + Object.keys(x.devDependencies).filter(z => z.includes('eslint')).join(' ') + '-D' )"
cat package.json | snang -iP "prop('devDependencies') | keys | filter(includes('eslint')) | join(' ') | z => 'yarn add ' + z + ' -D') | exec"
cat package.json | snang -iP "prop('devDependencies') | keys | filter(includes('eslint')) | join(' ')" | xargs yarn add -D
`,
  },
  {
    title: `read package.json, require local node-module (with optional alias)`,
    code: `// each line below is equivalent
snang --read package.json --json --require camel-case -P "prop('devDependencies') | keys | map(camelCase.camelCase)" -o
snang --read package.json --json --require kool:camel-case -P "prop('devDependencies') | keys | map(kool.camelCase))" -o
`,
  },
  {
    title: `read package.json, import es6 module (with optional alias)`,
    code: `// each line below is equivalent
snang --read package.json --json --import ./require-test-simple.mjs -P "prop('devDependencies') | keys | map(requireTestSimple)" -o
snang --read package.json --json --import kool:./require-test-simple.mjs -P "prop('devDependencies') | keys | map(kool))" -o
`,
  },
]

const Snang = props => (
  <Pkg {...snang} paragraphs={paragraphs} flags={flags} examples={examples} />
)

export default Snang
