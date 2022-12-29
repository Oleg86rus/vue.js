import {createRouter, createWebHistory} from 'vue-router'
import AppHomePage from './views/AppHomePage.vue'
import AppReusablePage from './views/AppReusablePage.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: AppHomePage},
		{path: '/reusable', component: AppReusablePage}
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})