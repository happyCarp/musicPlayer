<template>
    
    <div class="footer">
        
        <div class="footerLeft" @click="updateDetailShow" ><img :src="playList[playListIndex].al.picUrl" alt="">
        <div class="gequ">
           <Vue3Marquee>{{playList[playListIndex].name}}</Vue3Marquee>
            <span>横滑切换上下首</span>
        
        </div>
    </div>

        <div class="footerRight">
            <svg class="icon" aria-hidden="true" @click="play" v-if='isButShow' >
    <use xlink:href="#icon-bofang"></use>
</svg>
<svg class="icon" aria-hidden="true" @click="play" v-else >
    <use xlink:href="#icon-zanting"></use>
</svg>
<svg class="icon" aria-hidden="true"  @click="play">
    <use xlink:href="#icon-gedan"></use>
</svg>
        </div>
        <!-- /song/url?id=33894312 -->
        <audio ref="audio"  :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
        <van-popup v-model:show="detailShow" position="top" :style="{ height: '100%' }" >
            <detailMusic :musicList="playList[playListIndex]" :addDuration="addDuration" :play="play" :isButShow="isButShow"></detailMusic>
        </van-popup>

    </div>
   
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import detailMusic from '@/components/item/detailMusic.vue'
export default{
   data(){
       return{
        show:true,
        interval:0
       } 
   },
   components:{
    detailMusic
   },
    computed:{
        ...mapState(['playList','playListIndex','isButShow','detailShow','duration'])
    },
    mounted(){
        console.log(this.$refs);
        this.$store.dispatch('getLyric',this.playList[this.playListIndex].id)
        
    },
    updated(){
        this.$store.dispatch('getLyric',this.playList[this.playListIndex].id)
        this.addDuration()

    },
    methods: {
        play:function(){
            if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.updateIsButShow(false)
                this.updateTime()
            }else{
                this.$refs.audio.pause()
                this.updateIsButShow(true)
                clearInterval(this.interval)
            }
        },
        addDuration:function(){
            this.updateDuration(this.$refs.audio.duration)
        },
        updateTime:function(){
            this.interval=setInterval(()=>{
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },1000)
        },
        

        ...mapMutations(['updateIsButShow','updateDetailShow','updateCurrentTime','updateDuration'])
    },
    watch:{
        playListIndex:function(){
            this.$refs.audio.autoplay=true
            this.updateTime()
            if(this.$refs.audio.paused){
                this.updateIsButShow(false)
                
            }
        },
        playList:function(){
            if(this.isButShow){
                this.$refs.audio.autoplay=true;
                this.updateIsButShow(false) 
              
            }
        },
        ...mapMutations(['updateIsButShow','updateDetailShow'])
    }
  
    
    
    
}

</script>

<style lang="less" scoped>
.footer{
    width: 375px;
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #000;
    display: flex;
    justify-content: space-between;
    .footerLeft{
            width: 70%;
            display: flex;
        img{
            width: 40px;
            height: 40px;
            margin: 5px;
        }
        p{
           
            font-size: 18px;
            font-weight: 600;
        }
       
        
    }
    .footerRight{
        width: 30%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      svg{
            width: 30px;
            height: 30px;
        }
    }
}

</style>