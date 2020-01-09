<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" max-width="600px">
			<template v-slot:activator="{ on }">
				<v-btn color="orange" dark v-on="on">EDIT MEMBER</v-btn>
			</template>
			<v-card>
				<v-card-title>
					<span class="headline">Edit Member Inforation</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12" v-if="isFounder">
								<v-select
									v-model="memberId"
									:items="familly"
									clearable
									hint="Member, which you want to edit"
									persistent-hint
									item-text="name"
									item-value="id"
									label="Member"
									required
								></v-select>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field
									:disabled="!isPicked"
									v-model="editableMember.first_name"
									label="First Name"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field
									:disabled="!isPicked"
									v-model="editableMember.middle_name"
									label="Middle Name"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field
									:disabled="!isPicked"
									v-model="editableMember.last_name"
									label="Last Name"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-menu
									ref="menu"
									:disabled="!isPicked"
									v-model="menu"
									:close-on-content-click="false"
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<v-text-field
											color="grey"
											:disabled="!isPicked"
											background-color="rgba(255, 255, 255, 0.9)"
											v-model="editableMember.day_of_birth"
											label="Date of birth"
											readonly
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										ref="picker"
										v-model="editableMember.day_of_birth"
										:disabled="!isPicked"
										:max="editableMember.day_of_death === null ? new Date().toISOString().substr(0, 10) : editableMember.day_of_death"
										min="1950-01-01"
										@change="save"
									></v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-menu
									ref="menu2"
									v-model="menu2"
									:close-on-content-click="false"
									:disabled="!isPicked"
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<v-text-field
											color="grey"
											:disabled="!isPicked"
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
										:disabled="!isPicked"
										:max="new Date().toISOString().substr(0, 10)"
										:min="editableMember.day_of_birth"
										@change="savedeath"
									></v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="12">
								<v-text-field
									:disabled="!isPicked"
									hint="If you want to invite this member to tree, you have to add a email"
									persistent-hint
									v-model="email"
									label="Email"
								></v-text-field>
							</v-col>
						</v-row>
					</v-container>
					<small>*indicates required field</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
					<v-btn color="blue darken-1" text @click="submit">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
	props: {
		familly: {
			type: Array,
			required: true
		}
	},
	data: () => ({
		dialog: false,
		menu: null,
		menu2: null,
		memberId: null,
		email: null,
		editableMember: {
			id: null,
			first_name: null,
			middle_name: null,
			last_name: null,
			avatar: null,
			day_of_birth: null,
			day_of_death: null
		},
		isPicked: false
	}),
	watch: {
		isChild() {
			this.isPartner = !this.isChild;
		},
		isPartner() {
			this.isChild = !this.isPartner;
		},
		memberId(newVal) {
			if (newVal === undefined) this.memberId = null;
			if (newVal !== null) {
				this.isPicked = true;
				this.editableMember = this.familly.find(
					item => item.id === this.memberId
				);
			} else this.isPicked = false;
		}
	},
	computed: {
		...mapGetters({
			member: "member"
		}),
		isFounder() {
			return this.member.user_id === 48;
		}
	},
	methods: {
		async submit() {
			let result = await axios.post("auth/member/add/deceased", {
				first_name: this.first_name,
				middle_name: this.middle_name,
				last_name: this.last_name,
				email: this.email,
				day_of_birth: this.day_of_birth,
				day_of_death: this.day_of_death
			});
		},
		save(date) {
			this.$refs.menu.save(date);
		},
		savedeath(death) {
			this.$refs.menu2.save(death);
			// this.$refs.menu.savedeath(death);
		}
	}
};
</script>


