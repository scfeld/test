<template>
  <div class="swiper-container" id="mySwiper" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  
name:"Carousel",
  props: ["list"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {
    list: {  immediate: true,
      handler() {
    

        this.$nextTick(() => {
          //console.log('s')
          var mySwiper = new Swiper(
           this.$refs.cur,
            {
              //direction: "vertical", // 垂直切换选项
              loop: true, // 循环模式选项

              // 如果需要分页器
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }
          );
        });
      },
    },
  },
};
</script>

<style scoped >
</style>
