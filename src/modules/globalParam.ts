/**
 * 定义导航栏接口
 */
export interface NavConfig {
	name: string;
	path?: string;
	component: object;
	meta: object;
	isopen?: boolean;
	children?: NavConfig[];
}

const compMenus: NavConfig[] = [{
	name: 'layout',
	path: '/test/layout',
	component: () => import('@/views/test/LayoutDemo.vue'),
	meta: {
		title: '布局组件',
		icon: 'icon-navigation'
	}
}, {
	name: 'home',
	path: '',
	component: {},
	meta: {
		title: '首页',
		icon: 'icon-navigation'
	},
	isopen: true,
	children: [{
		name: 'home1',
		path: '/test/home1',
		component: () => import('@/components/HelloWorld.vue'),
		meta: {
			title: 'HelloWorld',
			icon: 'icon-navigation'
		},
	}]
}];

export const NavParams: { default: string, navmenu: NavConfig[] } = {
	default: 'home1',
	navmenu: compMenus
};

export default { };