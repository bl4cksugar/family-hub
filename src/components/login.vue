<template>
	<v-row justify="end">
		<v-col sm="3">
			<v-toolbar-items class="hidden-sm-and-down">
				<v-text-field
					background-color="white"
					solo
					hide-details
					v-model="email"
					label="Email"
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
import store from "../store";
import cookie from "../helpers/cookie.js";

export default {
	name: "login",
	data() {
		return {
			password: "",
			email: "",
			alert: null
		};
	},

	methods: {
		async login() {
			let result = await axios.post("auth/login", {
				email: this.email,
				password: this.password
			});
			try {
				if (result) {
					if (!result.data.access_token)
						this.alert = {
							state: true,
							type: "error",
							content: "Passwords must be the same!"
						};
					else {
						this.alert = null;
						cookie.setTokenCookie(result.data.access_token);
						let user = await axios.get("auth/user");
						store.dispatch("setSession", user.data);
						if (user.data.type === "admin")
							this.$router.push("admin/logs");
						else this.$router.push("news");					
					}
				} else {
					this.alert = {
						state: true,
						type: "error",
						content: "Something goes wrong! Try again"
					};
				}
			} catch {
				this.alert = {
					state: true,
					type: "error",
					content: "Something goes wrong! Try again"
				};
				return;
			}
		}
	}
};
</script>
