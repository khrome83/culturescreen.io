import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
  // Type or Press `Ctrl + Space` for autocompletion
  env: {},
  head: {
    title: "culturescreen.io.www",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Culture Screen Website"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Raleway:300,400,700"
      }
    ]
  },
  loading: { color: "#ED303C" },
  mode: "spa",
  css: ["~/assets/css/main.css"],
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve("@nuxt/babel-preset-app"),
            {
              targets: isServer ? { node: "10" } : { ie: "11" },
              corejs: { version: 3 }
            }
          ]
        ];
      }
    },
    extend: config => {
      const svgRule = config.module.rules.find(rule =>
        (rule.test as RegExp).test(".svg")
      );

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader"
      });
    }
  },
  modules: ["@nuxtjs/axios"],
  axios: {}
};

export default config;
