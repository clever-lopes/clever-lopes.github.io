<script lang="ts">
// import gql from 'graphql-tag'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const projects = [
  { image: 'https://picsum.photos/seed/picsum/200/200', title: 'a' },
  { image: 'https://picsum.photos/seed/picsum/200/200', title: 'b' },
  { image: 'https://picsum.photos/seed/picsum/200/200', title: 'c' },
  { image: 'https://picsum.photos/seed/picsum/200/200', title: 'd' }
]

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }

    return {
      onSwiper,
      onSlideChange,
      modules: [EffectCoverflow, Pagination],
      projects
    }
  }
}
</script>

<template>
  <section class="my-5">
    <div class="px-4">
      <div>
        <h1 class="font-semibold text-xl">Stack</h1>
        <h2 class="font-normal text-gray-400 text-sm">Main Technologies</h2>
      </div>

      <Swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :loop="true"
        :slidesPerView="3"
        :coverflowEffect="{
          depth: 0,
          stretch: 0,
          modifier: 1,
          slideShadows: false
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide class="mt-2" v-for="({ image, title }, index) in projects" :key="index">
          <div>
            <img class="w-24 h-24 rounded-full" :src="image" alt="" />
            <div>
              <p class="font-medium text-sm">{{ title }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- <li class="flex">
      <ol>
        <div>
          <div class="bg-gray-300 w-16 h-16">
            <span>Project 1</span>
          </div>
          <p>Title</p>
          <p>Description</p>
        </div>
      </ol>
      <ol>
        <div>
          <div class="bg-gray-300 w-16 h-16">
            <span>Project 2</span>
          </div>
          <p>Title</p>
          <p>Description</p>
        </div>
      </ol>
      <ol>
        <div>
          <div class="bg-gray-300 w-16 h-16">
            <span>Project 3</span>
          </div>
          <p>Title</p>
          <p>Description</p>
        </div>
      </ol>
    </li> -->
  </section>
</template>
