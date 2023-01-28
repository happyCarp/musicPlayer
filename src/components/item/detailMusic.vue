<template>
    <img :src="musicList.al.picUrl" class="bgimg" alt="">
    <div class="detail">
        <div class="detailTop">
            <div class="musicLeft">
                <svg class="icon" @click="backHome"  aria-hidden="true">
                    <use xlink:href="#icon-xiangxia"></use>
                </svg>
            </div>
            <div class="music" style="color:#fff">
                <div class="musicName">
                    <Vue3Marquee>
                        {{musicList.name}}
                    </Vue3Marquee>
                </div>
                <div class="musicAur">
                    <span style="color:#999" v-for="(item,i) in musicList.ar">{{item.name}}</span>

                    <span>></span>
                </div>
            </div>
            <div class="musicRight">
                <div class="head"><img :src="musicList.al.picUrl" alt=""></div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="radio" v-show="!this.isLyricShow" @click="changeShow()">
            <img src="@/assets/needle-ab.png" class="img_needle" :class='{img_needle_active:!isButShow}' alt="">
            <img :src="musicList.al.picUrl " class="img_music" :class='{img_ar_active:!isButShow,img_ar_paused:isButShow}' alt="">
            <img src="@/assets/pan.png" class='img_pan'  alt="">
        </div>
        <div class="lyric" v-show="this.isLyricShow" ref="musicLyric" @click="changeShow()">
          <p v-for="item in lyric" :key="item" :class='{"active":currentTime*1000>=item.time && currentTime*1000<item.pre}'>
        {{item.lrc}}
    </p>
        </div>
        <div class="detailFoot">
            <div class="footTop">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xihuan"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-changpian"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduo-shuxiang"></use>
                </svg>
            </div>
            <div class="footContent">
                <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
            </div>
            <div class="footPlay">
                <svg class="icon"  aria-hidden="true">
                    <use xlink:href="#icon-24gl-repeat2"></use>
                </svg>
                <svg class="icon"  aria-hidden="true" @click="goPlay(-1)">
                    <use xlink:href="#icon-shangyishoushangyige"></use>
                </svg>
                <svg class="icons "  aria-hidden="true"  v-if="!isButShow" @click="play" >
                    <use style="width:70px;height: 70px;" xlink:href="#icon-zanting"></use>
                </svg>
                <svg class="icons "  aria-hidden="true" v-else  @click="play">
                    <use style="width:70px;height: 70px;" xlink:href="#icon-24gl-playCircle" ></use>
                </svg>
                <svg class="icon"  aria-hidden="true" @click="goPlay(1)">
                    <use xlink:href="#icon-xiayigexiayishou"></use>
                </svg>
                <svg class="icon"  aria-hidden="true">
                    <use xlink:href="#icon-xinzengdaohangliebiao"></use>
                </svg>
            </div>
        </div>

    </div>
