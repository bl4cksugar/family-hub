<template>
	<v-container fluid fill-height class="box">
		<v-row align="center" justify="center">
			<v-col md="12" class="d-flex align-center justify-center px-0">
				<div class="card">
					<v-form ref="form" v-model="valid" lazy-validation v-if="isValid">
						<h5>{{member.message}}</h5>
						<v-text-field
							v-model="password"
							:rules="[rules.required, rules.min]"
							label="Password"
							type="password"
							prepend-inner-icon="fas fa-key"
							required
						></v-text-field>
						<v-text-field
							v-model="repeatPassword"
							:rules="[rules.required, rules.min]"
							type="password"
							label="Repeat password"
							prepend-inner-icon="fas fa-key"
							required
						></v-text-field>

						<v-btn class="mr-4" @click="submit">submit</v-btn>
					</v-form>
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
			password: "",
			valid: null,
			member: {
				message: ""
			},
			repeatPassword: "",
			rules: {
				required: value => !!value || "Required.",
				min: v => v.length >= 8 || "Min 8 characters"
			}
		};
	},
	async created() {
		let result = await axios
			.get("auth/signup/activate/member/" + this.$route.params.token)
			.catch(error => {
				console.log(error);
				this.message = error.data.message;
				this.isValid = false;
			});
		if (result) {
			this.member = result.data;
		}
	},
	methods: {
		async submit() {
			let result = await axios.post("auth/password/reset", {
				email: this.member.email,
				password: this.password,
				password_confirmation: this.repeatPassword,
				token: this.member.token
			});
			if (result) {
				this.$toasted.success(
					"Password correctly changed, now you can login",
					{
						theme: "toasted-primary",
						position: "top-right",
						fullWidth: true,
						fitToScreen: false,
						duration: 3000
					}
				);
				this.$router.push("/");
			}
			console.log(result);
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
