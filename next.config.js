const path = require("path")
const withMDX = require("@next/mdx")

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  prefixIds: false,
                },
                { prefixClassNames: false },
              ],
            },
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
        },
      ],
    })
    return config
  },
}
