/**
 * 定义导航栏接口
 */
export interface NavMenu {
	name: string;
	path?: string;
	component: object;
	meta: object;
	children?: NavMenu[];
}

export const compMenus: NavMenu[] = [{
	name: 'container',
	path: '/test/container',
	component: () => import('@/components/Container.vue'),
	meta: {
		title: '布局组件',
		icon: 'icon-navigation'
	}
}, {
	name: 'home1',
	path: '/test/Home1',
	component: () => import('@/components/HelloWorld.vue'),
	meta: {
		title: '首页',
		icon: 'icon-navigation'
	}
}];

export default { };