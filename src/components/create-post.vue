<template>
	<v-form ref="form" v-model="valid" lazy-validation class="center">
		<v-text-field
			v-model="title"
			:rules="titleRules"
			class="pt-5"
			label="Title"
			solo
			required
			name="input-7-4"
			align="left"
		></v-text-field>

		<v-textarea
			v-model="description"
			:rules="contentRules"
			label="What happend? Type your post"
			solo
			required
			name="input-7-4"
		></v-textarea>

		<v-btn @click="submit" :disable="!valid" rounded>send</v-btn>
	</v-form>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		isVisible: true,
		valid: true,
		title: "",
		description: "",
		titleRules: [t => !!t || "Title is required"],
		contentRules: [v => !!v || "Post content is required"]
	}),
	methods: {
		async submit() {
			if (this.$refs.form.validate()) {
				let result = await axios.post("auth/news/add", {
					title: this.title,
					description: this.description
				});
				this.$emit("newsCreated");

				let toast = this.$toasted.success("Your post was created!", {
					theme: "toasted-primary",
					position: "top-right",
					fullWidth: true,
					fitToScreen: false,
					duration: 1000
				});
			}
		},
		changeVisiblity() {
			if (this.isVisible) this.isVisible = false;
			else this.isVisible = true;
		}
	},
	components: {}
};
</script>

<style scoped>
.v-form {
	width: 90%;
	background: none;
}
.v-form {
	padding-bottom: 20px;
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
