<template>
	<v-container class="box" fluid fill-height>
		<v-col sm="12">
			<div class="row" style="margin-top:50px">
				<new-member-form :isFounder="isFounder" :familly="familly" @memberCreated="refreshTree"></new-member-form>
				<!-- <edit-member-form :isFounder="isFounder" :familly="familly" v-if="isFounder"></edit-member-form> -->
				<delete-tree v-if="isFounder" @treeDeleted="refreshTree"></delete-tree>
			</div>
			<div id="tree"></div>
		</v-col>
	</v-container>
</template>

<script>
import { mapGetters } from "vuex";
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
			tags: {},
			isFounder: false
		};
	},
	computed: {
		...mapGetters({
			member: "member"
		})
	},
	watch: {
		async familly(newVal) {
			if (newVal !== null)
				newVal.forEach(item => {
					return item.img !== null
						? (item.img = `http://family.przedprojekt.com/storage/${item.img}`)
						: (item.img = "");
				});
		}
	},
	async created() {
		let member = await axios.get("auth/member/info");
		this.isFounder = member.data.founder;
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
		},
		async refreshTree() {
			await this.mountTree();
		},
		async mountTree() {
			let result = await axios.get("/auth/tree");
			if (result.data.data !== null) this.familly = result.data.data;
			else this.familly = [];
			if (this.familly === null || this.familly.length === 0) {
				let result = await axios.post("auth/relation/add", {
					partner_1_id: this.member.user_id,
					partner_2_id: "",
					parent_id: null
				});
				this.mountTree();
				return;
			}
			this.groupRender();

			OrgChart.templates.diva.field_2 =
				'<text class="field_2" style="font-size: 12px;" fill="#ffffff" x="10" y="100" text-anchor="middle">{val}</text>';
			OrgChart.templates.diva.field_3 =
				'<text class="field_3" style="font-size: 14px;" fill="#ffffff" x="100" y="160" text-anchor="middle">{val}</text>';

			var chart = new OrgChart(document.getElementById("tree"), {
				template: "diva",
				nodeMouseClick: OrgChart.action.details,
				nodeMenu: this.isFounder
					? {
							details: { text: "Details" },
							delete: {
								text: "Delete",
								icon: OrgChart.icon.add(18, 18, "#FF8304"),
								onClick: this.deleteRelation
							}
					  }
					: null,
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
				if (args.name == "id") {
					return false;
				}
				if (args.name == "partnerId") {
					return false;
				}
				if (args.name == "user_id") {
					return false;
				}
				if (args.name == "relation_id") {
					return false;
				}
			});
		},
		async deleteRelation(node) {
			if (confirm("Do you really want to delete?")) {
				const member = this.familly.find(i => i.id === parseInt(node));
				const relations = await axios.get("auth/relation/all");
				const relation = relations.data.data.find(
					i => i.id === member.relation_id
				);
				if (relation.partner_1_id === member.user_id) {
					relation.partner_1_id = relation.partner_2_id;
					relation.partner_2_id = null;
				} else if (relation.partner_2_id === member.user_id) {
					relation.partner_2_id = null;
				}
				if (
					relation.partner_2_id === null &&
					relation.partner_1_id === null
				)
					relation.parent_id = null;
				let result = await axios
					.put("auth/relation/update", {
						id: relation.id,
						partner_1_id: relation.partner_1_id,
						partner_2_id: relation.partner_2_id,
						parent_id: relation.parent_id
					})
					.catch(error => {
						this.$toasted.error("Something goes wrong", {
							theme: "toasted-primary",
							position: "top-right",
							fullWidth: true,
							fitToScreen: false,
							duration: 3000
						});
					});
				if (result) {
					this.$toasted.success("Member successfully deleted", {
						theme: "toasted-primary",
						position: "top-right",
						fullWidth: true,
						fitToScreen: false,
						duration: 3000
					});
					this.refreshTree();
				}
				this.dialog = false;
			}
		}
	},
	async mounted() {
		await this.mountTree();
	}
};
</script>

<style scoped>
</style>