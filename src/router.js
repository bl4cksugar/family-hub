import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdminPanel from './views/AdminPanel.vue'
import Users from './views/SideMenu/USERS.vue'
import Families from './views/SideMenu/FAMILIES.vue'
import News from './views/SideMenu/NEWS.vue'
import SystemLogs from './views/SideMenu/SYSTEMLOGS.vue'
import Affienities from './views/SideMenu/AFFINITIES.vue'
import FamilyTree from './components/family-tree.vue'
import UsersPanel from './views/UsersPanel.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: FamilyTree
    },
    {
      path: '/admin',
      name: 'admin-panel',
      component: AdminPanel
    },
    {
      path: '/admin/users',
      name: 'users',
      component: Users
    },
    {
      path: '/admin/families',
      name: 'families',
      component: Families
    },
    {
      path: '/admin/news',
      name: 'news',
      component: News
    },
    {
      path: '/admin/systemlogs',
      name: 'systemlogs',
      component: SystemLogs
    },
    {
      path: '/admin/affinities',
      name: 'affienities',
      component: Affienities
    },
    {
      path: '/panel',
      name: 'panel',
      component: UsersPanel

    }
  ]
})