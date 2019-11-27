<template>
	<v-row justify="end">
		<v-col sm="3">
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

		<v-col sm="3" class="hidden-sm-and-down">
			<v-toolbar-items>
				<v-text-field
					background-color="white"
					solo
					hide-details
					v-model="password"
					label="password"
					type="password"
					prepend-inner-icon="fas fa-key"
				></v-text-field>
			</v-toolbar-items>
		</v-col>

		<v-col sm="2" justify-self="center" align-self="center" class="hidden-sm-and-down">
			<v-btn @click="login">
				<span>SIGN IN</span>
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
			password: "",
			nickname: "",
			alert: null
		};
	},

	methods: {
		async login() {
			let result = await axios.post("auth/login", {
				login: this.login,
				password: this.password
			});
			if (result) {
				console.log("do sth");
			} else {
				this.alert = {
					state: true,
					type: "error",
					content: "Something goes wrong! Try again"
				};
			}
		}
	}
};
</script>
