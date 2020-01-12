<template>
	<v-dialog v-model="dialog" max-width="500px">
		<template v-slot:activator="{ on }">
			<v-btn color="blue lighten-2" class="mx-5" dark v-on="on">Reset Password</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">Reset Password</span>
			</v-card-title>

			<v-card-text>
				<v-container>
					<v-row>
						<v-col cols="12" sm="6" md="4">
							<v-text-field v-model="resetPassword.email" label="Email"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field v-model="resetPassword.password" label="Password"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field v-model="resetPassword.password_confirmation" label="Repeat password"></v-text-field>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				<v-btn color="blue darken-1" text @click="save">Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
			dialog: false,
			resetPassword: {
				email: null,
				password: null,
				password_confimation: null
			}
		};
	},
	methods: {
		close() {
			this.dialog = false;
		},
		async save() {
			let result = await axios.put("password/reset", {
				email: this.resetPassword.email,
				password: this.resetPassword.password,
				password_confimation: this.resetPassword.password_confimation
			});
			this.close();
		}
	}
};
</script>