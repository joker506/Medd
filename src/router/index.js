import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import SignUp from "@/views/SignUp";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AuthLayout',
    component: AuthLayout,
    children: [
      {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
    ]
  },
  
   {
    path: '/main',
    name: 'MainLayout',
    component: MainLayout,
    children: [
     
    ]
  },

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
