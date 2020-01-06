<template>
	<div class="row center">
		<div class="col-md" v-for="picture in gallery" :key="picture.id">
			<v-card min-width="344">
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title style="display:flex; justify-content:space-between">
							<span class="headline">{{picture.filename}}</span>
							<div>
								<v-btn icon @click="deletePicture(picture.id)">
									<v-icon color="red">mdi-delete</v-icon>
								</v-btn>
							</div>
						</v-list-item-title>
						<v-list-item-subtitle>
							<p>
								by
								<b>{{picture.author_id}}</b>
							</p>
							<v-divider clas="text--primary" style="margin:0;" />
						</v-list-item-subtitle>
						<p>{{picture.description}}</p>
					</v-list-item-content>
				</v-list-item>
			</v-card>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	props: ["refreshPicture"],
	data: () => ({
		gallery: [],
		loading: false,
		loader: null
	}),
	watch: {
		async refreshPicture(after, before) {
			console.log("dupa");
			await this.getPicture();
		}
	},
	async created() {
		await this.getPicture();
	},
	methods: {
		async getPicture() {
			let result = await axios.get("auth/gallery/all");
			if (result) {
				this.gallery = result.data.data;
			}
		},

		async deletePicture(pictureId) {
			console.log(pictureId);
			if (confirm("Do you really want to delete?")) {
				let result = await axios.delete("auth/gallery/delete", {
					id: pictureId
				});
				console.log(result);
				this.getPicture();
			}
		}
	},

	components: {}
};
</script>

<style scoped>
.title {
	z-index: 2;
}
.v-card {
	margin: 10px !important;
}

.text-wrapper {
	white-space: nowrap;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	border-style: solid;
	border-width: 1px;
}

.btn-div {
	width: 100%;
	padding: 0 25px 0 25px;
}

.center {
	justify-content: center;
	max-width: 800px;
}

.center a {
	color: white;
	text-decoration: none;
}

.center a:hover {
	color: #12d483;
	transition-duration: 0.5s;
}

.close {
	color: #12d483 !important;
}
</style>
