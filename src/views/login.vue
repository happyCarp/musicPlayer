<template>
    <div class="content">
        <div class="login">
            <div class="loginTop">网易云音乐</div>
          
                <input type="text" name="phone" class="phone" v-model="phone" placeholder="请输入手机号码">
                <input type="password" name='password' class="password" v-model='password' placeholder="请输入密码">
                <button @click="goLogin()">登录</button>
            
        </div>
    </div>
</template>
<script>
import {Login} from '@/request/api/home'
export default{
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        goLogin:async function(){
            Login({phone:this.phone,password:this.password})
            let res=await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
            if(res.data.code==200){
                this.$store.commit('updateIsLogin',true)
                this.$store.commit('updateToken',res.data.token)
                localStorage.setItem('token',res.data.token)
                let result = res.data
                this.$store.commit('updateUserDetail',result)
                this.$router.push('/infoUser')
                alert('登录成功...正在跳转页面')
            }else{
                alert('登陆失败，请检查手机号或者密码')
            }
        }
    }
}

</script>
<style lang="less" scoped>

.content{
    width: 100%;
    height: 667px;
    background-color: red;
    .login{
        width:200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin:0 auto
    }
    .loginTop{
        width: 100%;
        height: 100px;
        font-size: 30px;
        color:#fff;
        text-align:center;
    }
    input{
        width:100%;
        height: 50px;
        border:none;
        border-radius: 40px;
    }
}
</style>