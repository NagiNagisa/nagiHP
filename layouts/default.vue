<template>
    <v-app>
        <v-app-bar
            density="prominent"
            class="bg-transparent"
            flat
        >
            <v-app-bar-title>
                <v-img
                    height="128"
                    width="250"
                    src="./imgs/logo/logo.png"
                    >
                </v-img>

            </v-app-bar-title>
            <v-btn
                href="#profile"
                size="large">
                Profile
            </v-btn>
            <v-btn
                href="#activities"
                size="large">
                Activities
            </v-btn>
            <v-btn
                href="#live"
                size="large">
                Live
            </v-btn>
            <v-btn
                href="#gallery"
                size="large">
                Gallery
            </v-btn>

        </v-app-bar>

        <main>
            <slot></slot>
        </main>
        <v-footer class="d-flex flex-column pa-0">
            <v-row class="bg-teal w-100 py-16" no-gutters>
                <v-col cols="12" sm="6" class="px-12">
                    <v-img
                            width="200"
                            src="./imgs/logo/logo.png"
                    >
                    </v-img>
                </v-col>
                <v-col cols="12" sm="6" class="px-12">
                    <h2 class="text-h3 "> Social </h2>
                    <div class="ma-4">
                        <nuxt-link
                                class="text-decoration-none text-white"
                                href="https://www.youtube.com/channel/UCcjq9X1YAM9EO5kOkFpYZ-w"
                                target="_blank"
                        >
                            <v-icon color="red-lighten-1" class="mr-2"> {{ mdiYoutube }}</v-icon>
                            <span>Youtube</span>
                        </nuxt-link>
                    </div>
                    <div class="ma-4">
                        <nuxt-link
                                class="text-decoration-none text-white"
                                href="https://twitter.com/nagi_nagisachan"
                                target="_blank"
                        >
                            <v-icon color="blue-lighten-2" class="mr-2"> {{ mdiTwitter }}</v-icon>
                            <span>Twitter</span>
                        </nuxt-link>
                    </div>
                </v-col>
            </v-row>
            <v-row class="px-4 py-2 bg-black text-center w-100" no-gutters>
                <v-col cols="12">

                    {{ new Date().getFullYear() }} — <strong>Nagi Nagisa</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">
import {mdiTwitter, mdiYoutube} from "@mdi/js";
</script>

<style scoped lang="scss">

</style>