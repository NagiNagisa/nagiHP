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
    <v-sheet
            id="profile"
            color="blue-lighten-5"
            class="py-16"
    >
        <v-container>
            <v-lazy
                    min-height="60px"
                    :options="{threshold: 1.0}"
                    transition="slide-y-reverse-transition"
            >
                <h2 class="text-center text-h2 mb-16">
                    Profile
                </h2>
            </v-lazy>

            <v-row no-gutters>


                <v-col cols="12" md="6">
                    <v-lazy
                            min-height="200px"
                            :options="{threshold: 1.0}"
                            transition="slide-y-reverse-transition"
                    >
                        <v-sheet class="pa-8 bg-transparent">
                            <v-img
                                    min-height="350px"
                                    max-height="600px"
                                    src="./imgs/profile/profile.png"
                            >
                            </v-img>
                        </v-sheet>
                    </v-lazy>
                </v-col>
                <v-col cols="12" md="6" class="align-self-end">

                    <v-lazy
                            min-height="200px"
                            :options="{threshold: 1.0}"
                            transition="slide-y-reverse-transition"
                    >
                        <v-sheet class="pa-8 bg-transparent">
                            <v-sheet class="pa-6" color="white" rounded>
                                <p>
                                    2019年4月30日にデビューしたVTuberである凪なぎさは、
                                    多彩な才能を持つエンターテイナーです。
                                </p>
                                <p>
                                    プログラミングやピアノ、将棋、ゲームなど、幅広い分野での活動を展開しています。
                                </p>
                                <p>
                                    プログラミングを活用したコンテンツや、ゲーム実況を織り交ぜながら幅広い年齢層に親しまれるチャンネルを展開し、
                                    多くのフォロワーを獲得している凪なぎさの魅力は、そのマルチな才能だけではありません。
                                </p>
                                <p>
                                    視聴者とのコミュニケーションを大切にし、楽しい雰囲気を作り出す姿勢が、彼女の人気の秘密です。
                                </p>
                                <p>
                                    今後のさらなる飛躍が期待される、バーチャル空間の才能あふれるエンターテイナーです。
                                </p>

                            </v-sheet>
                        </v-sheet>

                    </v-lazy>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
    <v-sheet
            id="activities"
            color="pink-lighten-3"
            style="background: linear-gradient(rgba(227, 242, 253,1), rgba(252, 228, 236,1))"
            class="py-16"
    >
        <v-container>
            <v-lazy
                    min-height="60px"
                    :options="{threshold: 1.0}"
                    transition="slide-y-reverse-transition"
            >
                <h2 class="text-center text-h2 mb-16">
                    Activities
                </h2>
            </v-lazy>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-hover
                            v-slot="{ isHovering, props }"
                    >

                        <v-lazy
                                height="100%"
                                min-height="100px"
                                :options="{threshold: 1.0}"
                                transition="slide-y-reverse-transition"
                        >
                            <v-card
                                    height="100%"
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                            >
                                <v-card-title>Software Engineering</v-card-title>
                                <v-card-text>
                                    <v-row no-gutters>
                                        <v-col cols="12">
                                            <v-icon color="#555" size="64" class="spin-animation">
                                                {{ mdiCog }}
                                            </v-icon>

                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <p>
                                                Vtuber凪なぎさは、ソフトウェアエンジニアリングの才能も持ち合わせており、プログラミングを駆使して様々なプロジェクトに取り組んでいます。
                                            </p>
                                            <p>
                                                スマホアプリ「フリース将棋」の開発を手がけ、将棋ファンに新たな魅力を提供。
                                            </p>
                                            <p>
                                                また、視聴者向けに技術的な情報発信やチュートリアルも行い、多くの人々の創造力を刺激しています。
                                                技術とエンターテイメントが融合した新しい世界を築いています。
                                            </p>
                                        </v-col>
                                    </v-row>

                                </v-card-text>

                            </v-card>
                        </v-lazy>
                    </v-hover>
                </v-col>


                <v-col cols="12" sm="6">
                    <v-hover
                            v-slot="{ isHovering, props }"
                    >
                        <v-lazy
                                height="100%"
                                min-height="100px"
                                :options="{threshold: 1.0}"
                                transition="slide-y-reverse-transition"
                        >
                            <v-card
                                    height="100%"
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                            >
                                <v-card-title>ピアノ / 弾き語り</v-card-title>
                                <v-card-text>
                                    <v-row no-gutters>
                                        <v-col cols="12">
                                            <v-icon color="pink-lighten-3" size="64" class="shake-animation">
                                                {{ mdiMusic }}
                                            </v-icon>

                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <p>
                                                ピアノ演奏や弾き語り配信活動をしています。繊細で美しいピアノの旋律や、心に響く歌声で視聴者を魅了。
                                            </p>
                                            <p>
                                                凪なぎさの音楽活動は、感動と癒しを届けるだけでなく、視聴者とのつながりを深める大切な要素となっており、彼女の多才ぶりを際立たせています。
                                            </p>

                                        </v-col>
                                    </v-row>

                                </v-card-text>

                            </v-card>
                        </v-lazy>
                    </v-hover>
                </v-col>


                <v-col cols="12" sm="6">
                    <v-hover
                            v-slot="{ isHovering, props }"
                    >
                        <v-lazy
                                height="100%"
                                min-height="100px"
                                :options="{threshold: 1.0}"
                                transition="slide-y-reverse-transition"
                        >
                            <v-card
                                    height="100%"
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                            >
                                <v-card-title>Games</v-card-title>
                                <v-card-text>
                                    <v-row no-gutters>
                                        <v-col cols="12">
                                            <v-icon color="orange-darken-3" size="64" class="vertical-animation">
                                                {{ mdiController }}
                                            </v-icon>

                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <p>
                                                様々なジャンルのゲーム実況を行っています。
                                            </p>
                                            <p>
                                                彼女の鋭い観察力と独自の解説で、視聴者はゲームの面白さをより深く楽しめます。
                                            </p>
                                            <p>
                                                視聴者と一緒になってゲームを楽しみ、時には対戦や協力プレイを通じてコミュニケーションを図ります。
                                            </p>
                                            <p>
                                                視聴者皆さんと楽しい時間を共有する場となっています。
                                            </p>
                                        </v-col>
                                    </v-row>

                                </v-card-text>

                            </v-card>
                        </v-lazy>
                    </v-hover>
                </v-col>


                <v-col cols="12" sm="6">
                    <v-hover
                            v-slot="{ isHovering, props }"
                    >
                        <v-lazy
                                height="100%"
                                min-height="100px"
                                :options="{threshold: 1.0}"
                                transition="slide-y-reverse-transition"
                        >
                            <v-card
                                    height="100%"
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                            >
                                <v-card-title>Goods</v-card-title>
                                <v-card-text>
                                    <v-row no-gutters>
                                        <v-col cols="12">
                                            <v-icon color="blue-lighten-1" size="64" class="flip-animation">
                                                {{ mdiGift }}
                                            </v-icon>

                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <p>
                                                ファンに向けてのグッズ販売を行っています
                                            </p>
                                            <p>
                                                Boothにてアクリルキーホルダー、アクリルフィギュアの販売中
                                            </p>
                                            <nuxt-link
                                                    class="text-decoration-none"
                                                    target="_blank"
                                                    href="https://naginagisa.booth.pm/"

                                            >
                                                Boothのページはこちら
                                            </nuxt-link>

                                        </v-col>
                                    </v-row>

                                </v-card-text>

                            </v-card>
                        </v-lazy>
                    </v-hover>
                </v-col>
            </v-row>

        </v-container>

    </v-sheet>
    <v-sheet
            id="live"
            color="white"
            class="py-16"
    >
        <v-container>
            <v-lazy
                    min-height="60px"
                    :options="{threshold: 1.0}"
                    transition="slide-y-reverse-transition"
            >
                <h2 class="text-center text-h2 mb-16">
                    Latest Live Streaming
                </h2>
            </v-lazy>
            <v-row>
                <v-col cols="12" md="6" v-for="(item, idx) in rss.feed.entry.slice(0,4)">
                    <v-lazy
                        min-height="100px"
                        :options="{threshold: 1.0}"
                        transition="slide-y-reverse-transition"
                    >
                    <v-card
                            :href="item['media:group']['media:content'].$.url"
                            target="_blank"
                            rel="noopener noreferrer"
                    >
                        <v-card-title>
                            {{ item.title }}
                        </v-card-title>
                        <v-card-text>
                            <v-img
                                    cover
                                    :aspect-ratio="16/9"
                                    :src="item['media:group']['media:thumbnail'].$.url"
                            >
                            </v-img>
                        </v-card-text>
                    </v-card>
                    </v-lazy>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>

    <v-sheet
            id="gallery"
            color="#333"
            class="py-16"
    >
        <v-container>
            <v-lazy
                    min-height="60px"
                    :options="{threshold: 1.0}"
                    transition="slide-y-reverse-transition"
            >
                <h2 class="text-center text-white text-h2 mb-16">
                    Gallery
                </h2>
            </v-lazy>
            <v-row class="flex-wrap-reverse">
                <v-col cols="12" sm="4" md="3">
                    <v-slide-group
                            v-bind:style="{ 'height': $vuetify.display.smAndUp ? '600px' : '200px'}"
                            v-model="model"
                            class="pa-4"
                            center-active
                            :show-arrows="false"
                            mandatory
                            :direction="$vuetify.display.smAndUp ? 'vertical' : 'horizontal'"
                    >
                        <v-slide-group-item
                                v-for="(item, idx) in galleryItems"
                                :key="idx"
                                v-slot="{ isSelected, toggle }"
                        >
                            <v-btn
                                    class="ma-4 align-self-center"
                                    :height="isSelected ? 125 : 100"
                                    :width="isSelected ? 125 : 100"
                                    color="white"
                                    v-bind:style="{'filter': isSelected ? 'grayscale(0%)' : 'grayscale(80%)' }"
                            >
                                <v-img
                                        :height="isSelected ? 125 : 100"
                                        :width="isSelected ? 125 : 100"
                                        :src="item.src"
                                        @click="toggle"
                                >
                                </v-img>
                            </v-btn>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-col>
                <v-col cols="12" sm="8" md="9">
                    <v-carousel
                            v-model="model"
                            cycle
                            hide-delimiters
                    >
                        <v-carousel-item
                                v-for="(item, idx) in galleryItems"
                                :src="item.src"

                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-col>

            </v-row>
        </v-container>
    </v-sheet>


