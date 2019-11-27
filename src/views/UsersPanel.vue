<template>
	<v-container class="box" fluid fill-height>
		<v-row>
			<v-col sm="12" md="8"></v-col>
		</v-row>
	</v-container>
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
.box {
	min-height: 90vh;
	background-image: linear-gradient(rgb(242, 171, 91), rgb(91, 136, 85));
}

.title {
	min-width: 20vw;
	color: white;
	margin-top: 20px;
}
</style>