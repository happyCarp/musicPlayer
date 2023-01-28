<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-gongneng"></use>
</svg>
        </div>
    <div class="topCenter">
        <span @click="$router.push('/infoUser')">我的</span>
        <span>发现</span>
        <span>云村</span>
        <span>推荐</span>
        
    </div>
   <div class="topRight">
    <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
    <use xlink:href="#icon-sousu"></use>
</svg>
   </div>
    </div>
</template>
<style lang="less" scoped>
.topNav{
    width: 100%;    
    height:3.125rem;
    padding: 0.625rem;
    display: flex;
    justify-content: space-between;
    font-size: 20px;

 .topLeft {
    width: 50px;
    height: 50px;
 }   
 svg{
    width: 30px;
    height: 30px;
 }
 .topCenter{
   height: 100%;
    display: flex;
    justify-content: space-around;
    span {
        margin: 0 10px;
    }
 }
}
</style>