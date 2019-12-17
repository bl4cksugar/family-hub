<template>
	<v-form ref="form" v-model="valid" lazy-validation class="center">
		<v-textarea
			v-model="content"
			:rules="contentRules"
			label="What happend? Type your post"
			solo
			required
			name="input-7-4"
		></v-textarea>

		<v-btn @click="submit" :disable="!valid" round>send</v-btn>
	</v-form>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		isVisible: true,
		valid: true,
		content: "",
		contentRules: [v => !!v || "Post content is required"],
		UserId: "",
		UserName: "",
		AvatarUrl: ""
	}),
	methods: {
		submit() {
			var that = this;

			if (this.$refs.form.validate()) {
				that.UserId = $cookies.get("IsLoggedCookie").id;
				that.UserName = $cookies.get("IsLoggedCookie").userName;
				that.AvatarUrl = $cookies.get("IsLoggedCookie").avatarUrl;
				axios
					.post("posts/createpost", {
						UserId: this.UserId,
						UserName: this.UserName,
						AvatarUrl: this.AvatarUrl,
						content: this.content
					})
					.then(function(response) {
						console.log(response);
						that.$emit("postCreated");
					});
			}
		},
		changeVisiblity() {
			if (this.isVisible) this.isVisible = false;
			else this.isVisible = true;
		},
		photoSet(fileUrl) {
			console.log(fileUrl);
			this.ImgUrl = fileUrl;
		}
	},
	components: {}
};
</script>

<style scoped>
.v-form,
.v-textarea {
	width: 100%;
	background: none;
	padding-top: 40px;
}
.v-form {
	padding-bottom: 20px;
}
visiblity-class {
	display: none;
}
.center {
	max-width: 800px;
	display: grid;
	justify-items: center;
}
</style>
