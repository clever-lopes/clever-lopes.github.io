<script lang="ts">
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'

const data = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchData = async () =>
  onMounted(() => {
    fetchData()
  })

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
  async setup() {
    await fetchData()

    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [EffectCoverflow, Pagination],
      projects,
      data,
      loading,
      error
    }
  }
}
</script>

<template>
  <section class="mt-5">
    <div class="px-4">
      <div>
        <h1>Main Projects</h1>
        <h2>Pinned Projects on github</h2>
      </div>

      <Swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :loop="true"
        :slidesPerView="auto"
        :coverflowEffect="{
          depth: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
          // slideShadows: false
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="({ image, title }, index) in projects" :key="index">
          <div>
            <div>
              <span class="absolute pl-1 text-2xl text-white font-semibold"
                >Project {{ index + 1 }}</span
              >
              <img class="w-40 h-40 rounded-xl" :src="image" alt="" />
              <div>
                <p>{{ title }}</p>
                <p>Description</p>
              </div>
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
