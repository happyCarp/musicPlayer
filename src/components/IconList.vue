<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-meirituijian"></use>
</svg>
<span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-diantai"></use>
</svg>
<span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-gedan"></use>
</svg>
<span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-paihangbang"></use>
</svg>
<span>排行榜</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.iconList{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    .iconItem{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        .icon{

        }
    }
}

</style>