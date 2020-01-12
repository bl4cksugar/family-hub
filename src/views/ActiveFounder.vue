<template>
	<v-container fluid fill-height class="box">
		<v-row align="center" justify="center">
			<v-col md="12" class="d-flex align-center justify-center px-0">
				<div class="card">
					<h1 v-if="isValid">{{member.message}}</h1>
					<router-link v-if="isValid" to="/"></router-link>
					<h1 v-else>{{message}}</h1>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			isValid: true,
			message: null,
			valid: null,
			member: {
				message: ""
			}
		};
	},
	async created() {
		let result = await axios
			.get("auth/signup/activate/" + this.$route.params.token)
			.catch(error => {
				this.message = error.data.message;
				this.isValid = false;
			});
		if (result) {
			this.member = result.data;
			this.$toasted.success("Now you can login into your tree", {
				theme: "toasted-primary",
				position: "top-right",
				fullWidth: true,
				fitToScreen: false,
				duration: 4000
			});
		}
	}
};
</script>

<style>
.card {
	background-color: white;
	padding: 30px;
}
</style>
