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
		<login v-if="isLoginPage"></login>
		<v-col sm="2" justify-self="center" align-self="center" class="hidden-md-and-up">
			<v-dialog v-model="dialog" max-width="450px">
				<template v-slot:activator="{ on }">
					<v-btn v-on="on" @click="login">
						<span>SIGN IN</span>
					</v-btn>
					<!-- <v-app-bar-nav-icon color="primary" dark v-on="on"></v-app-bar-nav-icon> -->
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
								v-model="nickname"
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
export default {
	name: "navbar",
	props: {
		isLoginPage: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			nickname: null,
			password: null,
			dialog: false
		};
	},
	components: {
		login: login
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

<style scoped>
.headline a {
	text-decoration: none;
	color: black;
}

.v-dialog--active {
	background: white !important;
}
</style>