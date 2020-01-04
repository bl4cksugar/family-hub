<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" max-width="600px">
			<template v-slot:activator="{ on }">
				<v-btn color="green" dark v-on="on">ADD MEMBER</v-btn>
			</template>
			<v-card>
				<v-card-title>
					<span class="headline">Member Inforation</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12" sm="6" md="4">
								<v-text-field v-model="first_name" label="First Name*" required></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field v-model="middle_name" label="Middle Name" required></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field v-model="last_name" label="Last Name*" required></v-text-field>
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
											v-model="date"
											label="Date of birth"
											readonly
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										ref="picker"
										v-model="date"
										:max="death === null ? new Date().toISOString().substr(0, 10) : death"
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
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<v-text-field
											color="grey"
											background-color="rgba(255, 255, 255, 0.9)"
											v-model="death"
											label="Date of death"
											readonly
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										ref="picker"
										v-model="death"
										:max="new Date().toISOString().substr(0, 10)"
										:min="date"
										@change="savedeath"
									></v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="12">
								<v-text-field
									hint="If you want to invite this member to tree, you have to add a email"
									persistent-hint
									v-model="email"
									label="Email"
								></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" v-if="!isFounder">
								<v-checkbox v-model="isChild" label="Mark as your child"></v-checkbox>
							</v-col>
							<v-col cols="12" sm="6" v-if="!isFounder">
								<v-checkbox v-model="isPartner" label="Mark as partner"></v-checkbox>
							</v-col>
							<v-col cols="12" sm="6" v-if="isFounder">
								<v-select
									v-model="parentId"
									:items="familly"
									:disabled="disableParent"
									item-text="name"
									hint="Parent of member, which you want to add"
									persistent-hint
									clearable
									item-value="relation_id"
									label="Parent*"
									required
								></v-select>
							</v-col>
							<v-col cols="12" sm="6" v-if="isFounder">
								<v-select
									v-model="partnerId"
									:items="familly"
									:disabled="disablePartner"
									clearable
									hint="Partner of member, which you want to add"
									persistent-hint
									item-text="name"
									item-value="relation_id"
									label="Partner*"
									required
								></v-select>
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
		first_name: null,
		middle_name: null,
		last_name: null,
		email: null,
		date: null,
		death: null,
		dialog: false,
		isChild: true,
		isPartner: false,
		disableParent: false,
		disablePartner: false,
		parentId: null,
		partnerId: null,
		menu: null,
		menu2: null
	}),
	watch: {
		isChild() {
			this.isPartner = !this.isChild;
		},
		isPartner() {
			this.isChild = !this.isPartner;
		},
		parentId(newVal) {
			if (newVal === undefined) this.parentId = null;
			if (newVal !== null) this.disablePartner = true;
			else this.disablePartner = false;
		},
		partnerId(newVal) {
			if (newVal === undefined) this.partnerId = null;
			if (newVal !== null) this.disableParent = true;
			else this.disableParent = false;
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
			let parentId = null;
			let partnerId = null;
			if (!this.isFounder) {
				if (this.isPartner) {
					let parentRelation = this.familly.find(item => {
						console.log(item.id, this.member.id);
						return item.id === this.member.id;
					});
					parentId = parentRelation.relation_id;
				}
			} else {
				if (this.parentId !== null) parentId = this.parentId;
			}
			if (this.day_of_death !== null) {
				console.log("dupcia");
				let result = await axios.post("auth/member/add/deceased", {
					first_name: this.first_name,
					middle_name: this.middle_name,
					last_name: this.last_name,
					email: this.email,
					day_of_birth: this.date,
					day_of_death: this.death,
					parent_id: parentId,
					partner_id: partnerId
				});
			} else {
				let result = await axios.post("auth/member/add", {
					first_name: this.first_name,
					middle_name: this.middle_name,
					last_name: this.last_name,
					email: this.email,
					day_of_birth: this.date,
					day_of_death: this.death,
					parent_id: parentId,
					partner_id: partnerId
				});
			}
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


