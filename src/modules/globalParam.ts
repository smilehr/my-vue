import { RouteConfig } from 'vue-router';

export const compMenus: RouteConfig[] = [{
	name: 'container',
	path: '/container',
	component: () => import('@/components/Container.vue'),
	meta: {
		title: '布局组件',
		icon: 'icon-daohang'
	}
}, {
	name: 'home1',
	path: '/Home1',
	component: () => import('@/components/HelloWorld.vue'),
	meta: {
		title: '首页',
		icon: 'icon-daohang'
	}
}];

export default { };