<template>
    <div class="searchTop">
        <svg class="icon"  aria-hidden="true"  @click="this.$router.go(-1)">
                    <use xlink:href="#icon-zuojiantou"></use>
                </svg>
        <input type="text" placeholder="陈奕迅" v-model="keyword">
        <span @click="enterKey">搜索</span>
    </div>
    <div class="searchHistory">
       <div class="title">
        <div>历史</div>
        <svg class="icon"  aria-hidden="true" @click="clearHistory">
                    <use xlink:href="#icon-shanchu"></use>
                </svg>
       </div>
        <span v-for="(item,i) in keywordList" @click="Search(item)">{{item}}</span>
</div>
<div class="itemLists">
            <div class="listItem" v-for="(item,i) in searchList" :key="i" @click="playSong(item)">
                <span>{{i+1}}</span>
                <div class="song"  >
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
</template>
<script>
import {search }from '@/request/api/item'
import { mapState,mapMutations } from 'vuex'
export default{
    data(){
        return{
            keywordList:[],
            keyword:'',
            searchList:'',
          
        }
    },
    methods:{
        enterKey:function(){
           if(this.keyword){
            this.Search(this.keyword)
            this.keywordList.unshift(this.keyword)
            this.keywordList=[...new Set(this.keywordList)]
            if(this.keywordList.length>5){
                this.keywordList.pop(this.keywordList.length-1)
            }
            localStorage.setItem('keywordList',JSON.stringify(this.keywordList))
            this.keyword=''

           }
        },
        clearHistory:function(){
            this.keywordList=[];
            localStorage.setItem('keywordList',JSON.stringify([]))
        }
        ,
        Search:async function(item){
            let res=await search(item)
            console.log(res);
            this.searchList=res.data.result.songs
        },
        playSong:function(item){
            this.pushSong(item);
        },
        ...mapMutations(['pushSong'])
    },
    mounted(){
        this.keywordList=JSON.parse(localStorage.getItem('keywordList')) ||[]
    },
    computed:{
        ...mapState(['playListIndex','playList'])
    }
}
</script>
<style lang="less" scoped>
.searchTop{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    .icon{
        width: 7%;
    }
    input{
        margin-left:5px;
        border: none;
        border-bottom:1px solid #999;
        width: 80%;
        padding: 5px;
    }
    span{
        width: 13%;
    }
}
.searchHistory{
    width: 100%;
    height: auto;
   .title{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    div{
        font:18px bolder 
    }
    .icon{
        width: 30px;
    }
   }
    
    span{
        border:1px solid #999;
        border-radius: 20px;
        margin: 0 5px;
        white-space:nowrap;
        background-color: #999;
        color:#fff;
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
</style>