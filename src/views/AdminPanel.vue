<template>
	<v-container
		class="box"
		fluid
		fill-height
		style=" background-image:linear-gradient(rgb(242,171,91),rgb(91,136,85));"
	>
		<v-row>
			<div class="sidemenu">
				<v-col sm="12" md="4">
					<div class="headline mb-2 text-left title">ADMINISTRATION PANEL</div>
				</v-col>
			</div>
			<v-col sm="12" md="8"></v-col>
		</v-row>
	</v-container>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
	components: {
		Slide
	}
};
</script>

<style scoped>
.box {
	min-height: 100vh;
}

.sidemenu {
	background-color: #3f3f41;
	min-height: 90vh;
	min-width: 20%;
}

.title {
	color: white;
	margin-top: 20px;
}
</style>