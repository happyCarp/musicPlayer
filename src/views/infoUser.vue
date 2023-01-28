<template>
    <div class="user">
       {{this.nickname}}
    </div>
    <div class="zhuantiao">
        <button @click="goHome">到主界面</button>
    </div>
    <div class="tuichu">
        <button @click="outLoad">退出登录</button>
    </div>
</template>
<script>
import {getUserdetail} from '@/request/api/home'
import { mapState } from 'vuex'
export default{
    data(){
        return {
            nickname:''
        }
    },
    computed:{
        ...mapState(['userDetail'])
    },
    mounted(){
        // this.id=getUserdetail(this.$store.state.userDetail.account.id)
        this.nickname=this.userDetail.profile.nickname
        console.log(this.userDetail);
    },
    methods:{
        outLoad:function(){
            localStorage.removeItem('token')
            this.$router.push('/login')
        },
        goHome:function(){
        }
    }


}
</script>

<style lang="less" scoped>


</style>