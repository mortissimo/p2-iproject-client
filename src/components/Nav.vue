<template>
<section class='navigation'>
  <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid" >
    <a class="navbar-brand"><h2><i class="fas fa-smile"></i>  Watch2Gether</h2></a>
    <div :class='notCollapse'>
    <form class="d-flex" @submit.prevent='changeUrl' v-if='inRoom' :class='notCollapse'>
      <input class="form-control me-2" type="search" placeholder="youtube url..." aria-label="Search" v-model='link'>
      <button class="btn btn-outline-danger" type="submit">Watch</button>
    </form>
    </div>
    <div :class='notCollapse'>
    <button  v-if='inRoom' @click.prevent='toSearchPage' class='d-flex btn btn-danger'>Search Your Video here !</button>
    </div>
    <button v-if='!inRoom' class='d-flex btn btn-danger' @click.prevent='toRoom'>Enter Room</button>
  </div>
</nav>
<div class='row' :class='isCollapse'>
  <form class="d-flex"  @submit.prevent='changeUrl' v-if='inRoom' >
      <input class="form-control me-2" type="search" placeholder="youtube url..." aria-label="Search" v-model='link'>
      <button class="btn btn-outline-danger" type="submit">Watch</button>
    </form>
</div>

<div class='row' :class='isCollapse'>
  <button v-if='inRoom' @click.prevent='toSearchPage' class=' btn btn-danger form control'>Search Your Video here !</button>
</div>
</section>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    created(){
      window.addEventListener('resize', this.onResize)
    },
    destroyed(){
      window.removeEventListener('resize', this.onResize)
    },
    data(){
        return {
            link : '',
            hasName: localStorage.getItem('name'),
            isCollapse:'collapse',
            notCollapse:''
        }  
    },
    methods:{
         onResize() {
          if (window.innerWidth < 860) {
            this.isCollapse = '';
            this.notCollapse = 'collapse'
          }else if(window.innerWidth >= 860){
            this.isCollapse = 'collapse';
            this.notCollapse = '';
          }
        },
        changeUrl(){
            this.$socket.emit('changeUrl', this.link)
        },
        toRoom(){
          this.$router.push({path: '/room'}).catch(() => {})
        },
        toSearchPage(){
          this.$router.push({path: '/search'}).catch(() => {})
        }
    },
    computed:{
      ...mapState(['inRoom'])
    }
}
</script>

<style>

</style>