<template>
    <v-app>
        <v-app-bar
                density="default"
                class="bg-transparent"
                flat
        >
            <v-app-bar-title>
                <v-img
                        height="68"
                        width="250"
                        src="./imgs/logo/logo.png"
                >
                </v-img>

            </v-app-bar-title>
            <div
                    v-if="$vuetify.display.mdAndUp"
            >

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

            </div>
            <v-btn
                    @click.stop="navActive = !navActive"
                    size="large"
            >
                <div
                        class="hamburger-menu"
                        v-bind:class="{active: navActive}"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer
                temporary
                v-model="navActive"
                location="left"
                :width="$vuetify.display.width"
                class=""
                color="blue-lighten-5"
                elevation="0"
                disable-resize-watcher
        >
            <v-container class="position-relative">
                <v-img
                        style="z-index: 1;"
                        height="125"
                        src="./imgs/logo/logo.png"
                ></v-img>
                <v-list
                        style="z-index: 1;"
                >
                    <v-list-item>
                        <v-btn
                                variant="text"
                                href="#profile"
                                size="large">
                            Profile
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn
                                variant="text"
                                href="#activities"
                                size="large">
                            Activities
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn
                                variant="text"
                                href="#live"
                                size="large">
                            Live
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn
                                variant="text"
                                href="#gallery"
                                size="large">
                            Gallery
                        </v-btn>
                    </v-list-item>
                </v-list>
                <v-img class="position-fixed"
                       style="bottom: 0; left:0; max-height: 800px; z-index: 0;"
                       :width="$vuetify.display.width"
                       src="./imgs/profile/profile.png"
                >
                </v-img>
            </v-container>
        </v-navigation-drawer>

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

const navActive = ref(false)
const drawer = ref(false)
</script>

<style scoped lang="scss">

.hamburger-menu {
  position: relative;
}

.hamburger-menu span {
  position: absolute;
  top: -4px;
  left: -15px;
  background-color: black;
  transition-property: opacity, transform;
  transition-duration: .5s;
  height: 3px;
  width: 30px;
}

.hamburger-menu span:nth-child(1) {
  top: -12px;
}

.hamburger-menu.active span:nth-child(1) {
  transform: translateY(8px) rotate(405deg);
}

.hamburger-menu.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu span:nth-child(3) {
  top: 4px;
}

.hamburger-menu.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-405deg);
}


</style>