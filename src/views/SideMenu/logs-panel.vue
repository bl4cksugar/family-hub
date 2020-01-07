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
					:items="logs"
					:search="search"
					class="elevation-1"
					:loading="loading"
					loading-text="Loading... Please wait"
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
					value: "id"
				},

				{ text: "message", value: "message" },
				{ text: "time", value: "updated_at" }
			],
			logs: [],
			loading: false
		};
	},
	async created() {
		this.loading = true;
		let result = await axios.get("/auth/admin/logs/all");
		if (result) {
			this.logs = result.data.data;
		}
		console.log(result);
		this.loading = false;
	}
};
</script>

<style scoped>
</style