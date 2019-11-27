<template>
	<v-app>
		<nav-bar></nav-bar>
		<v-container fluid class="pa-0">
			<div class="row">
				<!-- <div v-if="false" class="col-xs-12 col-sm-4 px-0 py-0">
					<sidemenu></sidemenu>
				</div>-->
				<div class="col-xs-12 px-0 py-0" :class="appStyle">
					<router-view></router-view>
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
import { mapGetters } from "vuex";
export default {
	name: "App",
	data() {
		return {
			hasSidebar: true
		};
	},
	components: {
		NavBar,
		BFooter,
		sidemenu
	},
	computed: {
		appStyle() {
			return !this.isLogged ? "col-sm-12" : "col-sm-8";
		},
		...mapGetters({
			isLogged: "user"
		})
	}
};
</script>

<style>
</style>