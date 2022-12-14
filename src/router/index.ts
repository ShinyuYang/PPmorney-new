import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Details from '@/views/Details.vue'
// import Statistic from '@/views/Statistic.vue'
import NotFound from '@/views/NotFound.vue';
import Labels from '@/views/Labels.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/money'
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/details',
    component:Details
  },
  {
    path:'/labels',
    component:Labels
  },
  { path: '/labels/edit/:id',
    component: EditLabel,
  },
  {
    path:'*',
    component:NotFound
  }
 /* {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  routes
})

export default router
