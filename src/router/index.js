import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/itemMusic',
    name: 'itemmusic',//name最好不要有大写字母
    component:()=>import('@/views/itemMusic.vue')

    
  },
  {
    path: '/search',
    name: 'search',//name最好不要有大写字母
    component:()=>import('@/views/search.vue')

  },
  {
    path: '/login',
    name: 'login',//name最好不要有大写字母
    component:()=>import('@/views/login.vue')

    
  },{
    path: '/infoUser',
    name: 'infoUser',//name最好不要有大写字母
    beforeEnter: (to, from, next) => {
      if(store.state.isLogin || store.state.token ||localStorage.getItem('token')){
        next()
      }else{
        next('/login')
      }
    },
    component:()=>import('@/views/infoUser.vue')

    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from)=>{
  if(to.path=='/login'){
    store.state.isFooterShow=false
  }else{
    store.state.isFooterShow=true
  }
})

export default router
