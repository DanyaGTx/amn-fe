import { createRouter, createWebHistory } from 'vue-router'

import LoginComponent from '../components/LoginComponent.vue'
import DashBoard from '../components/DashBoard.vue'

export default createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', alias: '/', component: LoginComponent },
    { path: '/dashboard', name: 'dashboard', component: DashBoard }
  ]
})
