import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Define the source directory of your Nuxt application.
    srcDir: "src",
    //
    publicRuntimeConfig: {
        API_URL: 'http://localhost:5000/api/v1'
    },
    // Nuxt App configuration.
    app: {
        // The base path of your Nuxt application.
        baseURL: "/",
        // The folder name for the built site assets, relative to baseURL (or cdnURL if set). 
        // This is set at build time and should not be customized at runtime.
        buildAssetsDir: "/_nuxt/",
        // An absolute URL to serve the public folder from (production-only).
        cdnURL: "",
        // Set default configuration for <head> on every page.
        head: {
            "title": "Quicklify",
            "meta": [
                { name: "charset", content: "utf-8" },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: '#26bcf1' },
            ],
            "link": [],
            "style": [],
            "script": []
        }
    },
    // You can define the CSS files/modules/libraries you want to set globally (included in every page).
    css: ["@/assets/css/index.css"],
    //
    modules: [
        "@vueuse/nuxt",
        "@unocss/nuxt",
        "@pinia/nuxt",
    ],
    // 
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle'
            }
        },
        shortcuts: [],
        rules: [],
    },
    // 
    vueuse: {
        ssrHandlers: true,
    },
    //
    typescript: {
        strict: true
    }
})
