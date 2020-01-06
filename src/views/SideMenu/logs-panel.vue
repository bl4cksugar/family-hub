<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card>
				<v-card-title>
					System Logs
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
import axios from "axios";
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

				{ text: "content", value: "content" }
			],
			users: []
		};
	}
};
</script>

<style scoped>
</style