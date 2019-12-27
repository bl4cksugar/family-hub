<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" persistent max-width="600px">
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
								<v-text-field label="Name*" required></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field label="Surname*" required></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<!-- <v-text-field label="Date of birth*" required></v-text-field> -->
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
											label="Birthday date*"
											required
											readonly
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										ref="picker"
										v-model="date"
										:max="new Date().toISOString().substr(0, 10)"
										min="1950-01-01"
										@change="save"
									></v-date-picker>
								</v-menu>

								<!-- <v-text-field label="Date of death"></v-text-field> -->
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
										min="1950-01-01"
										@change="savedeath"
									></v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="12">
								<v-text-field label="Email"></v-text-field>
							</v-col>

							<v-col cols="12" sm="6">
								<v-select :items="['1', '2', '3', '4']" label="Parent ID*" required></v-select>
							</v-col>
						</v-row>
					</v-container>
					<small>*indicates required field</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
					<v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
export default {
	data: () => ({
		dialog: false
	}),
	methods: {
		save(date) {
			this.$refs.menu.save(date);
		},
		savedeath(death) {
			this.$refs.menu.savedeath(death);
		}
	}
};
</script>


