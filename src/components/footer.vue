<template>
	<v-footer padless fixed class="foot">
		<v-col class="text-center" cols="12">
			{{ new Date().getFullYear() }} —
			<strong>Projektowanie i programowanie systemów internetowych II</strong>
		</v-col>
	</v-footer>
</template>
<script>
export default {
	name: "b-footer"
};
</script>
<style scoped>
.foot {
	background-image: linear-gradient(
		to right,
		rgb(225, 225, 225),
		rgb(255, 255, 255)
	) !important;
}
</style>