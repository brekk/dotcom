import {
  cond,
  equals,
  T,
  identity as I,
  slice,
  split,
  map,
  pipe,
  mergeRight,
  reduce,
} from "ramda"
import { complextrace } from "envtrace"

export const log = complextrace("brekk-is", [
  "root",
  "info",
  "detail",
  "error",
  "component",
])

const convert = cond([
  [z => !isNaN(parseFloat(z)), parseFloat],
  [equals("true"), () => true],
  [equals("false"), () => false],
  [T, I],
])

export const query = () => {
  const { search: s } = window.location
  const value = pipe(
    slice(1, Infinity),
    split("&"),
    map(split("=")),
    reduce((agg, [k, v]) => mergeRight(agg, { [k]: convert(v) }), {})
  )(s)
  log.detail("query", value)
  return value
}
