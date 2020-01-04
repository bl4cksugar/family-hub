<template>
	<v-dialog v-model="dialog" max-width="500px">
		<template v-slot:activator="{ on }">
			<v-btn color="red lighten-2" dark v-on="on">Edit Data</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">Edit Profile</span>
			</v-card-title>

			<v-card-text>
				<v-container>
					<v-row>
						<v-col cols="12" sm="6" md="4">
							<v-text-field v-model="editableMember.first_name" label="First Name"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field v-model="editableMember.middle_name" label="Middle Name"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field v-model="editableMember.last_name" label="Last Name"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
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
										v-model="editableMember.day_of_birth"
										label="Day of birth"
										required
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
									ref="picker"
									v-model="editableMember.day_of_birth"
									:max="new Date().toISOString().substr(0, 10)"
									min="1950-01-01"
									@change="acceptDateOfBirth"
								></v-date-picker>
							</v-menu>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-menu
								ref="menu2"
								v-model="menu2"
								:close-on-content-click="false"
								transition="scale-transition"
								offset-y
								min-width="290px"
							>
								<template v-slot:activator="{ on }">
									<v-text-field
										color="grey"
										background-color="rgba(255, 255, 255, 0.9)"
										v-model="editableMember.day_of_death"
										label="Date of death"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
									ref="picker"
									v-model="editableMember.day_of_death"
									:max="new Date().toISOString().substr(0, 10)"
									:min="editableMember.day_of_birth"
									@change="acceptDateOfDeath"
								></v-date-picker>
							</v-menu>
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
			menu: null,
			menu2: null,
			dialog: false,
			test: null,
			editableMember: {
				id: null,
				first_name: null,
				middle_name: null,
				last_name: null,
				avatar: null,
				day_of_birth: null,
				day_of_death: null
			}
		};
	},
	props: {
		member: {
			type: Object,
			required: true
		}
	},
	mounted() {
		this.editableMember = this.member;
	},
	methods: {
		acceptDateOfBirth(date) {
			this.$refs.menu.save(date);
		},
		acceptDateOfDeath(death) {
			this.$refs.menu2.save(death);
		},
		close() {
			this.dialog = false;
		},
		async save() {
			let result = await axios.put("auth/member/update", {
				first_name: this.editableMember.first_name,
				middle_name: this.editableMember.middle_name,
				last_name: this.editableMember.last_name,
				day_of_birth: this.editableMember.day_of_birth,
				day_of_death: this.editableMember.day_of_death
			});
			this.close();
		}
	}
};
</script>