import service from "../../request";
export function getMusicList(id){
    return service({
        method:'GET',
        url:`/playlist/detail?id=${id}`
    })
}
export function getItemList(id){
    return service({
        method:'GET',
        url:`/playlist/detail?id=${id}`
    })
}
export function getMusicLyric(id){
    return service({
        method:'Get',
        url:`/lyric?id=${id}`
    })

}
export function search(keyword){
    return service({
        method:'Get',
        url:`/search?keywords=${keyword}`
    })
}