</template>

<script setup lang="ts">
import {mdiCog, mdiController, mdiGift, mdiMusic} from '@mdi/js'

const {data: rss} = useFetch('/api/youtubeRss')

const model = ref(null)

const galleryItems = [
    {
        src: './imgs/gallery/img1.jpg',
    },
    {
        src: './imgs/gallery/img2.jpg',
    },
    {
        src: './imgs/gallery/img3.jpg',
    },
    {
        src: './imgs/gallery/img4.jpg',
    },
    {
        src: './imgs/gallery/img5.jpg',
    },
    {
        src: './imgs/gallery/img6.jpg',
    },
    {
        src: './imgs/gallery/img7.jpg',
    },
    {
        src: './imgs/gallery/img8.jpg',
    },
    {
        src: './imgs/gallery/img9.jpg',
    },
    {
        src: './imgs/gallery/img10.jpg',
    },
]

const items = [
    {
        src: './imgs/carousel/img1.jpg',
    },
    {
        src: './imgs/carousel/img2.jpg',
    },
    {
        src: './imgs/carousel/img3.jpg',
    },
]

</script>

<style lang="scss">
/* カルーセル上でgradientの効果が消えたための対処 */
.v-img__gradient {
  z-index: 1;
}

</style>

<style scoped lang="scss">
.slide-y-reverse-transition {

  &-leave-active, &-enter-active, &-enter-to, &-leave, &-leave-to {
    transition-duration: 2.5s !important;
  }

}

.spin-animation {
  animation-name: spin;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.shake-animation {
  animation-name: shake;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


.vertical-animation {
  animation-name: vertical-move;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


.flip-animation {
  animation-name: flip;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes shake {
  0% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}

@keyframes vertical-move {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}


@keyframes flip {
  100% {
    transform: rotateY(360deg);
  }
}


</style>