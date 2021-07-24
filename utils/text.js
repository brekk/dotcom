import {
  memoizeWith,
  __ as $,
  head,
  reject,
  gt,
  add,
  map,
  last,
  concat,
  curry,
  identity as I,
  length,
  lt,
  of,
  pipe,
  reduce,
  replace,
  slice,
  split,
  toLower,
  when,
} from "ramda"

export function code(strings) {
  return <code>{strings.join("")}</code>
}

export const longFlag = x => `--${x}`
export const shortFlag = x => `-${x}`

export const SLUG_LIMIT = 40

const indicesOfChar = curry((char, str) =>
  pipe(
    split(char),
    reduce(
      (indices, chunk) =>
        pipe(length, add(1), add(last(indices)), of, concat(indices))(chunk),
      [0]
    ),
    slice(1, -1),
    map(add(-1))
  )(str)
)

const cleanCut = curry((char, limit, str) =>
  pipe(indicesOfChar(char), reject(gt(limit)), head, slice(0, $, str))(str)
)

export const slug = memoizeWith(I)(
  when(
    I,
    pipe(
      toLower,
      replace(/[\s\.]/g, "-"),
      replace(/[\(\),]/g, ""),
      when(pipe(length, lt(SLUG_LIMIT)), cleanCut("-", SLUG_LIMIT))
    )
  )
)
