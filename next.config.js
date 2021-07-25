const path = require("path")
// const withPWA = require("next-pwa")
// const runtimeCaching = require("next-pwa/cache")

module.exports = {
  // pwa: {
  //   dest: "public",
  //   runtimeCaching,
  // },
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
