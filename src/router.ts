import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Home from './views/Home.vue';
import Test from './views/test.vue';
import { NavParams, NavConfig } from './modules/globalParam';

Vue.use(Router);

const childRoutes: RouteConfig[] = [];
function getRoutes(menus: NavConfig[]): void {
	menus.forEach((val: NavConfig, index: number) => {
		if (val.children && val.children.length > 0) {
			getRoutes(val.children);
		}

		if (!!val.path) {
			childRoutes.push({
				name: val.name,
				path: val.path,
				component: val.component
			});
		}
	});
}

getRoutes(NavParams.navmenu);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
		},
		{
			path: '/test',
			name: 'test',
			component: Test,
			redirect: '/test/' + NavParams.default,
			children: childRoutes
		}
	],
});