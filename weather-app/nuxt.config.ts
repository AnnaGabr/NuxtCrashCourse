import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET
    },
    // publicRuntimeConfig - accesiblel to the client and the server
    // privateRuntimeCOnfig - accesible only to the server
    css: [
        "@/assets/css/tailwind.css"
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        }
    }
})
