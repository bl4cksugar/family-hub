<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card>
				<v-data-table :headers="headers" :items="users" :search="search" class="elevation-1">
					<template v-slot:top>
						<v-toolbar flat color="white">
							<v-toolbar-title>Users</v-toolbar-title>
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
													<v-text-field v-model="editedItem.name" label="Name"></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field v-model="editedItem.surname" label="Surname"></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field v-model="editedItem.date" label="Birthday"></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field v-model="editedItem.mail" label="Email"></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-checkbox color="green" v-model="editedItem.boolean" label="IsVerified"></v-checkbox>
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
					<template v-slot:item.boolean="{ item }">
						<v-icon>{{ item.boolean ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline" }}</v-icon>
					</template>
					<template v-slot:item.action="{ item }">
						<v-btn class="mx-2" small depressed fab dark color="green" @click="editItem(item)">
							<v-icon dark small>mdi-pencil</v-icon>
						</v-btn>
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
export default {
	data() {
		return {
			test: true,
			dialog: false,
			search: "",
			headers: [
				{
					text: "ID",
					align: "left",
					sortable: false,
					value: "number"
				},

				{ text: "name", value: "name" },
				{ text: "surname", value: "surname" },
				{ text: "date of birth", value: "date" },
				{ text: "e-mail", value: "mail" },
				{ text: " IsVerified", value: "boolean" },
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
			users: [
				{
					number: "1",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "2",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: false
				},
				{
					number: "3",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "4",
					name: "Joe",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "5",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "6",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "7",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "8",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "9",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				},
				{
					number: "10",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: true
				}
			]
		};
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
			this.editedIndex = this.users.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		deleteItem(item) {
			const index = this.users.indexOf(item);
			confirm("Are you sure you want to delete this item?") &&
				this.users.splice(index, 1);
		},

		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.users[this.editedIndex], this.editedItem);
			} else {
				this.users.push(this.editedItem);
			}
			this.close();
		}
	}
};
</script>

<style scoped>
</style>