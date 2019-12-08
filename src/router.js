import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from './views/Home.vue'



import UsersPanel from './views/SideMenu/users-panel.vue'
import FamiliesPanel from './views/SideMenu/families-panel.vue'
import NewsPanel from './views/SideMenu/families-panel.vue'
import LogsPanel from './views/SideMenu/logs-panel.vue'
import AffienitiesPanel from './views/SideMenu/affinities-panel.vue'


import Tree from './views/UserPanel/Tree.vue'
import News from './views/UserPanel/News.vue'
import Gallery from './views/UserPanel/Gallery.vue'
import Profile from './views/UserPanel/Profile.vue'

import cookieHelper from './helpers/cookie'
import store from "./store";
import axios from 'axios'
import {
  newExpression
} from '@babel/types'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/admin/logs',
      name: 'logs-panel',
      component: LogsPanel,
      meta: {
        requiresAdmin: true,

      }
    },
    {
      path: '/admin/users',
      name: 'users-panel',
      component: UsersPanel,
      meta: {
        requiresAdmin: true,

      }
    },
    {
      path: '/admin/families',
      name: 'families-panel',
      component: FamiliesPanel,
      meta: {
        requiresAdmin: true,

      }
    },
    {
      path: '/admin/news',
      name: 'news-panel',
      component: NewsPanel,
      meta: {
        requiresAdmin: true,

      }
    },
    {
      path: '/admin/affinities',
      name: 'affienities-panel',
      component: AffienitiesPanel,
      meta: {
        requiresAdmin: true,

      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      }
    },

  ]
})

router.beforeEach(async (to, from, next) => {
  let user;
  let token = cookieHelper.getTokenCookie();

  if (token) {
    let result = await axios.get("auth/user");
    if (result) {
      store.dispatch("setSession", result.data);
      user = result.data
    } else store.dispatch("deleteSession");
  }
  if (user === null)
    user = false;



  if (to.matched.some(r => r.meta.requiresAdmin)) {
    if (!token && !user || user.type !== 'admin') {
      next({
        path: "/"
      })
      return;
    }
  } else if (to.matched.some(r => r.meta.requiresAuth)) {
    if (!token) {
      next({
        path: "/"
      })
      return;
    } else if (user && user.type === 'admin') {
      next({
        path: "/admin/logs"
      })
      return;
    }
  } else {
    if (token) {
      if (user.type === 'admin') {
        next({
          path: "/admin/logs"
        })
        return;
      } else {
        next({
          path: "/news"
        })
        return;
      }
    } else
      store.dispatch('deleteSession')
  }

  next();


});

export default router