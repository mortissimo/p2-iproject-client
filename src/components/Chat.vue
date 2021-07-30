<template>
  <div class="chat-container">
    <header class="chat-header">
      <h1><i class="fas fa-smile"></i> LiveChat</h1>
      <a class="btn btn-danger" @click.prevent='leave'>Leave Room</a>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3><i class="fas fa-users"></i> Users</h3>
        <div id="users"  >
          <p  v-for='(user,i) in viewers' :key='i'>{{user}}</p>
        </div>
      </div>
      <div class="chat-messages">
        <Messages v-for='(msg,index) in messages' :key='index'
        :msg='msg'
        />
      </div>
    </main>
    <!-- <div >
      <vue-speech  class='collapse' @onTranscriptionEnd="onEnd"/>
   </div> -->
    <div class="chat-form-container" :class='notHide'>
      <form id="chat-form" class='forMessage' @submit.prevent="sendMessages">
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autocomplete="off"
          v-model='inputMsg'
        />
        <button class="btn btn-dark" ><i class="fas fa-paper-plane"></i> Send</button>
        <button class='btn btn-light ml-2' @click.prevent='openBox'><i class="far fa-file-alt"></i></button>
        <!-- <button class='btn btn-success ml-2' @click.prevent='micSetting'></button> -->
      </form>
    </div>
    <div class="chat-form-container bg-dark" :class='hide'>
      <h5 class=' text-white'>Send "Chat Log" to your Email</h5>
      <form id="chat-form" class='forEmail' @submit.prevent='sentMail'>
        <input
          id="msg"
          type="text"
          placeholder="eg: www.admin@gmail.com"
          required
          autocomplete="off"
          v-model='email'
        />
        <button class="btn btn-dark" style='background-color:black'><i class="fas fa-envelope-square"></i> Send</button>
        <button class='btn btn-light ml-2' @click.prevent='openBox'><i class="fas fa-paper-plane"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState , mapActions} from 'vuex'
import Messages from './Messages.vue'
export default {
    created(){
      this.getUser()
    },
    sockets:{
      broadcastMessage(data){
        this.$store.commit('PUSH_MESSAGES', data)
        this.scrollToEnd();
      },
      sendUsers(viewers){
        this.viewers = viewers
      }
    },
    data(){
        return {
            inputMsg: '',
            viewers: [],
            email:'',
            hide: 'collapse',
            notHide: ''
        }
    },
    components: {
        Messages
    },
    computed: {
        ...mapState(['messages'])
    },
    methods:{
      ...mapActions(['sentChatLog']),
      sentMail(){
        this.sentChatLog(this.email);
      }, 
      // micSetting(){
      //   mediastream.getAudioTracks()[0].enabled = false;
      // },
      openBox(){
        if(this.hide ==='collapse'){
          this.hide = ''
          this.notHide = 'collapse'
        }else if(this.hide === ''){
          this.hide = 'collapse'
          this.notHide = ''
        }
      },
      sendMessages() {
        const payload = {name: localStorage.getItem('name'),time: new Date().toLocaleTimeString(), message: this.inputMsg}
        this.$socket.emit('sendMessages', payload)
        this.inputMsg = ''
      },
      scrollToEnd() {    	
        var container = this.$el.querySelector(".chat-messages");
        container.scrollTop = container.scrollHeight;
      },
      getUser() {
        this.$socket.emit('getUser')
      },
      leave(){
        localStorage.clear();
        this.$router.push({path:'/login'}).catch(() =>{});
        
      },
      //  onEnd ( {lastSentence, transcription} ) {
      //   this.inputMsg = lastSentence
      // }
    },
}
</script>

<style>
  
</style>