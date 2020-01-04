<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card style="background-color: rgba(238, 238, 238, 0.75);">
				<v-card-text style="justify-content:start;align-items:center; display:flex;">
					<v-avatar color="green" size="124">
						<img :src="member.avatar" />
					</v-avatar>
					<h1 style="padding:20px;">{{`${member.first_name} ${member.middle_name} ${member.last_name}`}}</h1>
				</v-card-text>
				<v-divider clas="text--primary" style="margin:0; width:100%" />
				<div>
					<v-card-text>
						<b>Data urodzenia:</b>
						{{member.day_of_birth}}
					</v-card-text>
					<v-card-text>
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
						<reset-password></reset-password>
					</v-card-text>
				</div>
			</v-card>
		</v-col>
	</v-container>
</template>

<script>
import { mapGetters } from "vuex";
import EditProfile from "../../components/edit-profile";
import ResetPassword from "../../components/reset";
export default {
	name: "profile",
	data() {
		return {};
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
	}
};
</script>