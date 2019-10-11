<template>
	<v-col sm="12" md="6" class="d-flex align-content-center justify-center">
		<v-card color="transparent" flat max-width="400px">
			<div class="title">
				<div class="headline mb-2 text-center">REGISTRATION</div>
			</div>
			<v-card-text>
				<v-row>
					<v-col sm="6">
						<v-text-field
							background-color="rgba(255, 255, 255, 0.9)"
							color="grey"
							outlined
							v-model="name"
							label="name"
						></v-text-field>
					</v-col>

					<v-col sm="6">
						<v-text-field
							background-color="rgba(255, 255, 255, 0.9)"
							color="grey"
							outlined
							v-model="surname"
							label="surname"
						></v-text-field>
					</v-col>
				</v-row>

				<v-text-field
					background-color="rgba(255, 255, 255, 0.9)"
					color="grey"
					outlined
					v-model="email"
					label="e-mail"
					:rules="[rules.required, rules.email]"
				></v-text-field>

				<v-text-field
					background-color="rgba(255, 255, 255, 0.9)"
					color="grey"
					outlined
					v-model="login"
					label="login"
				></v-text-field>

				<v-text-field
					background-color="rgba(255, 255, 255, 0.9)"
					color="grey"
					outlined
					v-model="password"
					:append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
					:rules="[rules.required, rules.min]"
					:type="show1 ? 'text' : 'password'"
					label="password"
					prepend-inner-icon="fas fa-key"
					@click:append="show1 = !show1"
				></v-text-field>

				<v-menu
					ref="menu"
					v-model="menu"
					:close-on-content-click="false"
					transition="scale-transition"
					offset-y
					min-width="290px"
				>
					<template v-slot:activator="{ on }">
						<v-text-field
							color="grey"
							background-color="rgba(255, 255, 255, 0.9)"
							v-model="date"
							label="Birthday date"
							outlined
							readonly
							v-on="on"
						></v-text-field>
					</template>
					<v-date-picker
						ref="picker"
						v-model="date"
						:max="new Date().toISOString().substr(0, 10)"
						min="1950-01-01"
						@change="save"
					></v-date-picker>
				</v-menu>

				<div class="btn text-center">
					<v-btn @click="signin" rounded width="200px">SIGN UP</v-btn>
				</div>
			</v-card-text>
		</v-card>
	</v-col>
</template>
<script>
import axios from "axios";
export default {
	name: "registration",
	data() {
		return {
			show1: false,
			password: "",
			nickname: "",
			login: "",
			name: "",
			surname: "",
			email: "",
			date: null,
			menu: false,
			rules: {
				required: value => !!value || "Required.",
				min: v => v.length >= 8 || "Min 8 characters",
				emailMatch: () =>
					"The email and password you entered don't match",
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return pattern.test(value) || "Invalid e-mail.";
				}
			}
		};
	},
	components: {},

	watch: {
		menu(val) {
			val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
		}
	},

	methods: {
		save(date) {
			this.$refs.menu.save(date);
		},
		signin() {
			let result = axios.post("addresshere", {
				name: this.name,
				surname: this.surname,
				email: this.email,
				password: this.password,
				birthday: this.date
			});
			result ? console.log("zarejestrowano") : console.log("błąd");
		}
	}
};
</script>
<style scoped>
</style>