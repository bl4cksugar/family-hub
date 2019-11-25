<template>
	<v-col class="sidemenu">
		<v-row class="title text-center">USERS PANEL</v-row>
		<v-row>
			<v-btn to="/panel/tree" rounded>TREE</v-btn>
		</v-row>
		<v-row>
			<v-btn to="/panel/news" rounded>NEWS</v-btn>
		</v-row>
		<v-row>
			
		<v-row>
			<v-btn
				@click="signout"
				rounded
				min-width="100px !important"
				max-width="200px !important"
				color="red"
			>SIGN OUT</v-btn>
		</v-row>
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

.row {
	align-items: center;
	justify-content: center;
}

.v-btn {
	width: 20vw;
	min-width: 150px !important;
	max-width: 400px !important;
}
</style>