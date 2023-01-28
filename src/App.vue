<template>
  
  <router-view/>
  <FooterMusic  v-show="$store.state.isFooterShow"></FooterMusic>

</template>
<script>
import FooterMusic from '@/components/footerMusic.vue'
export default{
  components:{
    FooterMusic
  }
}

</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
}
a{
    color: #000;
    
}
</style>
