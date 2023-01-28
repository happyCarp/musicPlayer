<template>
    <itemMusicTop :playlist="state.playlist"></itemMusicTop>
    <itemMusicList :itemlist="state.itemlist" :subscribedCount="state.playlist.subscribedCount"></itemMusicList>
</template>
<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import {getMusicList} from '@/request/api/item'
import itemMusicTop from '@/components/item/itemMusicTop.vue'
import itemMusicList from '@/components/item/itemMusicList.vue'
import {getItemList} from '@/request/api/item'
export default{
    setup(){
       const state=reactive({
        playlist:[],
        itemlist:[]
       })

        
        onMounted(async ()=>{
            //获取歌单详情页
            let id=useRoute().query.id
           let res=await getMusicList(id)
           state.playlist=res.data.playlist;
            // let id=useRoute().query.id;
            let result=await getItemList(id)
            state.itemlist=result.data.playlist.tracks;
            console.log( state.itemlist);
            //防止页面刷新数字丢失
            sessionStorage.setItem('itemDetail',JSON.stringify(state    ))
        });
        return {state}
    },
    components:{
        itemMusicTop,
        itemMusicList,
    }
}

</script>