import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import VueSocketIO from 'vue-socket.io'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueWebSpeech from 'vue-web-speech'
import VueSpeech from 'vue-speech'

Vue.config.productionTip = false
Vue.use(VueSpeech)
Vue.use(VueWebSpeech)
Vue.use(VueYouTubeEmbed)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://watchtwogether.herokuapp.com'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
