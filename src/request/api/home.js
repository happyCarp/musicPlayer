import service from "../../request/index"
export function getBanner(){
    return service({
        method:'GET',
        url:'/banner?type=2',
    })
}
export function getMusicList(){
    return service({
        method:'GET',
        url:'/personalized?limit=10'
    })
}
export function Login(data){
    return service({
        method:'Get',
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
export function getUserdetail(id){
    return service({
        method:'Get',
        url:`/user/detail?uid=${id}`
    })
}