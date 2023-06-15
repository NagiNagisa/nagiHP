// https://nuxt.com/docs/api/configuration/nuxt-config
import {ViteConfig} from "@nuxt/schema";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    app:{
        // baseURL: '/nagiHP/',
        // cdnURL: '/nagiHP/'
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: '凪なぎさ VTuberの公式ホームページ',
            htmlAttrs: {
                lang: 'ja',
            },
            meta: [
                { property: 'og:url', content: 'https://site.naginagisa.com/' },
                { property: 'og:title', content: '凪なぎさ VTuberの公式ホームページ' },
                { property: 'og:site:name', content: '凪なぎさ VTuberの公式ホームページ' },
                { property: 'og:image', content: 'https://site.naginagisa.com/imgs/og_image.png' },
                { property: 'og:type', content: 'website' },
                { name: 'description', content: 'VTuber凪なぎさの公式ホームページです。ピアノ、プログラミング、将棋など幅広い分野で活躍しています。' },
                { property: 'og:description', content: 'VTuber凪なぎさの公式ホームページです。ピアノ、プログラミング、将棋など幅広い分野で活躍しています。' },
            ],
        }
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
