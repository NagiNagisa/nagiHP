// https://nuxt.com/docs/api/configuration/nuxt-config
import {ViteConfig} from "@nuxt/schema";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    app:{
        baseURL: '/nagiHP/'
    },
    typescript: {
        shim: false,
        strict: true,
        typeCheck: true
    },
    css: ['vuetify/styles'],
    build: {
        transpile: ['vuetify']
    },
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    },
    hooks: {
        'vite:extendConfig'(config: ViteConfig) {
            config.plugins?.push(vuetify())
        }
    }



})
