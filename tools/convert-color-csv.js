const {
  C,
  fork,
  map,
  pipe,
  readStdin,
  smooth,
  split,
  j2,
  reduce,
  merge,
} = require("snang/script");

module.exports = pipe(
  readStdin,
  map(
    pipe(
      split(C.n),
      smooth,
      map(split(",")),
      reduce(
        (agg, [color, fore, back]) => merge(agg, { [color]: { fore, back } }),
        {}
      ),
      j2
    )
  ),
  fork(console.error, console.log)
)(process.argv.slice(2)[0]);
