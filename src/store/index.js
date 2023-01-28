import { createStore } from 'vuex'
import {getMusicLyric} from '@/plugins/api/item'
import {Login} from '@/plugins/api/home'
export default createStore({
  state: {
    playList:[{
      al:{
        id: 513052,
        name: "椿",
        pic: 109951162931819040,
        picUrl: "http://p3.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg",
        pic_str: "109951162931819035"
      },
      id:5271858,
      name:'春',
      ar:[{
        name:'古巨基'
      }]
    }],
    playListIndex:0,
    isButShow:true,
    detailShow:false,
    lyricList:{},
    currentTime:0,
    duration:0,
    isLogin:false,
    isFooterShow:true,
    token:'',
    userDetail:{}
  },
  getters: {
  },
  mutations: {
    updateIsButShow:function(state,value){
      state.isButShow=value
    },
    updatePlayList:function(state,value){
      state.playList=value
      console.log(state.playList);
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value
    },
    updateDetailShow:function(state){
      state.detailShow=!state.detailShow
      console.log(state.detailShow);
    },
    updateLyric:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function(state,value){
      state.currentTime=value;
    },
    updateDuration:function(state,value){
      state.duration=value
    },
    pushSong:function(state,value){
      state.playList.push(value)
      state.playListIndex=state.playList.length-1
    },
    updateIsLogin:function(state,value){
      state.isLogin=value
    },
    updateToken:function(state,value){
      state.token=value
    },
    updateUserDetail:function(state,value){
      state.userDetail=value
    }
    
  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusicLyric(value)
      console.log(res);
      context.commit('updateLyric',res.data.lrc.lyric)
    },
    getLogin:async function(context,value){
      let res=await Login(value)
      console.log(res);
      return res
    }
  },
  modules: {
  }
})
