<template>
	<v-app>
		<nav-bar :isLoginPage="isLoginPage"></nav-bar>
		<v-container fluid class="pa-0">
			<div class="row">
				<div v-if="!isLoginPage" class="col-xs-12 col-sm-4 px-0">
					<sidemenu></sidemenu>
				</div>
				<div class="col-xs-12 px-0" :class="appStyle">
					<router-view @isLoginPage="changePage"></router-view>
				</div>
			</div>
		</v-container>
		<b-footer></b-footer>
	</v-app>
</template>

<script>
import NavBar from "./components/navbar";
import BFooter from "./components/footer";
import sidemenu from "./components/sidemenu";
import { METHODS } from "http";
export default {
	name: "App",
	data() {
		return {
			isLoginPage: false
		};
	},
	components: {
		NavBar,
		BFooter,
		sidemenu
	},
	computed: {
		appStyle() {
			return this.isLoginPage ? "col-sm-12" : "col-sm-8";
		}
	},

	methods: {
		changePage(state) {
			this.isLoginPage = state;
		}
	}
};
</script>

<style>
</style>