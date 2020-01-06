<template>
	<div class="row center">
		<div class="col-md" v-for="post in news" :key="post.id">
			<v-card min-width="344">
				<!-- <span
					v-if="post.author == onlineUser.userName"
					class="close"
					@click="deletePost(post.id)"
					title="Close PopUp"
					style="color:white"
				>&times;</span>-->

				<v-list-item>
					<v-list-item-content>
						<v-list-item-title style="display:flex; justify-content:space-between">
							<span class="headline">{{post.title}}</span>
							<div>
								<v-btn icon @click="editPosts">
									<v-icon color="green">mdi-pencil</v-icon>
								</v-btn>
								<v-btn icon @click="deletePosts(post.id)">
									<v-icon color="red">mdi-delete</v-icon>
								</v-btn>
							</div>
						</v-list-item-title>
						<v-list-item-subtitle>
							<p>
								by
								<b>{{post.author_id}}</b>
							</p>
							<v-divider clas="text--primary" style="margin:0;" />
						</v-list-item-subtitle>
						<p>{{post.description}}</p>
					</v-list-item-content>
				</v-list-item>

				<v-card-text>
					Created at
					<b>{{post.created_at}}</b>
				</v-card-text>
			</v-card>
		</div>
	</div>
</template>

<script>
import CreatePost from "./create-post";
import axios from "axios";

export default {
	props: ["userProfile", "currentPosts", "refreshPost"],
	data: () => ({
		news: [],
		onlineUser: {},
		loading: false,
		loader: null,
		lastPost: 0
	}),
	async created() {
		await this.getPosts();
	},
	watch: {
		// loader() {
		// 	const l = this.loader;
		// 	this[l] = !this[l];
		// 	setTimeout(() => (this[l] = false), 1000);
		// 	this.loader = null;
		// },
		async refreshPost(after, before) {
			await this.getPosts();
		}
	},
	methods: {
		async getPosts() {
			let result = await axios.get("auth/news/all");
			if (result) {
				this.news = result.data.data;
			}
		},
		async editPosts() {
			let result = await axios.put("auth/news/update");
		},
		async deletePosts(newsId) {
			console.log(newsId);
			if (confirm("Do you really want to delete?")) {
				let result = await axios.delete("auth/news/delete", {
					id: newsId
				});
				console.log(result);
				this.getPosts();
			}
		}
	},
	// refreshPosts: function() {
	// 	var that = this;
	// 	axios
	// 		.get(
	// 			"posts/RefreshPosts" +
	// 				"?lastPost=" +
	// 				that.lastPost +
	// 				"&userId=" +
	// 				that.userProfile.id +
	// 				"&currentPosts=" +
	// 				that.currentPosts
	// 		)
	// 		.then(function(data) {
	// 			console.log("OUTPUT:", data.data.payload[0]);
	// 			that.posts = data.data.payload;
	// 		});
	// },
	// addReaction: async function(id) {
	// 	var that = this;
	// 	await axios
	// 		.post("posts/AddReaction/" + id, {
	// 			PostId: id,
	// 			UserId: that.onlineUser.id
	// 		})
	// 		.then(async function(data) {
	// 			await that.refreshPosts();
	// 		});
	// },
	// deletePost: function(id) {
	// 	var that = this;
	// 	console.log(id);
	// 	axios.delete("posts/deletepost/" + id).then(function(data) {
	// 		that.refreshPosts();
	// 	});
	// },
	// morePosts: function() {
	// 	var that = this;
	// 	that.loader = "loading";
	// 	axios
	// 		.get(
	// 			"posts/" +
	// 				that.currentPosts +
	// 				"?lastPost=" +
	// 				that.lastPost +
	// 				"&userId=" +
	// 				that.userProfile.id
	// 		)
	// 		.then(function(data) {
	// 			that.posts.push.apply(that.posts, data.data.payload);
	// 			that.lastPost = that.posts[that.posts.length - 1].id;
	// 		});
	// }

	components: {
		"create-post": CreatePost
	}
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
