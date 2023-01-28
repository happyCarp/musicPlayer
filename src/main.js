import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import {Button,Swipe, SwipeItem,Lazyload, Popup  } from 'vant'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

const app=createApp(App)
app.use(store).use(router).use(Vue3Marquee)
app
.use(Button)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
.use(Popup)

.mount('#app')
// getVant(app)