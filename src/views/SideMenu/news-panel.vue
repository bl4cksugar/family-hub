<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card>
				<v-data-table
					:headers="headers"
					:items="news"
					:search="search"
					class="elevation-1"
					:loading="loading"
					loading-text="Loading... Please wait"
				>
					<template v-slot:top>
						<v-toolbar flat color="white">
							<v-toolbar-title>News</v-toolbar-title>
							<v-divider class="mx-4" inset vertical></v-divider>
							<v-col cols="12" sm="6" md="3">
								<v-text-field v-model="prefix" placeholder="Prefix" clearable></v-text-field>
							</v-col>
							<v-btn depressed text icon @click="sendPrefix">
								<v-icon>mdi-send</v-icon>
							</v-btn>
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
													<v-text-field v-model="editedItem.title" label="Title"></v-text-field>
													<v-text-field v-model="editedItem.description" label="Description"></v-text-field>
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
					</template>
					<template v-slot:item.active="{ item }">
						<v-icon>{{ item.active ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline" }}</v-icon>
					</template>
					<template v-slot:item.action="{ item }">
						<!-- <v-btn class="mx-2" small depressed fab dark color="green" @click="editItem(item)">
							<v-icon dark small>mdi-pencil</v-icon>
						</v-btn>-->
						<v-btn class="mx-2" small depressed fab dark color="red" @click="deleteItem(item)">
							<v-icon dark small>mdi-delete</v-icon>
						</v-btn>
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
			prefix: "",
			search: "",
			headers: [
				{
					text: "ID",
					align: "left",
					sortable: false,
					value: "id"
				},

				{ text: "tilte", value: "title" },
				{ text: "description", value: "description" },
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

			news: [],
			loading: false
		};
	},

	async created() {},
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
		async sendPrefix() {
			// this.loading = true;
			let result = await axios
				.post("auth/admin/news/all?prefix= " + this.prefix)
				.catch(error => {
					this.$toasted.error(error.data.message, {
						theme: "toasted-primary",
						position: "top-right",
						fullWidth: true,
						fitToScreen: false,
						duration: 3000
					});
					this.news = [];
				});
			if (result) {
				this.news = result.data.data;
			}
			// this.loading = false;
		},

		async editItem(item) {
			this.editedIndex = this.news.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;

			let result = await axios.post(
				"/auth/admin/news/edit?id=" + item.id + "&prefix=" + this.prefix
			);
		},

		async deleteItem(item) {
			const index = this.news.indexOf(item);
			confirm("Are you sure you want to delete this item?") &&
				this.news.splice(index, 1);

			let result = await axios.delete(
				"/auth/admin/news/delete?id=" +
					item.id +
					"&prefix=" +
					this.prefix
			);
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
				Object.assign(this.news[this.editedIndex], this.editedItem);
				let result = await axios.put(
					"/auth/news/update",
					this.editedItem
				);
			} else {
				this.news.push(this.editedItem);
			}
			this.close();
		}
	}
};
</script>

<style scoped>
</style>