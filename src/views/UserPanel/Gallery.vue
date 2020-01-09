
<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<div class="centring-posts">
				<uploadFile @refreshGallery="refreshGallery"></uploadFile>
				<v-divider clas="text--primary" style="margin:0; width:90%" />
				<picture-list :userProfile="user" :currentPicture="pictureFilter" :refreshPicture="refresh"></picture-list>
			</div>
		</v-col>
	</v-container>
</template>

<script>
import axios from "axios";
import UploadFile from "../../components/uploadFile";
import picture from "../../components/picture";

export default {
	data: () => ({
		user: {
			id: ""
		},
		refresh: false,
		pictureFilter: "getsomepicture"
	}),
	created() {},
	methods: {
		refreshGallery() {
			this.refresh = true;
		}
	},
	components: {
		UploadFile,
		"picture-list": picture
	}
};
</script>

<style scoped>
.centring-posts {
	display: grid;
	justify-content: center;
	background-color: rgba(238, 238, 238, 0.75);
}
</style>
