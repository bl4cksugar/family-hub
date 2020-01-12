<template>
	<div class="row center">
		<v-dialog v-model="dialog" max-width="600px">
			<v-card>
				<v-card-title>
					<span class="headline">News Inforation</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12" sm="6" md="4">
								<v-text-field v-model="editableItem.title" label="Title*" required></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field v-model="editableItem.description" label=" Description" required></v-text-field>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
					<v-btn color="blue darken-1" text @click="submit(news)">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<div class="col-md" v-for="post in news" :key="post.id">
			<v-card min-width="344">
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title style="display:flex; justify-content:space-between">
							<span class="headline">{{post.title}}</span>

							<div>
								<v-btn
									v-if="member.user_id ===post.author_id"
									icon
									@click="()=>{
										editedIndex = news.indexOf(post);
										editableItem = Object.assign({}, post);
										dialog = true;}"
									dark
								>
									<v-icon color="green">mdi-pencil</v-icon>
								</v-btn>
								<v-btn v-if="member.user_id ===post.author_id" icon @click="deletePosts(post.id)">
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
import { mapGetters } from "vuex";
import axios from "axios";

export default {
	props: ["userProfile", "currentPosts", "refreshPost"],
	data: () => ({
		news: [],
		dialog: false,
		title: "",
		description: "",
		onlineUser: {},
		loading: false,
		loader: null,
		editedIndex: -1,
		editableItem: { title: "", description: "" },
		lastPost: 0
	}),
	async created() {
		await this.getPosts();
	},
	computed: {
		...mapGetters({
			member: "member"
		})
	},
	watch: {
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
		async deletePosts(newsId) {
			if (confirm("Do you really want to delete?")) {
				let result = await axios.delete(
					"auth/news/delete?id=" + newsId
				);
				this.getPosts();
			}
		},
		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editableItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},
		async submit(news) {
			if (this.editedIndex > -1) {
				Object.assign(this.news[this.editedIndex], this.editableItem);
				let result = await axios.put("/auth/news/update", {
					id: this.editableItem.id,
					title: this.editableItem.title,
					description: this.editableItem.description
				});
			} else {
				this.news.push(this.editableItem);
			}
			this.close();
		}
	},
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
