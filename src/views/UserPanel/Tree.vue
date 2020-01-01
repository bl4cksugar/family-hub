<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<new-member-form></new-member-form>
			<div id="tree"></div>
		</v-col>
	</v-container>
</template>

<script>
import NewMemberForm from "../../components/newmemberform";
import axios from "axios";
export default {
	components: {},

	data() {
		return {
			familly: [
				// {
				// 	id: 1,
				// 	partnerId: 2,
				// 	name: "Jan Kowalski",
				// 	birthDay: "12-12-2019",
				// 	deathDay: "13-12-2019",
				// 	img: "https://balkangraph.com/js/img/f1.png"
				// },
				// {
				// 	id: 2,
				// 	partnerId: 1,
				// 	name: "Barbara Kowalska",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f2.png"
				// },
				// {
				// 	id: 3,
				// 	partnerId: 4,
				// 	pid: 2,
				// 	name: "Janusz Kowalski",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f3.png"
				// },
				// {
				// 	id: 4,
				// 	partnerId: 3,
				// 	name: "Grażyna Kowalska",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f5.png"
				// },
				// {
				// 	id: 5,
				// 	pid: 2,
				// 	partnerId: null,
				// 	name: "Krzysztof Kowalski",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f6.png"
				// },
				// {
				// 	id: 7,
				// 	pid: 4,
				// 	partnerId: 8,
				// 	name: "Seba Kowalski",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f8.png"
				// },
				// {
				// 	id: 8,
				// 	partnerId: 7,
				// 	name: "Karyna Kowalska",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f9.png"
				// },
				// {
				// 	id: 9,
				// 	pid: 4,
				// 	name: "Łysy Kowalski",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f10.png"
				// },
				// {
				// 	id: 10,
				// 	pid: 4,
				// 	name: "Gruby Kowalski",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f11.png"
				// },
				// {
				// 	id: 12,
				// 	pid: 7,
				// 	partnerId: 13,
				// 	name: "Brajan Kowalski",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f13.png"
				// },
				// {
				// 	id: 13,
				// 	partnerId: 12,
				// 	name: "Dżesika Kowalski",
				// 	birthDay: "12-12-2019",
				// 	img: "https://balkangraph.com/js/img/f14.png"
				// }
			],
			familyGroupTag: {
				group: true,
				template: "group_grey",
				groupState: OrgChart.EXPAND
			},
			tags: {}
		};
	},
	async created() {
		// let pupa2 = await axios.get("auth/tree");
		// console.log(pupa2);
		// let pupa = await axios.get("auth/relation/edit", {
		// 	id: "2"
		// });
		// console.log(pupa);
		// let dupa = await axios.put("auth/relation/update", {
		// 	id: "1",
		// 	partner_1_id: "48",
		// 	partner_2_id: "141",
		// 	parent_id: ""
		// });
		// console.log(dupa);
		// let result = await axios.get("auth/relation/all");
		// console.log(result);
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
	},
	components: {
		NewMemberForm
	}
};
</script>

<style scoped>
</style>