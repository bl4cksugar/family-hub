<template>
	<v-col class="sidemenu">
		<div class="title text-center">ADMINISTRATION PANEL</div>
		<div class="btn text-center">
			<v-btn @click="signout" rounded width="400px">USERS</v-btn>
		</div>

		<div class="btn text-center">
			<v-btn @click="signout" rounded width="400px">FAMILIES</v-btn>
		</div>

		<div class="btn text-center">
			<v-btn @click="signout" rounded width="400px">NEWS</v-btn>
		</div>

		<div class="btn text-center">
			<v-btn @click="signout" rounded width="400px">SYSTEM LOGS</v-btn>
		</div>

		<div class="btn text-center">
			<v-btn @click="signout" rounded width="400px">AFFINITIES</v-btn>
		</div>

		<div class="btn text-center">
			<v-btn @click="signout" rounded width="200px" color="red">SIGN OUT</v-btn>
		</div>
	</v-col>
</template>


<script>
export default {
	components: {},

	methods: {
		signout() {
			let result = axios.post("addresshere", {
				login: this.login,
				password: this.password
			});
			result ? console.log("wylogowano") : console.log("błąd");
		}
	}
};
</script>

<style scoped>
.title {
	color: white;
	margin-top: 20px;
	margin-bottom: 20px;
}

.sidemenu {
	margin-top: 50px;
	background-color: #3f3f41;
	min-height: 90vh;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
}
</style>