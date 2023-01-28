function remSize(){
    //获取设备的宽度
    var deviceWidth=document.documentElement.clientWidth || window.innerWidth
    if(deviceWidth>=750){
        deviceWidth=750
    }else if(deviceWidth<=320){
        deviceWidth=320
    }
    //750-->1rem=100px,375-->1rem=50px
    document.documentElement.style.fontsize=(deviceWidth/7.5)+'px'
    document.querySelector('body').style.fontsize=0.3+'rem'
}
remSize()
window.onresize=function(){
    remSize()
}