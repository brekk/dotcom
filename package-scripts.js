module.exports = {
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
    lint: "next lint",
    generate: {
      colors:
        "cat tools/colors.csv | node tools/convert-color-csv.js > public/colors.json",
    },
  },
}
