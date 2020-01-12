<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" max-width="600px">
			<template v-slot:activator="{ on }">
				<v-btn color="red" dark v-on="on" @click="deleteTree">DELETE TREE</v-btn>
			</template>
		</v-dialog>
	</v-row>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			dialog: false
		};
	},
	methods: {
		async deleteTree() {
			if (confirm("Do you really want to delete?")) {
				let result = await axios
					.delete("auth/relation/delete/all")
					.catch(error => {
						this.$toasted.error("Something goes wrong", {
							theme: "toasted-primary",
							position: "top-right",
							fullWidth: true,
							fitToScreen: false,
							duration: 3000
						});
					});
				if (result)
					this.$toasted.success("Tree successfully deleted", {
						theme: "toasted-primary",
						position: "top-right",
						fullWidth: true,
						fitToScreen: false,
						duration: 3000
					});
				this.dialog = false;
				this.$emit("treeDeleted");
			}
		}
	}
};
</script>