<template>
    <div class="top">
        <img :src="playlist.coverImgUrl" alt="" class="bgimg">
       <div class="head">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
    <use xlink:href="#icon-zuojiantou"></use>
</svg>
<span>歌单</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-sousu"></use>
</svg>
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-gongneng"></use>
</svg>
        </div>
       </div>
    <div class="des">
        <div class="mainImg"><img :src="playlist.coverImgUrl" alt=""></div>
       <div class="mainRight">
        <div class="name">{{playlist.name}}</div>
        <div class="avator"><div class="header"><img :src="playlist.creator.avatarUrl" alt=""></div>
    <div class="author">{{playlist.creator.nickname}}<span>></span></div>
</div>
<div class="description">{{playlist.creator.signature}}</div>
       </div>
    </div>
    <div class="choice">
       
            <div class="choiceItem"><svg class="icons" aria-hidden="true">
    <use xlink:href="#icon-taolun"></use>
</svg><span>{{playlist.commentCount}}</span></div>
<div class="choiceItem"><svg class="icons" aria-hidden="true">
    <use xlink:href="#icon-fenxiang"></use>
</svg><span>{{playlist.shareCount}}</span></div>
<div class="choiceItem"><svg class="icons" aria-hidden="true">
    <use xlink:href="#icon-xiazai"></use>
</svg><span>下载</span></div>
<div class="choiceItem"><svg class="icons" aria-hidden="true">
    <use xlink:href="#icon-duoxuan"></use>
</svg><span>多选</span></div>
</div>
    
    </div>
</template>
<script>
export default {
    setup(props){
        console.log(props);
        if(props.playlist.creator=''){//层级比较深，拿不到creator
            props.playlist.creator =JSON.parse(sessionStorage.getItem().playlist).creator
        }
    },
    props:['playlist']
}

</script>
<style lang="less" scoped>
.top {
    height: 300px;
    width: 359px;
    font-size: 20px;
 
    position: relative;
    .bgimg{
        width: 100%;
        height: 400px;
        position: fixed;
        z-index:-1;
        filter: blur(30px);
    }
   .icon{
        width: 35px;
        height: 35px;
        fill: #fff;
    }
    span{
        color:#fff
    }
    .head{
        height: 70px;
        width: 100%;
        display: flex;
    justify-content: space-between;
        .topLeft,.topRight{
        width: 35%;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin:0 5px
    }

    }
   .des{
    width: 100%;
    height: 150px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .mainImg {
        width: 45%;
        height: 120px;
      
        img{
        width: 120px;
        height: 120px;
        border-radius: 5%;
    }
    }
   
    .mainRight{
        width: 70%;
        height: 140px;
        display: flex;
        flex-direction: column;
        .name{
            color: #fff;
            font-size: 18px;
            font-weight: 450;
            height: 40%;
        }
        .avator{
            height: 30%;
            .header, .author{
                float:left;
                height: 40px;
                margin: 0 5px;
               
                
            }
            .header img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
            .author{
                font-size:17px;
                color: #999;
              line-height: 40px;
              span{
                color: #999;
              }
            }
        }
        .description{
            height: 30%;
            font-size: 16px;
            color: rgb(174, 170, 170);
            overflow: hidden;
        }
    }
}
    .choice{
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .choiceItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .icons{
                width: 30px;
                height: 30px;
                margin: 0 auto;
                fill: #fff;
            }
            span{
                text-align: center;
                font-size: 16px;
                margin-top: 5px;
            }
        }
    }
}


</style>