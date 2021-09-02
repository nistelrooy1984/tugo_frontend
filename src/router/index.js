import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const STORAGE_KEY = "id_token";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/pages/HomeComponent.vue')
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/pages/DashboardComponent.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/campaigns",
    name: "Campaigns",
    component: () => import("../components/pages/CampaignsComponent.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../components/pages/ContactsComponent.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/leads",
    name: "Leads",
    component: () => import("../components/pages/LeadsComponent.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/organizations",
    name: "Organizations",
    component: () => import("../components/pages/OrganizationsComponent.vue"),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem(STORAGE_KEY);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
