<template>
  <div class="home">
    <TopNav></TopNav>
    <Swipe></Swipe>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/topNav.vue'
import Swipe from '@/components/swiper.vue'
import IconList from '@/components/IconList.vue'
import MusicList from '@/components/musicList.vue'
export default {
  name: 'HomeView',
  components: {
    TopNav,
    Swipe,
    IconList,
    MusicList
  }
}
</script>
<style >
.home{
  width: 359px; 
}

</style>
