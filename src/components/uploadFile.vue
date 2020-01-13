<template>
	<div class="container">
		<div class="large-12 medium-12 small-12 cell">
			<v-form ref="form" v-model="valid" lazy-validation class="center">
				<v-card-title>
					<span class="headline">Add new photo!</span>
				</v-card-title>
				<v-text-field
					v-model="description"
					:rules="contentRules"
					class="pt-5"
					label="description"
					solo
					required
					name="input-7-4"
					align="left"
				></v-text-field>
				<label>
					File
					<input type="file" @change="onFileChanged" />
				</label>

				<v-btn @click="onUpload" :disable="!valid" rounded>send</v-btn>
				<v-progress-linear v-if="uploadPercentage!==0" :value="uploadPercentage" style="padding:10px"></v-progress-linear>
			</v-form>
		</div>
	</div>
</template>


<script>
import axios from "axios";
export default {
	data: () => ({
		isVisible: true,
		valid: true,
		contentRules: [v => !!v || "Post content is required"],
		selectedFile: null,
		description: "",
		uploadPercentage: 0
	}),
	watch: {
		uploadPercentage(newVal, oldVal) {}
	},
	methods: {
		onFileChanged(event) {
			this.selectedFile = event.target.files[0];
		},
		async onUpload() {
			const formData = new FormData();
			formData.set("description", this.description);
			formData.append(
				"photo_input",
				this.selectedFile,
				this.selectedFile.name
			);
			await axios
				.post("auth/gallery/add", formData, {
					headers: {
						"Content-Type": "multipart/form-data"
					},
					onUploadProgress: function(progressEvent) {
						this.uploadPercentage = parseInt(
							Math.round(
								(progressEvent.loaded / progressEvent.total) *
									100
							)
						);
					}.bind(this)
				})
				.then(err => {
					setTimeout(function() {
						this.uploadPercentage = 0;
					}, 1000);
				});
			this.$emit("refreshGallery");
		}
	}
};
</script>


<style scoped>
.v-form {
	display: grid;
	padding: 15px;
	justify-items: center;
	width: 90%;
}
visiblity-class {
	display: none;
}
.center {
	max-width: 800px;
	display: flex;
	flex-direction: column;
	justify-items: center;
}
</style>
