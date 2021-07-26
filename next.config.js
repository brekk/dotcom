const path = require("path")
const withImages = require("next-images")
// const withPWA = require("next-pwa")
// const runtimeCaching = require("next-pwa/cache")

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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
    return config
  },
}
