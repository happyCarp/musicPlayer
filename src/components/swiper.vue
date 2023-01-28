<template>
    <div class="swiper">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in state.images" :key="index">
                <img v-lazy="image.pic" :key="image.pic"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import axios from 'axios'
import {getBanner} from '@/request/api/home.js'
import { onMounted, reactive } from 'vue'
import VueLazyload from 'vue-lazyload'
export default {
    setup() {
        const state=reactive({
            images:[
            'https://img01.yzcdn.cn/vant/apple-1.jpg',
            'https://img01.yzcdn.cn/vant/apple-2.jpg',
        ]
        });
      
        onMounted(async () => {
            // axios.get("http://localhost:3000/banner?type=2").then((res) => {
            //     console.log(res);
            //     state.images=res.data.banners
            // }).catch((err)=>{
            //     console.log(err);
            // })
                let res=await getBanner();
                state.images=res.data.banners
            });
           return {state}
    }
      



};
</script>
<style lang="less" scoped>
.swiper {

    .van-swipe {
        width: 90%;
        margin: 0 auto;

        .van-swipe-item {
            width: 100%;
            height: 200px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10%;
                
            }
        }
    }
}
</style>