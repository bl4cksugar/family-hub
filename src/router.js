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

import cookieHelper from './helpers/cookie'
import store from "./store";


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin-panel',
      component: AdminPanel,
      meta: {
        requiresAdmin: true,
        requiresAuth: true
      }
    },
    {
      path: '/admin/users',
      name: 'users',
      component: Users,
      meta: {
        requiresAdmin: true,
        requiresAuth: true
      }
    },
    {
      path: '/admin/families',
      name: 'families',
      component: Families,
      meta: {
        requiresAdmin: true,
        requiresAuth: true
      }
    },
    {
      path: '/admin/news',
      name: 'news',
      component: News,
      meta: {
        requiresAdmin: true,
        requiresAuth: true
      }
    },
    {
      path: '/admin/systemlogs',
      name: 'systemlogs',
      component: SystemLogs,
      meta: {
        requiresAdmin: true,
        requiresAuth: true
      }
    },
    {
      path: '/admin/affinities',
      name: 'affienities',
      component: Affienities,
      meta: {
        requiresAdmin: true,
        requiresAuth: true
      }
    },
    {
      path: '/panel',
      name: 'panel',
      component: UsersPanel,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  let token = cookieHelper.getTokenCookie();
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (to.matched.some(r => r.meta.requiresAdmin)) {
      if (!token || !token.isAdmin) {
        next({
          path: ""
        })
        return;
      }
    }
    if (!token) {
      store.dispatch('deleteSession');
      next({
        path: ""
      })
      return;
    }
  } else {
    if (token) {
      next({
        path: "/test"
      })
      return;
    } else
      store.dispatch('deleteSession');
  }

  next();
});

export default router