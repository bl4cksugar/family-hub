<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<div class="centring-posts">
				<create-post @newsCreated="refreshPost"></create-post>
			</div>
			<posts-list :userProfile="user" :currentPosts="postsFilter" :refreshPost="refresh"></posts-list>
		</v-col>
	</v-container>
</template>


<script>
import CreatePost from "../../components/create-post";
import Posts from "../../components/posts";

export default {
	data: () => ({
		user: {
			id: ""
		},
		refresh: false,
		postsFilter: "getsomeposts"
	}),
	created() {},
	methods: {
		refreshPost() {
			this.refresh = true;
		}
	},
	components: {
		"create-post": CreatePost,
		"posts-list": Posts
	}
};
</script>

<style scoped>
.centring-posts {
	display: grid;
	justify-items: center;
	background-color: rgba(238, 238, 238, 0.95);
	margin-top: 65px;
	margin-bottom: 15px;
}
</style>
