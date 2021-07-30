<template>
  <div>
    <div class='container-fluid mt-3'>
    <div class='row'>
    <youtube class='col-12 col-md-12 col-lg-8  text-right' :video-id="videoId" player-width="100%" :player-height="height" :player-vars="{autoplay: 1}" allow='autoplay'></youtube>
    <!-- <iframe id="player" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0"></iframe> -->
    <Chat class='col-12 col-md-12 col-lg-4 align-middle mx-auto'/>
    </div>
    </div>
  </div>
</template>

<script>
 var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: this.videoId,
//     playerVars: {
//       'playsinline': 1
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
import {mapState} from 'vuex'
import Toast from '../apis/sweetalert'
import Chat from '../components/Chat.vue'
export default {
  components:{
      Chat
  },
  created(){
    window.addEventListener('resize', this.onResize)
    if(localStorage.getItem('name')){
      this.$socket.emit('join', localStorage.getItem('name'))
      this.$socket.emit('fetchUrl')
      this.$store.commit('SET_INROOM', true);
    }else{
      this.$router.push('/login');
      this.$store.commit('SET_INROOM', false);
      Toast.fire({
            icon: 'error',
            title: `<span style="color:#FFFFFF">Please Input a Name<span>`,
            iconColor: '#FFFFFF',
            background:' #d9534f'
          })
    }
    
  },
  destroyed(){
    window.removeEventListener('resize', this.onResize)
    this.$socket.emit('disconnect') 
    this.$store.commit('SET_INROOM', false);
  },
  sockets:{
    youtubeLink(url){
      this.$store.commit('SET_URL', url)
      this.videoId = this.$youtube.getIdFromURL(this.url)
      this.startTime = this.$youtube.getTimeFromURL(this.url)
    },
    videoUrl(url){
      this.$store.commit('SET_URL', url)
      this.videoId = this.$youtube.getIdFromURL(this.url)
      this.startTime = this.$youtube.getTimeFromURL(this.url)
    },
    // getRooms(data) {
    //   this.rooms = data
    // }
    // createRoom(){
    //   let payload = {
    //     roomName: this.roomName,
    //     admin: localStorage.getItem('name')
    //   }  
    //   this.$socket.emit('createRoom', payload)
    //   this.roomName = ''
    // },
  },
   data(){
    return {
      videoId:'',
      startTime:'',
      link:'',
      // rooms:[],
      // roomName: ''
      width:'100%',
      height:'600px'
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 860) {
        this.height ='300px'
      }else if(window.innerWidth >= 860){
        this.height ='600px'
      }
    },
    ready(event){
      this.player.playVideo()
    },
    playing(){
      // this.player.playVideo()
    },
    changeUrl(){
      this.$socket.emit('changeUrl', this.link)
    },
  },
  computed :{
    ...mapState(['url'])
  }
}
</script>

<style>


</style>