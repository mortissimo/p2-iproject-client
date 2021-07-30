<template>
<div id='searchPAGE'>
  <div class='box shadow-lg w-75 mx-auto text-center'>
    <div class='header'>
        <form @submit.prevent='searchYoutube'>
            <div class='row'>
            <div class='col-3 d-inline text-white'><h3>Youtube Search</h3></div>
            <div class='searchForm text-right col'>
            <input type="text" class='form-input' v-model='search' placeholder="eg: Batman">
            <input type="submit" value='Search' class='btn btn-dark ml-3'>
            </div>
            </div>
        </form>
    </div>
    <div class='body bg-light'>
        <div class='container'>
            <div class='contentSearch p-0 row m-4 bg-light' id='card' v-for='link in searchedData' :key='link.id' @click.prevent='watch(link.videoId)'>
                <img :src='link.url' alt="" class='col-4 imgYt p-0'>
                <div class ='col-8 text-left mt-3'>
                    <h3 class='text-dark'><b>{{link.title}}</b></h3>
                    <hr>
                    <h5 class='text-danger'><b>{{link.channelTitle}}</b></h5>
                    <p class='text-dark'><b>{{link.description}}</b></p>
                    <p class='text-dark'>Published At: {{link.publishTime}}</p>
                </div>
            </div>
        </div>
        <hr>
    </div>
    <div class='footer'></div>
  </div>
  <div class='container'>
  <hr class='text-white'>
  </div>
  <div class='box shadow-lg'>
    <div class='header bg-dark'>
            <div class='col-3 d-inline text-white'><h3>POPULAR VIDEOS</h3></div>
    </div>
    <div class= 'popularbody row'>
        <div class='col-4 col-md-4 col-lg-4 c' v-for='video in popularYtVideos' :key='video.id' @click.prevent='watch(video.videoId)'>
            <div class=' m-2 bg-dark contentPopular'>
                <img :src="video.url" alt="" class='popularvideoImg'>
                <h3 class='text-white'>{{video.title}}</h3>
                    <h5 class='text-danger'>{{video.channelTitle}}</h5>
            </div>
        </div>
    </div>
    <div class='footer bg-dark'></div>
  </div>
</div>
</template>

<script>
import Toast from '../apis/sweetalert'
import {mapState,mapActions} from 'vuex'
export default {
    created(){
        if(!localStorage.getItem('name')){
            Toast.fire({
                    icon: 'error',
                    title: `<span style="color:#FFFFFF">Please Input a Name<span>`,
                    iconColor: '#FFFFFF',
                    background:' #d9534f'
            })
            this.$router.push('/login');
            this.$store.commit('SET_INROOM', false);
        }else{
            this.fetchPopularVideos();
        }
    },
    data(){
        return {
            search:''
        }
    },
    methods: {
        ...mapActions(['fetchYoutubeSearch','fetchPopularVideos']),
        searchYoutube(){
            console.log("Masuk");
            this.fetchYoutubeSearch(this.search);
        },
        watch(link){
            this.$socket.emit('changeUrl', link)
            this.$router.push({path:'/room'}).catch(()=>{})
        }
    },
    computed: {
        ...mapState(['searchedData','popularYtVideos'])
    }
}
</script>

<style>
.popularvideoImg {
    width:100%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
}
#searchPAGE {
    text-align: center;
}
:root {
	--dark-color-a: #000000;
	--dark-color-b: #c74747;
	--light-color: #ffffff;
	--success-color: #5cb85c;
	--error-color: #d9534f;
	--body-color: #3b3636;
}

.popular {
    padding:0px
}
.border {
    border-radius:40px
}
.imgYt {
    border-top-left-radius:40px;
    border-bottom-left-radius:40px;
}

.searchForm input[type='text'] {
	font-size: 16px;
	padding: 5px;
	height: 40px;
}
.box {
    margin:20px;
}

.box .header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color :#c74747;
    padding: 20px;
}

.box .body {
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
}

.box .contentSearch {
    background-color:  #3b3636;
    -webkit-box-shadow: -1px 2px 32px -14px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 2px 32px -14px rgba(0,0,0,0.75);
box-shadow: -1px 2px 32px -14px rgba(0,0,0,0.75);
border-radius:40px;
}
.box .contentPopular {
    padding-bottom:10px;
    border-radius :40px;
    height:500px;
}

.box .contentSearch:hover {
    cursor: pointer;
    -webkit-box-shadow: 5px -2px 21px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 5px -2px 21px -1px rgba(0,0,0,0.75);
box-shadow: 5px -2px 21px -1px rgba(0,0,0,0.75);
right:10px;
}

.box .contentPopular:hover {
    cursor: pointer;
    -webkit-box-shadow: 8px 15px 19px 7px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 15px 19px 7px rgba(0,0,0,0.75);
box-shadow: 8px 15px 19px 7px rgba(0,0,0,0.75);
}

.box .footer{
    padding:20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color : var(--dark-color-b)
}

@media (max-width: 800px){
    .box {
        width:100%
    }
}
</style>