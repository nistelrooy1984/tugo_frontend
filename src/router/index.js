import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/pages/HomeComponent.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/pages/DashboardComponent.vue')
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: () => import('../components/pages/CampaignsComponent.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../components/pages/ContactsComponent.vue')
  },
  {
    path: '/leads',
    name: 'Leads',
    component: () => import('../components/pages/LeadsComponent.vue')
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: () => import('../components/pages/OrganizationsComponent.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
