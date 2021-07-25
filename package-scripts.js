module.exports = {
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
    restart: "nps build start",
    lint: "next lint",
    non_npm_deps: "brew install imagemagick",
    generate: {
      colors:
        "cat tools/colors.csv | node tools/convert-color-csv.js > public/colors.json",
      favicon:
        "magick -density 256x256 -background transparent logos/favicon.svg -define icon:auto-resize -colors 256 public/favicon.ico",
    },
  },
}
