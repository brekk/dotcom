module.exports = {
  reactStrictMode: true,
  webpack(config) {
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
