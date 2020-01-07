<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" max-width="600px">
			<template v-slot:activator="{ on }">
				<v-btn color="red" dark v-on="on">DELETE TREE</v-btn>
			</template>
		</v-dialog>
	</v-row>
</template>

// <script>
// export default {

// },

// 	async deleteTree() {
// 			console.log();
// 			if (confirm("Do you really want to delete?")) {
// 				let result = await axios.(
// 					"auth/news/delete?id=" + newsId
// 				);
// 				console.log(result);
// 				this.getPosts();
// 			}
// 		}
//
</script>