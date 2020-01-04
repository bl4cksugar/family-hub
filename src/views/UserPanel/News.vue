<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<div class="centring-posts">
				<v-card-title>Create your super duper new post!</v-card-title>
				<create-post @newsCreated="refreshPost"></create-post>
				<v-divider clas="text--primary" style="margin:0; width:90%" />
				<posts-list :userProfile="user" :currentPosts="postsFilter" :refreshPost="refresh"></posts-list>
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
	background-color: rgba(238, 238, 238, 0.75);
	margin-top: 65px;
	margin-bottom: 15px;
}
</style>
