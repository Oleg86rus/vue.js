import {createRouter, createWebHistory} from 'vue-router'
import AppHomePage from './views/AppHomePage.vue'
import AppReusablePage from './views/AppReusablePage.vue'
import VuexPage from './views/VuexPage.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: AppHomePage},
		{path: '/reusable', component: AppReusablePage},
		{path: '/vuex', component: VuexPage}
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})