import {Button,Swipe, SwipeItem,  Popup} from 'vant'
let plugin=[Button,Swipe, SwipeItem,  Popup];
export default function getVant(app){
    plugin.forEach((item)=>{
        return app.use(Item)
    })
}