<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card style="background-color: rgba(238, 238, 238, 0.75);">
				<v-card-text style="justify-content:start;align-items:center; display:flex;">
					<v-avatar color="green" size="124">
						<img :src="'http://family.przedprojekt.com/storage/' + member.avatar " />
					</v-avatar>
					<v-col>
						<h1
							style="padding:20px;"
						>{{`${member.first_name} ${member.middle_name === null ? "": member.middle_name} ${member.last_name}`}}</h1>
						<label style="padding:20px;">
							New avatar? Upload it!
							<input type="file" @change="onFileChanged" />
						</label>

						<v-btn
							:loading="loading3"
							:disabled="loading3"
							color="blue-grey"
							class="ma-2 white--text"
							@click="onUpload"
						>
							Upload
							<v-icon right dark>mdi-cloud-upload</v-icon>
						</v-btn>
					</v-col>
				</v-card-text>
				<v-divider clas="text--primary" style="margin:0; width:100%" />
				<div>
					<v-card-text>
						<b>Data urodzenia:</b>
						{{member.day_of_birth}}
					</v-card-text>
					<v-card-text v-if="member.day_of_death!==null">
						<b>Data śmierci:</b>
						{{member.day_of_death}}
					</v-card-text>
					<v-card-text>
						<b>Email</b>
						:{{user.email}}
					</v-card-text>
					<v-card-text>
						<b>Nazwisko rodowe:</b>
						{{user.prefix}}
					</v-card-text>
					<v-card-text>
						<edit-profile :member="member"></edit-profile>
					</v-card-text>
				</div>
			</v-card>
		</v-col>
	</v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import store from "../../store";
import EditProfile from "../../components/edit-profile";
import ResetPassword from "../../components/reset";
export default {
	name: "profile",
	data() {
		return {
			loader: null,
			loading: false,
			loading2: false,
			loading3: false,
			loading4: false,
			loading5: false
		};
	},

	computed: {
		...mapGetters({
			user: "user",
			member: "member"
		})
	},
	components: {
		EditProfile,
		ResetPassword
	},
	created() {
		if (
			(this.member.first_name === null) &
			(this.member.last_name === null)
		)
			this.$toasted.info(
				"You have to fill your profile fristly, before you will start playing with familly tree",
				{
					theme: "toasted-primary",
					position: "top-right",
					fullWidth: true,
					fitToScreen: false,
					duration: 4000
				}
			);
	},
	watch: {
		loader() {
			const l = this.loader;
			this[l] = !this[l];

			setTimeout(() => (this[l] = false), 3000);

			this.loader = null;
		}
	},
	methods: {
		onFileChanged(event) {
			this.selectedFile = event.target.files[0];
		},
		async onUpload() {
			this.loader = "loading3";
			const formData = new FormData();

			formData.append(
				"avatar",
				this.selectedFile,
				this.selectedFile.name
			);

			let result = await axios.post(
				"auth/member/update/avatar",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data"
					}
				}
			);
			if (result) {
				let memberInfo = await axios.get("/auth/member/info");
				if (memberInfo.status === 200)
					store.dispatch("setMember", memberInfo.data.data[0]);
			}
		}
	}
};
</script>

<style scoped>
.custom-loader {
	animation: loader 1s infinite;
	display: flex;
}
@-moz-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-webkit-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-o-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>