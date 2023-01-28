<template>
    <div class="musicList">
        <div class="musicTop">
            <span class="title">推荐歌单</span>
            <span class="more">查看更多</span>
        </div>
        <div class="listContent">
            <van-swipe  :loop="false"  :width="150"  class="myswiper" :show-indicators="false">
  <van-swipe-item class="myswiper-item" v-for="item in this.musicList" :key="item">
    <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
    <img :src="item.picUrl" alt="">
    <span class="playcount"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-24gl-play"></use></svg>
{{changeCount(item.playCount)}}</span>
<span>{{item.name}}</span>
</router-link></van-swipe-item>

</van-swipe>
        </div>
    </div>
</template>
<script>
import {getMusicList} from '@/request/api/home.js'
export default {
    data(){
        return{
        musicList:[]

        }
    },
    methods:{
        async getGedan(){
            let res=await getMusicList();
            console.log(res);
            this.musicList=res.data.result
            console.log(this.musicList[0].picUrl);
        },
        changeCount(num){
            if(num>=100000000){
                return (num/100000000).toFixed(1)+'亿'
            }else if(num>=10000){
                return(num/10000).toFixed(1)+'万'
            }
        }
    },
    mounted() {
        this.getGedan()
    },
}
</script>
<style lang="less" scoped>
.musicList{
    width: 100%;
    height: 290px;
    padding: 5px;
    .musicTop{
        height: 30px;
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 20px;
            font-weight: bolder;
        }
    }
    .listContent{
        width: 100%;
        height: 80px;
       .myswiper{

        .myswiper-item{
            width: 150px;
            height: 250px;
            margin: 0 4px;
            
            img{
                width: 150px;
          
            }
            .playcount{
                position: absolute;
                  right: 0;
                  color:#fff
            }
            .playcount .icon{
             
                width: 30px;
                height: 30px;
              float: left;

            }
            span{
                font-size: 15px;
                font-weight: 500;
            }
        }

       }
    }

}

</style>