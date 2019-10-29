<template>
	<v-row justify="end">
		<v-col sm="2">
			<v-toolbar-items class="hidden-sm-and-down">
				<v-text-field
					background-color="white"
					solo
					hide-details
					v-model="nickname"
					label="login"
					prepend-inner-icon="fas fa-user-circle"
				></v-text-field>
			</v-toolbar-items>
		</v-col>

		<v-col sm="2" class="hidden-sm-and-down">
			<v-toolbar-items>
				<v-text-field
					background-color="white"
					solo
					hide-details
					v-model="password"
					label="password"
					type="password"
					prepend-inner-icon="fas fa-key"
					@click:append="show1 = !show1"
				></v-text-field>
			</v-toolbar-items>
		</v-col>

		<v-col sm="2" justify-self="center" align-self="center" class="hidden-sm-and-down">
			<v-btn @click="login">
				<span>SIGN UP</span>
			</v-btn>
		</v-col>
	</v-row>
</template>




<script>
import axios from "axios";
export default {
	name: "login",
	data() {
		return {
			show1: false,
			password: "",
			nickname: ""
		};
	},

	methods: {
		login() {
			let result = axios.post("addresshere", {
				login: this.login,
				password: this.password
			});
			result ? console.log("zalogowano") : console.log("błąd");
		}
	}
};
</script>
