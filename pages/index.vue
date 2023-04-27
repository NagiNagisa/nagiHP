<template>
  <!--  ファーストビュー-->
  <!--  - 画像表示、動画表示-->
  <!--  今回はカルーセル-->

        <v-carousel
                cycle
                height="100vh"
                :show-arrows="false"
                hide-delimiter-background
                hide-delimiters
        >
            <v-carousel-item
                    eager
                    v-for="(item,i) in items"
                    :key="i"
            >
                <v-parallax
                        scale="0.1"
                >
                <v-img
                        eager
                        height="100vh"
                        cover
                        :src="item.src"
                        gradient="to top, rgba(0,0,0,0.2), rgba(0,0,0,0.75)"
                >
                </v-img>
            </v-parallax>
            </v-carousel-item>
        </v-carousel>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>

</template>

<script setup lang="ts">

const items = [
    {
        src: '/imgs/carousel/img1.png',
    },
    {
        src: '/imgs/carousel/img2.png',
    },
    {
        src: '/imgs/carousel/img3.png',
    },
]

</script>

<style scoped>

</style>