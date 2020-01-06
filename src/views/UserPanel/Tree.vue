<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<div class="row">
				<new-member-form :familly="familly"></new-member-form>
				<edit-member-form :familly="familly"></edit-member-form>
				<delete-tree></delete-tree>
			</div>
			<div id="tree"></div>
		</v-col>
	</v-container>
</template>

<script>
import NewMemberForm from "../../components/newmemberform";
import EditMemberForm from "../../components/editmemberform";
import DeleteTree from "../../components/deleteTree";
import axios from "axios";
export default {
	components: {
		NewMemberForm,
		EditMemberForm,
		DeleteTree
	},
	data() {
		return {
			familly: [],
			familyGroupTag: {
				group: true,
				template: "group_grey",
				groupState: OrgChart.EXPAND
			},
			tags: {}
		};
	},
	async created() {
		let pupa2 = await axios.get("auth/tree");
		console.log(pupa2);
		let result = await axios.get("auth/relation/all");
		console.log(result);
		// let result3 = await axios.get("auth/member/info", { id: 16 });
		// console.log(result3);
		// let pupa = await axios.post("auth/relation/add", {
		// 	partner_1_id: "148",
		// 	partner_2_id: "",
		// 	parent_id: "1"
		// });
		// console.log(pupa);
		// let dupa = await axios.put("auth/relation/update", {
		// 	id: "2",
		// 	partner_1_id: "116",
		// 	partner_2_id: "",
		// 	parent_id: "1"
		// });
		// console.log(dupa);
	},
	methods: {
		newGroup() {
			const tagNumber = Object.keys(this.tags).length + 1;
			this.tags[`marriage${tagNumber}`] = this.familyGroupTag;
			return `marriage${tagNumber}`;
		},
		groupRender() {
			this.familly.forEach(item => {
				if (item.partnerId && !item.tags) {
					const group = this.newGroup();
					item.tags = [group];
					const partner = this.familly.find(
						member => member.id === item.partnerId
					);
					partner.tags = [group];
				}
			});
		}
	},
	async mounted() {
		let result = await axios.get("/auth/tree");
		this.familly = result.data.data;
		this.groupRender();

		OrgChart.templates.diva.field_2 =
			'<text class="field_2" style="font-size: 12px;" fill="#ffffff" x="10" y="100" text-anchor="middle">{val}</text>';
		OrgChart.templates.diva.field_3 =
			'<text class="field_3" style="font-size: 14px;" fill="#ffffff" x="100" y="160" text-anchor="middle">{val}</text>';

		var chart = new OrgChart(document.getElementById("tree"), {
			template: "diva",
			nodeMouseClick: OrgChart.action.details,
			nodeMenu: {
				details: { text: "Details" },
				edit: { text: "Edit" },
				remove: { text: "Remove" }
			},
			nodeBinding: {
				field_0: "name",
				field_1: "birthDay",
				field_2: "id",
				field_3: "deathDay",
				img_0: "img"
			},
			tags: this.tags,
			nodes: this.familly
		});
		chart.editUI.on("field", function(sender, args) {
			if (args.name.startsWith("marriage")) {
				return false;
			}
			if (args.name == "pid") {
				return true;
			}
		});
	}
};
</script>

<style scoped>
</style>