<template>
  <div id="app">
	<Navbar />
    <router-view/>
	<div class='p-5'>FOOTER</div>
	<div class='fixedFoot'>
	<HFooter class='bg-dark' style="height:70px;"></HFooter>
	</div>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Navbar from './components/Nav.vue'
export default {
	components:{
		Navbar,
		HFooter
	}
}
</script>

<style>
.fixedFoot{
	position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
body {
	min-height:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

:root {
	--dark-color-a: #000000;
	--dark-color-b: #c74747;
	--light-color: #ffffff;
	--success-color: #5cb85c;
	--error-color: #d9534f;
	--body-color: #3b3636
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	
}

#body {
	font-family: 'Roboto', sans-serif;
	font-size: 10px;
	background-color: #3b3636
}

nav {
	background-color: rgb(46, 43, 43);
	height:70px;
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

.btn {
	cursor: pointer;
	padding: 5px 15px;
	background: var(--light-color);
	color: var(--dark-color-a);
	border: 0;
	font-size: 17px;
}

/* Chat Page */

.chat-container {
	max-width: 1100px;
	margin: 0px auto;
	overflow: hidden;
}

.chat-header {
	background: var(--dark-color-a);
	color: #fff;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.chat-main {
	display: grid;
	background: rgb(202, 183, 183);
	grid-template-columns: 1fr 3fr;
}

.chat-sidebar {
	background: var(--dark-color-b);
	color: rgb(255, 255, 255);
	padding: 20px 20px 60px;
	overflow-y: scroll;
}

.chat-sidebar h2 {
	font-size: 20px;
	background: rgba(0, 0, 0, 0.1);
	padding: 10px;
	margin-bottom: 20px;
}

.chat-sidebar h3 {
	margin-bottom: 15px;
}

.chat-sidebar ul li {
	padding: 10px 0;
}

.chat-messages {
	padding: 30px;
	max-height: 440px;
	overflow-y: auto;
}

.chat-messages .message {
	padding: 1px;
	font-size: 15px;
	margin-bottom: 15px;
	background-color: var(--light-color);
	border-radius: 10px;
}

.chat-messages .message .meta {
	font-size: 15px;
	font-weight: bold;
	color: var(--dark-color-b);
	opacity: 0.7;
	margin-bottom: 7px;
}

.chat-messages .message .meta span {
	color: #777;
	font-size:10px;
}

.chat-form-container {
	padding: 20px 30px;
	background-color: var(--dark-color-a);
}

.chat-form-container form {
	display: flex;
}

.chat-form-container input[type='text'] {
	font-size: 16px;
	padding: 5px;
	height: 40px;
	flex: 1;
}

/* Join Page */
.join-container {
	max-width: 500px;
	margin: 80px auto;
	color: #fff;
}

.join-header {
	text-align: center;
	padding: 20px;
	background: var(--dark-color-a);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.join-main {
	padding: 30px 40px;
	background: var(--dark-color-b);
}

.join-main p {
	margin-bottom: 20px;
}

.join-main .form-control {
	margin-bottom: 20px;
}

.join-main label {
	display: block;
	margin-bottom: 5px;
}

.join-main input[type='text'] {
	font-size: 16px;
	padding: 5px;
	height: 40px;
	width: 100%;
}

.join-main select {
	font-size: 16px;
	padding: 5px;
	height: 40px;
	width: 100%;
}

.join-main .btn {
	margin-top: 20px;
	width: 100%;
}
.qbox {
  border-radius:20px;
  position:absolute;
  height:300px;
  margin:auto;
  left: 0;
  right: 0;
  margin:0px;
  
}
.qhead{
	margin:0px;
	position:relative;
	color:white;
	text-align: center;
	background-color: darkblue;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.qdata{
	margin:0px;
	position:relative;
  background-color :gray;
}
@media (max-width: 800px) {
	.chat-main {
		display: block;
	}
	.chat-sidebar {
		display: none;
	}
	.chat-messages .message .meta {
		font-size:13px
	}
	.chat-messages {
		padding: 10px;
		max-height: 205px;
		overflow-y: auto;
	}

	.chat-messages .message {
		padding: 0px;
		font-size: 13px;
	}
}

</style>
