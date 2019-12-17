<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<div class="centring-posts">
				<create-post @postCreated="refreshPosts"></create-post>
				<posts-list :userProfile="user" :currentPosts="postsFilter" :refreshPost="refreshPost"></posts-list>
			</div>
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
		refreshPost: 0,
		postsFilter: "getsomeposts"
	}),
	created: function() {
		var that = this;
		that.user = $cookies.get("IsLoggedCookie");
	},
	methods: {
		refreshPosts() {
			var that = this;
			that.refreshPost++;
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
