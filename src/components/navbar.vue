<template>
	<v-app-bar
		fixed
		scroll-off-screen
		style="background-image:linear-gradient(to right,rgb(225,225,225),rgb(255,255,255));"
	>
		<v-toolbar-title class="headline text-uppercase">
			<span>Family HUB</span>
			<span class="font-weight-light">grupa C</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<login></login>
	</v-app-bar>
</template>
<script>
import login from "./login";
export default {
	name: "navbar",
	components: {
		login: login
	}
};
</script>