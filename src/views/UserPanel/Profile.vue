<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<v-card>
				<v-card-text>
					<v-avatar color="indigo" size="62">
						<img :src="member.avatar" />
					</v-avatar>
					<edit-profile :member="member"></edit-profile>
				</v-card-text>
				<div>{{`${member.first_name} ${member.middle_name} ${member.last_name}`}}</div>
				<div>{{member.day_of_birth}}</div>
				<div>{{member.day_of_death}}</div>
				<div>{{user.email}}</div>
				<div>{{user.prefix}}</div>
			</v-card>
		</v-col>
	</v-container>
</template>

<script>
import { mapGetters } from "vuex";
import EditProfile from "../../components/edit-profile";
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
		EditProfile
	}
};
</script>