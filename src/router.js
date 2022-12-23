import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Forget from './views/Forget.vue'
import Dashboard from './views/Dashboard.vue'
import Mail from './views/MailList.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/login',
			component: Login,
			alias: '/'
		},
		{
			path: '/forget',
			component: Forget
		},
		{
			path: '/dashboard',
			component: Dashboard
		},
		{
			path: '/mail/:mailId?',
			component: Mail
		},
		
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})