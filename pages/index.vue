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
            color="blue-lighten-5"
            class="py-16"
    >
        <v-container>
            <v-lazy
                    transition="slide-y-reverse-transition"
            >
                <h2 class="text-center text-h2 mb-16">
                    Profile
                </h2>
            </v-lazy>

            <v-row no-gutters>


                <v-col cols="12" md="6">
                    <v-lazy
                            transition="slide-y-reverse-transition"
                    >
                        <v-sheet class="pa-8 bg-transparent">
                            <v-img
                                    min-height="350px"
                                    src="/imgs/profile/profile.png"
                            >
                            </v-img>
                        </v-sheet>
                    </v-lazy>
                </v-col>
                <v-col cols="12" md="6" class="align-self-end">

                    <v-lazy
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
            color="pink-lighten-3"
            style="background: linear-gradient(rgba(227, 242, 253,1), rgba(252, 228, 236,1))"
            class="py-16"
    >
        <v-container>
            <v-lazy
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
                        <v-card
                            :elevation="isHovering ? 12 : 2"
                            v-bind="props"
                        >
                            <v-card-title>Software Engineering</v-card-title>
                            <v-card-text>
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <v-icon color="#555" size="64">
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
                    </v-hover>
                </v-col>


                <v-col cols="12" sm="6">
                    <v-hover
                        v-slot="{ isHovering, props }"
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
                                        <v-icon color="pink-lighten-3" size="64">
                                            {{ mdiMusic }}
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

                                    </v-col>
                                </v-row>

                            </v-card-text>

                        </v-card>
                    </v-hover>
                </v-col>



                <v-col cols="12" sm="6">
                    <v-hover
                        v-slot="{ isHovering, props }"
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
                                        <v-icon color="orange-darken-3" size="64">
                                            {{ mdiController }}
                                        </v-icon>

                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <p>
                                            Vtuber凪なぎさは、ソフトウェアエンジニアリングの才能も持ち合わせており、プログラミングを駆使して様々なプロジェクトに取り組んでいます。
                                        </p>
                                    </v-col>
                                </v-row>

                            </v-card-text>

                        </v-card>
                    </v-hover>
                </v-col>




                <v-col cols="12" sm="6">
                    <v-hover
                        v-slot="{ isHovering, props }"
                    >
                        <v-card
                            :elevation="isHovering ? 12 : 2"
                            v-bind="props"
                        >
                            <v-card-title>Goods</v-card-title>
                            <v-card-text>
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <v-icon color="blue-lighten-1" size="64">
                                            {{ mdiGift }}
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

                                    </v-col>
                                </v-row>

                            </v-card-text>

                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

        </v-container>

    </v-sheet>

</template>

<script setup lang="ts">
import {mdiCog, mdiController, mdiGift, mdiMusic} from '@mdi/js'

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

<style scoped lang="scss">

.slide-y-reverse-transition {

  &-leave-active, &-enter-active, &-enter-to, &-leave, &-leave-to {
    transition-duration: 3.0s !important;
  }

}

</style>