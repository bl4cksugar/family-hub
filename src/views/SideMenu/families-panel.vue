<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card>
				<v-data-table
					:headers="headers"
					:items="families"
					:search="search"
					class="elevation-1"
					:loading="loading"
					loading-text="Loading... Please wait"
				>
					<template v-slot:top>
						<v-toolbar flat color="white">
							<v-toolbar-title>Families</v-toolbar-title>

							<v-divider class="mx-4" inset vertical></v-divider>

							<v-spacer></v-spacer>
							<v-text-field
								v-model="search"
								append-icon="fas fa-search"
								label="Search"
								single-line
								hide-details
							></v-text-field>

							<v-dialog v-model="dialog" max-width="500px">
								<v-card>
									<v-card-title>
										<span class="headline">{{formTitle}}</span>
									</v-card-title>

									<v-card-text>
										<v-container>
											<v-row>
												<v-col cols="12" sm="6" md="4">
													<v-text-field v-model="editedItem.founder_id" label="Founder Id"></v-text-field>
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
						</v-toolbar>
						<v-alert v-if="alert" :type="alert.type">{{alert.content}}</v-alert>
					</template>

					<template v-slot:item.action="{ item }">
						<v-btn class="mx-2" small depressed fab dark color="green" @click="editItem(item)">
							<v-icon dark small>mdi-pencil</v-icon>
						</v-btn>
						<!-- <v-btn class="mx-2" small depressed fab dark color="red" @click="deleteItem(item)">
							<v-icon dark small>mdi-delete</v-icon>
						</v-btn>-->
					</template>
					<template v-slot:no-data>NO DATA</template>
				</v-data-table>
			</v-card>
		</v-col>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			test: true,
			dialog: false,
			alert: null,
			search: "",
			headers: [
				{
					text: "ID",
					align: "left",
					sortable: false,
					value: "id"
				},

				{ text: "name", value: "name" },
				{ text: " founder", value: "founder_id" },
				{ text: " Actions", value: "action" }
			],
			editedIndex: -1,
			editedItem: {
				name: "",
				surname: 0,
				date: 0,
				mail: 0,
				boolean: false
			},
			defaultItem: {
				name: "",
				surname: 0,
				date: 0,
				mail: 0,
				boolean: false
			},

			families: [],
			loading: false
		};
	},
	async created() {
		let result = await axios.get("/auth/family/all");

		if (result) {
			this.loading = true;
			this.families = result.data.data;
		}
		this.loading = false;
	},
	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "New Item" : "Edit Item";
		}
	},
	watch: {
		dialog(val) {
			val || this.close();
		}
	},
	methods: {
		editItem(item) {
			this.editedIndex = this.families.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		async deleteItem(item) {
			const index = this.families.indexOf(item);
			confirm("Are you sure you want to delete this item?") &&
				this.families.splice(index, 1);
			let result = await axios.post("/auth/family/deactive", {
				id: item.id
			});
		},

		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},

		async save() {
			if (this.editedIndex > -1) {
				Object.assign(this.families[this.editedIndex], this.editedItem);
				let result = await axios
					.put("auth/family/update", {
						id: this.editedItem.id,
						name: this.editedItem.name,
						founder_id: this.editedItem.founder_id
					})
					.catch(error => {
						this.alert = {
							state: true,
							type: "error",
							content:
								"This founder ID is already used in other family!"
						};
					});
			} else {
				this.families.push(this.editedItem);
			}
			this.close();
		}
	}
};
</script>

<style scoped>
</style>