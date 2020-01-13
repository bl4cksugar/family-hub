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

		<v-col v-if="!isLogged" sm="2" justify-self="center" align-self="center">
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
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-alert v-if="alert" :type="alert.type">{{alert.content}}</v-alert>
						<div class="title">
							<div class="headline mb-2 text-center" style="color:black">LOGIN</div>
						</div>
						<v-text-field
							style="margin:10px"
							background-color="white"
							solo
							v-model="email"
							label="email"
							prepend-inner-icon="fas fa-user-circle"
							:rules="[rules.required, rules.email]"
						></v-text-field>

						<v-text-field
							style="margin:10px"
							background-color="white"
							solo
							v-model="password"
							label="password"
							type="password"
							prepend-inner-icon="fas fa-key"
							@click:append="show1 = !show1"
							:rules="[rules.required]"
						></v-text-field>
						<div class="my-2">
							<v-btn text small color="primary" @click="resetPassword">I have forgot my password</v-btn>
						</div>
						<v-btn @click="login" style="margin:10px">
							<span>SIGN IN</span>
						</v-btn>
					</v-form>
				</v-container>
			</v-dialog>
		</v-col>
		<v-col v-if="isLogged" sm="2" justify-self="center" align-self="center">
			<v-btn depressed text icon>
				<v-badge :content="messages" :value="messages" color="green" overlap>
					<v-icon>fas fa-bell</v-icon>
				</v-badge>
			</v-btn>
		</v-col>
	</v-app-bar>
</template>
				
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import store from "../store";
import cookie from "../helpers/cookie";

export default {
	name: "navbar",
	data() {
		return {
			messages: 0,
			show: false,
			email: null,
			password: null,
			alert: null,
			valid: null,
			dialog: false,
			rules: {
				required: value => !!value || "Required.",
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return pattern.test(value) || "Invalid e-mail.";
				}
			}
		};
	},
	components: {},
	computed: {
		...mapGetters({
			isLogged: "user"
		})
	},
	async mounted() {
		if (this.$route.meta.requiresAuth === true) {
			let result = await axios.get("auth/pivot/get");
			if (result) {
				this.messages = result.data.count;
			}
		}
		setInterval(async () => {
			if (this.$route.meta.requiresAuth === true) {
				let result = await axios.get("auth/pivot/get");
				if (result) {
					this.messages = result.data.count;
				}
			}
		}, 5000);
	},
	methods: {
		async login() {
			if (this.$refs.form.validate()) {
				let result = await axios
					.post("auth/login", {
						email: this.email,
						password: this.password
					})
					.catch(error => {
						this.alert = {
							state: true,
							type: "error",
							content: "Passwords must be the same!"
						};
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
							let memberInfo = await axios.get(
								"/auth/member/info"
							);
							if (memberInfo.status === 200)
								store.dispatch(
									"setMember",
									memberInfo.data.data[0]
								);
							if (
								memberInfo.data.data[0].first_name !== null &&
								memberInfo.data.data[0].last_name !== null
							) {
								if (user.data.type === "admin")
									this.$router.push("admin/logs");
								else this.$router.push("news");
							} else {
								this.$router.push({
									path: "profile",
									params: { fromRegister: true }
								});
							}
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
		},
		async resetPassword() {
			let result = await axios
				.post("password/create", {
					email: this.email
				})
				.catch(error => {
					this.$toasted.error(
						"Something goes wrong, try again later",
						{
							theme: "toasted-primary",
							position: "top-right",
							fullWidth: true,
							fitToScreen: false,
							duration: 4000
						}
					);
				});
			if (result) {
				this.$toasted.success(result.data.message, {
					theme: "toasted-primary",
					position: "top-right",
					fullWidth: true,
					fitToScreen: false,
					duration: 4000
				});
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