</template>
<script>
import { mapMutations ,mapState} from 'vuex';
export default {
    setup(){
        return{
            isLyricShow:false
        }
    },
    computed:{
        ...mapState(['lyricList','currentTime','playListIndex','playList','duration']),
        lyric:function(){
            let arr;
            if(this.lyricList){
               arr=this.lyricList.split(/[(\n\r)\n\r]+/).map((item)=>{
                let min=item.slice(1,3);
                let sec=item.slice(4,6);
                let mill=item.slice(7,10);
                let lrc=item.slice(11,item.length)
                let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);
               let pre;
                if(isNaN(Number(mill))){
                    mill=item.slice(7,9);
                    lrc=item.slice(10,item.length)
                    let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);
                }
                return {min,sec,mill,lrc,time,pre}
               })
               arr.forEach((item,i)=>{
                if(i===arr.length-1 || isNaN(arr[i+1].time)){
                    item.pre=1000000;
                }else{
                    item.pre=arr[i+1].time
                }
               })
        }
        return arr
        }
    }
    ,
    mounted() {
        console.log(this.musicList);
        this.addDuration()
    },
    watch:{
     currentTime:function(newValue){
        var p=document.querySelector('p.active')
       
        if(p.offsetTop>300){
            this.$refs.musicLyric.scrollTop=p.offsetTop-300
        }
        if(newValue===this.duration){
           
            if(this.playListIndex===this.playList.length-1){
                this.updatePlayListIndex(0);
                this.play()
            }else{
                this.updatePlayListIndex(this.playListIndex+1)
            }
         
        }
     }
    },
    methods: {
        goPlay:function(value){
            let index=this.playListIndex+value
            if(index<0){
                index=this.playList.length-1
            }else if(index>this.playList.length-1){
                index=0
            }
            this.updatePlayListIndex(index)
        }
        ,
        backHome:function(){
            this.updateDetailShow();
            this.isLyricShow=false
        },
        changeShow:function(){
            this.isLyricShow=!this.isLyricShow
        },
        ...mapMutations(['updateDetailShow','play','updatePlayListIndex'])
    },
  
    props: ['musicList','isButShow','play','addDuration']
}
</script>
<style lang="less" scoped>
.bgimg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(70px);
}

.detail {
    height: 100%;
    width: 100%;

    .detailTop {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .musicLeft {
            width: 15%;

            .icon {
                width: 40px;
                height: 40px;

            }
        }

        .music {
            width: 60%;

            .musicName {
                width: 100px;
            }
        }

        .musicRight {
            width: 25%;
            display: flex;
            justify-content: space-between;

            .head,
            .icon {
                width: 50%;

            }

            .head img {
                width: 80%;
                border-radius: 50%;

            }
        }
    }

    .radio {
        width: 100%;
        height: 450px;
        display: flex;
        flex-direction: column;
        align-content: center;
        position: relative;

        .img_needle {
            width: 132px;
            height: 200px;
            position: absolute;
            top: 0;
            left: 43%;
            transform-origin: 0 0;
            transform: rotate(-12deg);
            transition: all 2s;
            z-index: 1;
        }
        .img_needle_active{
            width: 132px;
            height: 200px;
            position: absolute;
            top: 0;
            left: 43%;
            transform-origin: 0 0;
            transform: rotate(0deg);
            transition: all 2s;
            z-index: 1;
        }

        .img_pan {
            width: 300px;
            height: 300px;
            position: absolute;
            top: 136px;
            left: 16%;
        }
      
        .img_music {
            width: 188px;
            height: 188px;
            position: absolute;
            top: 192px;
            left: 30%;
            animation: rotate_ar 10s linear infinite;
        }
        .img_ar_active{
            animation-play-state: running;
        }
        .img_ar_paused{
            animation-play-state: paused;
        }
        @keyframes rotate_ar{
            0%{
                transform: rotateZ(0deg);
            }
            100%{
                transform: rotateZ(360deg);
            }
        }

    }
    .lyric{
        width: 100%;
        height: 480px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
        margin-top: 20px;
        p{
            width: 70%;
            color: rgb(58, 58, 58);
            font-size:17px;
            margin-bottom: 5px;
            text-align: center;
        }
        .active{
            font-size: 25px;
            color: #fff;
        }
    }
    .detailFoot {
        width: 100%;
        height: 120px;
        position: fixed;
        bottom: 0;
        .footTop {
            height: 40px;
            .icon {
                fill:#fff;
                width: 35px;
                margin: 0 20px;
            }
        }

        .footPlay, .footTop {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .icon {

                margin: 0 10px;
            }

        }
        .range{
            width: 100%;
            height: 3px;

        }
        .footPlay{
            height: 80px;
            .icon{
                width: 10%;
                fill:#fff;
              
            }
            .icons{
                width: 40%;
                height: 70px;
                margin: 0 -25px;
            }
        }
    }
}
</style>