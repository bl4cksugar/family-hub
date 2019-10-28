<template>
	<v-app>
		<nav-bar></nav-bar>
		<v-content>
			<router-view></router-view>
		</v-content>
		<b-footer></b-footer>
	</v-app>
</template>

<script>
import NavBar from "./components/navbar";
import BFooter from "./components/footer";
export default {
	name: "App",
	data() {
		return {};
	},
	components: {
		NavBar,
		BFooter
	}
};
</script>

<style>
</style>