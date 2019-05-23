import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
    // Type or Press `Ctrl + Space` for autocompletion
    env: {},
    head: {
        htmlAttrs: {
            lang: "en"
        },
        title: "Culture Screen - Simplify Building Teams",
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
        ]
    },
    loading: { color: "#ee0028" },
    manifest: {
        name: 'Culture Screen - Simplify Building Teams',
        short_name: "Culture Screen",
        lang: 'en'
    },
    mode: "spa",
    css: ["~/assets/css/reset.css", "~/assets/css/main.css"],
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ["script", "style", "font"].includes(type);
            }
        }
    },
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
    modules: ["@nuxtjs/pwa", "@nuxtjs/axios"],
    plugins: ['@/plugins/jsonld'],
    axios: {}
};

export default config;
