<template>
	<v-app-bar
		fixed
		scroll-off-screen
		style="background-image:linear-gradient(to right,rgb(225,225,225),rgb(255,255,255));"
	>
		<v-toolbar-title class="headline text-uppercase">
			<router-link to="/" tag="a">
				<span>Family HUB</span>
				<span class="font-weight-light">grupa C</span>
			</router-link>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<login v-if="!isLogged"></login>

		<v-col v-if="!isLogged" sm="2" justify-self="center" align-self="center" class="hidden-md-and-up">
			<v-dialog v-model="dialog" max-width="450px">
				<template v-slot:activator="{ on }">
					<v-btn v-on="on">
						<span>SIGN IN</span>
					</v-btn>
				</template>
				<v-container
					style="background:rgba(255,255,255,0.75)"
					class="d-flex align-center justify-center"
				>
					<v-col cols="10">
						<v-row>
							<v-text-field
								style="margin:10px"
								background-color="white"
								solo
								hide-details
								v-model="email"
								label="login"
								prepend-inner-icon="fas fa-user-circle"
							></v-text-field>
						</v-row>
						<v-row>
							<v-text-field
								style="margin:10px"
								background-color="white"
								solo
								hide-details
								v-model="password"
								label="password"
								type="password"
								prepend-inner-icon="fas fa-key"
								@click:append="show1 = !show1"
							></v-text-field>
						</v-row>
						<v-row>
							<v-btn @click="login" style="margin:10px">
								<span>SIGN UP</span>
							</v-btn>
						</v-row>
					</v-col>
				</v-container>
			</v-dialog>
		</v-col>
	</v-app-bar>
</template>
				
<script>
import login from "./login";
import axios from "axios";
import { mapGetters } from "vuex";
import store from "../store";
import cookie from "../helpers/cookie";

export default {
	name: "navbar",
	data() {
		return {
			email: null,
			password: null,
			alert: null,
			dialog: false
		};
	},
	components: {
		login: login
	},
	computed: {
		...mapGetters({
			isLogged: "user"
		})
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
						console.log(result);
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
		},
		async logout() {
			let result = await axios.get("auth/logout");
			if (result) {
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

<style scoped>
.headline a {
	text-decoration: none;
	color: black;
}

.v-dialog--active {
	background: white !important;
}
</style>