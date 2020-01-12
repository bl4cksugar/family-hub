<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" max-width="600px">
			<template v-slot:activator="{ on }">
				<v-btn color="red" dark v-on="on" @click="deleteTree">DELETE TREE</v-btn>
			</template>
		</v-dialog>
	</v-row>
</template>

// <script>
export default {
	data() {
		return {
			dialog: false
		};
	}
};

// async deleteTree() {

// 		if (confirm("Do you really want to delete?")) {
// 			let result = await axios.delete("auth/relation/delete/all");
// 		}
// 	}
</script>