<template>
	<v-container fluid fill-height class="box">
		<v-row align="center" justify="center">
			<v-col md="6" class="d-flex align-center justify-center px-0 bg">
				<div class="background-img">
					<v-img src="../assets/logofinal.png" class="img" max-width="200px" max-height="400px"></v-img>
				</div>
			</v-col>
			<registration></registration>
		</v-row>
	</v-container>
</template>

<script>
import registration from "../components/registration";

export default {
	components: {
		registration
	}
};
</script>

<style>
.box {
	min-height: 98vh;
	background-image: linear-gradient(rgb(242, 171, 91), rgb(91, 136, 85));
}
.background-img {
	background-color: rgba(255, 255, 255, 0.7);
	max-height: 300px;
	border-radius: 50%;
	padding: 50px;
	display: inline-block;
	float: none;
}

.title {
	font-weight: bold;
}

.bg {
	background: url("../assets/bg1.png");
	background-size: 140vh;
	min-height: 95vh;
}

.btn {
	margin-bottom: 50px;
}

.title {
	color: white;
}
</style>
