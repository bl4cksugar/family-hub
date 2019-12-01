<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card>
				<v-card-title>
					Users
					<v-spacer></v-spacer>
					<v-text-field
						v-model="search"
						append-icon="fas fa-search"
						label="Search"
						single-line
						hide-details
					></v-text-field>
				</v-card-title>
				<v-data-table
					:headers="headers"
					:items="users"
					:search="search"
					:options.sync="options"
					:server-items-length="totalSurnames"
					:loading="loading"
					class="elevation-1"
				></v-data-table>
			</v-card>
		</v-col>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
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
				{ text: " IsVerified", value: "boolean" }
			],
			users: [
				{
					number: "1",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				},
				{
					number: "2",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				},
				{
					number: "3",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				},
				{
					number: "4",
					name: "Joe",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "no"
				},
				{
					number: "5",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "no"
				},
				{
					number: "6",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				},
				{
					number: "7",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				},
				{
					number: "8",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				},
				{
					number: "9",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				},
				{
					number: "10",
					name: "John",
					surname: "Smith",
					date: "12-06-97",
					mail: "jsmith@mail.com",
					boolean: "yes"
				}
			]
		};
	}
};
</script>

<style scoped>
</style>