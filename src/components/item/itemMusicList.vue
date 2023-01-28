<template>
    <div class="itemList">
        <div class="itemListTop">
            <div class="play">
                <svg class="icons" aria-hidden="true">
    <use xlink:href="#icon-bofang_o"></use>
</svg><span>播放全部(共{{subscribedCount}}首)</span>
            </div>
            <div class="like">
                <svg class="icons" aria-hidden="true">
    <use xlink:href="#icon-jiahao"></use>
</svg><span>收藏({{subscribedCount}})</span>
            </div>
        </div>
        <div class="itemLists">
            <div class="listItem" v-for="(item,i) in itemlist" :key="i">
                <span>{{i+1}}</span>
                <div class="song"  @click="playMusic(i)">
                    <div class="songName">{{item.name}}</div>
                    <div class="songAur"><span v-for="(au,index) in item.ar" :key="index">{{au.name}}</span></div>
                    
                </div>
                <div class="songMv" >
                    <svg class="icon" aria-hidden="true" >
    <use xlink:href="#icon-MV" v-show="item.mv"></use>
</svg>
                </div>
                <div class="gongneng"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-gongneng"></use>
</svg></div>
            </div>
        </div>
        
    </div>

</template>

<script>
import {mapMutations} from 'vuex'
export default {
    setup(props) {
    },
    props: ["itemlist", "subscribedCount"],
    methods:{
        playMusic:function(i){
            this.updatePlayList(this.itemlist)
            this.updatePlayListIndex(i)
        },
        ...mapMutations(['updatePlayList','updatePlayListIndex'])
    },
 
}

</script>
<style lang="less" scoped>
.itemList{
    width: 100%;
    background-color: #fff;
    border-radius: 30px;
    .itemListTop{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding-top: 7px;
        
                .play{
            width: 65%;
           
            .icons{
                width: 30px;
                height: 30px;
                align-content: center;
               
            }
            span{
                font-size: 18px;
                font-weight: 700;
            }
        }
        .play,.like{
            align-items: center;
            display: flex;
            justify-content: center;
        }
        .like{
            width: 35%;
            height: 100%;
            border-radius:30px ;
            background-color: rgb(213, 14, 14);
            color:#fff;
            .icons{
                width: 20px;
                height: 20px;
              
               
            }
            .icons  svg{
                    fill: #fff;
                }
            span{

            }
        }
    }
    .itemLists{
        width: 100%;
       
        .listItem{
            width: 100%;
            height: 50px;
            .icon{
                width: 20px;
                height: 50px;
                fill: rgb(189, 187, 187);
            }
            span{
                width: 30px;
                height: 100%;
                line-height: 50px;
                font-size: 15px;
                text-align: center;
                float: left;
            }
            .song{
                width: 250px;
                height: 100%;
                
                float: left;
                background-color: #fff;
                .songName{
                    height: 25px;
                    font-size: 18px;
                    font-weight: 900;
                    overflow:hidden;
	                text-overflow:ellipsis;
	                white-space:nowrap
                }
                .songAur{
                    height: 20px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #999;
                    display: flex;
                  
                    span{
                        width: fit-content;
                        line-height: 20px;
                        margin-right: 2px;
                    }
                }

            }
            .songMv,.gongneng{
                float: left;
                width: 40px;
                
            }
          
        }
    }
}


</style>