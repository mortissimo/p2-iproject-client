<template>
  <div class="join-container">
			<header class="join-header">
				<h1><i class="fas fa-smile"></i> Watch2Gether</h1>
			</header>
			<main class="join-main">
				<form action="chat.html" @submit.prevent="login">
						<!-- <label for="username" >Username</label> -->
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Choose your name..."
							required
                            v-model='name'
							class='form-control'
						/>
					<!-- <div class="form-control">
						<label for="room">Room</label>
						<select name="room" id="room">
							<option value="JavaScript">JavaScript</option>
							<option value="Python">Python</option>
							<option value="PHP">PHP</option>
							<option value="C#">C#</option>
							<option value="Ruby">Ruby</option>
							<option value="Java">Java</option>
						</select>
					</div> -->
					<button type="submit" class="btn btn-dark">Join Us</button>
				</form>
			</main>
		</div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            name: ''
        }
    },
    methods:{
        login(){
            localStorage.setItem('name', this.name)
			this.$socket.emit('join', this.name)
            // const roomId = 1;
            this.$router.push({path: `/room`});
        }
    }
}
</script>

<style>

</style>