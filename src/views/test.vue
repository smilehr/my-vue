<template>
	<div class="test">
		<header class="header">Header</header>
		<section class="container">
			<aside class="aside">
				<nav-menu 
					:menus="navMenus"
					:menuStyle="menuStyle"
					:defaultActive="defaultActive"
					:level="level"></nav-menu>
			</aside>
			<main class="main">
				<router-view></router-view>
			</main>		
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NavMenu from '@/components/navmenu/NavMenu.vue';
import { compMenus } from '../modules/globalParam';

@Component({
	components: {
		NavMenu
	},
})
export default class Test extends Vue {
	public navMenus: object[] = compMenus;
	private menuStyle: {} = {
		bgColor: '#545c64',
		color: '#fff',
		activeBgColor: '#434a50',
		activeColor: '#ffd04b'
	};
	private level: number = 1;
	private defaultActive: string = '2';
}
</script>

<style lang="less" scoped>
.test {
	display: flex;
	flex-wrap: wrap;
	flex: 1;
	height: 100%;
	.header {
		height: 80px;
		line-height: 80px;
		text-align: center;
		width: 100%;
	}
	.container {
		width: 100%;
		height: calc(100% - 80px);
		padding-bottom: 1%;
		display: flex;
    flex: 1;
		.aside {
			width: 200px;
			height: 100%;
			border: 1px solid #ccc;
		}
		main.main {
			width: calc(100% - 200px);
			height: 100%;
			border: 1px solid #ccc;
			border-left: none;
		}
	}
	.footer {
		height: 80px;
		line-height: 80px;
		width: 100%;
	}
}

</style>