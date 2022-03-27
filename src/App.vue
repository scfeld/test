<template>
  <div id="app">
   <Header></Header>
   <router-view></router-view>
   <Footer v-show="!$route.meta.show"></Footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    //Header,
    //Footer
  },
 
  mounted(){
    this.$store.dispatch("categoryList")
  },
}
</script>

<style lang="less" scoped>

</style>


