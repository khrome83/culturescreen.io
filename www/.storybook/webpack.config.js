const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = async ({ config, mode }) => {
  const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

  svgRule.test = /\.(png|jpe?g|gif|webp)$/;

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf)$/,
    loaders: ["file-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.svg$/,
    loader: "vue-svg-loader"
  });

  config.resolve.extensions.push(
    ".ts",
    ".tsx",
    ".vue",
    ".css",
    ".less",
    ".scss",
    ".sass",
    ".html"
  );

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true // used with ForkTsCheckerWebpackPlugin
        }
      }
    ]
  });

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  config.module.rules.push({
    test: /\.stories\.ts?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { parser: "typescript" }
      }
    ],
    enforce: "pre"
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    "~": path.resolve(__dirname, "../")
  };

  // Return the altered config
  return config;
};
