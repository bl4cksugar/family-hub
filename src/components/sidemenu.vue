<template>
	<v-col class="sidemenu">
		<div v-if="isAdmin">
			<v-row class="title text-center">ADMINISTRATION PANEL</v-row>
			<v-row>
				<v-btn to="/admin/users" rounded>USERS</v-btn>
			</v-row>
			<v-row>
				<v-btn to="/admin/families" rounded>FAMILIES</v-btn>
			</v-row>
			<v-row>
				<v-btn to="/admin/news" rounded>NEWS</v-btn>
			</v-row>
			<v-row>
				<v-btn to="/admin/systemlogs" rounded>SYSTEM LOGS</v-btn>
			</v-row>
			<v-row>
				<v-btn to="/admin/affinities" rounded>AFFINITIES</v-btn>
			</v-row>
		</div>
		<div v-if="!isAdmin && isLogged">
			<v-row class="title text-center">USER PANEL</v-row>
			<v-row>
				<v-btn :to="'./profile/'+ entity.id" rounded>PROFILE</v-btn>
			</v-row>
			<v-row>
				<v-btn to="/tree" rounded>TREE</v-btn>
			</v-row>
			<v-row>
				<v-btn to="/gallery" rounded>GALLERY</v-btn>
			</v-row>
			<v-row>
				<v-btn to="/news" rounded>NEWS</v-btn>
			</v-row>
		</div>
		<v-row>
			<v-btn
				@click="signout"
				rounded
				min-width="100px !important"
				max-width="200px !important"
				color="red"
			>SIGN OUT</v-btn>
		</v-row>
	</v-col>
</template>


<script>
import { mapGetters } from "vuex";
import store from "../store";
import axios from "axios";

export default {
	components: {},
	computed: {
		...mapGetters({
			entity: "user"
		}),
		isAdmin() {
			return this.entity.type === "admin" ? true : false;
		},
		isLogged() {
			return this.entity ? true : false;
		}
	},
	methods: {
		signout() {
			let result = axios.get("addresshere");
			if (result) {
				store.dispatch("deleteSession");
				this.$router.push("/");
			}
		}
	}
};
</script>

<style scoped>
.title {
	color: white;
	margin-top: 20px;
	margin-bottom: 20px;
}

.sidemenu {
	margin-top: 50px;
	background-color: #3f3f41;
	min-height: 90vh;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
}

.row {
	margin: 20px 0 0 0;
	justify-content: center;
}

.v-btn {
	width: 20vw;
	min-width: 150px !important;
	max-width: 200px !important;
}
</style>