import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import Toast from '../apis/sweetalert'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    messages:[],
    url: '' ,
    searchedData: [],
    inRoom: false,
    popularYtVideos: []
  },
  mutations: {
    PUSH_MESSAGES(state, payload){
      state.messages.push(payload)
    },
    SET_URL(state, payload){
      state.url = payload
    },
    SET_SEARCHEDDATA(state, payload){
      state.searchedData = payload
      console.log(state.searchedData);
    },
    SET_POPULARYTVIDEOS(state, payload) {
      state.popularYtVideos = payload
    },
    SET_INROOM(state, payload) {
      state.inRoom = payload
    }
  },
  actions: {
    fetchPopularVideos(context) {
      axios({
        method:"GET",
        url: '/getPopularVideos'
      })
      .then(({data}) =>{
        context.commit('SET_POPULARYTVIDEOS', data)
      })
      .catch(err =>{
        console.log(err.response.data)
      })
    },
    fetchYoutubeSearch(context, q){
      axios({
        method:"GET",
        url:`/search?part=snippet&q=${q}&key=AIzaSyCuhb2VhU_LHs5z5dSrWoNJiBHPg0jWMM8&maxResults=50`
      })
      .then(({data}) =>{
        context.commit("SET_SEARCHEDDATA", data)
      })
      .catch(err =>{
        console.log(err.response.data)
      })
    },
    sentChatLog(context, email){
      console.log("MASUK", email, context.state.messages[0].name);
      axios({
        method:"POST",
        url: `/emailLog?email=${email}`,
        data: {
          messages: context.state.messages
        }
      })
      .then(({data })=>{
        Toast.fire({
          icon: 'success',
          title: `<span style="color:#FFFFFF">${data}<span>`,
          iconColor: '#FFFFFF',
          background:' #d9534f'
        })
      })
      .catch(err =>{
        if (err.response) {
          Toast.fire({
            icon: 'error',
            title: `<span style="color:#FFFFFF">${err.response.data}<span>`,
            iconColor: '#FFFFFF',
            background:' #d9534f'
          })
        }
      })
    }
  },
  modules: {
  }
})
