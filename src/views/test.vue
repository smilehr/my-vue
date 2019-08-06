<template>
	<layout class="test" :type="'no-footer'" :width="'200px'" :isDrag="true">
		<div class="head" slot="header">{{ $route.name }}</div>
		<div class="aside" slot="aside">
			<nav-menu 
				:menus="navMenus"
				:menuStyle="menuStyle"
				:level="level"
				:defaultActive="$route.name || ''">
			</nav-menu>
		</div>
		<div class="main" slot="main"><router-view></router-view></div>
	</layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NavMenu from '@/components/navmenu/NavMenu.vue';
import Layout from '@/components/Layout.vue';
import { NavConfig, NavParams } from '../modules/globalParam';

@Component({
	components: {
		NavMenu,
		Layout
	},
})
export default class Test extends Vue {
	public navMenus: NavConfig[] = NavParams.navmenu;
	private menuStyle: {} = {
		bgColor: '#545c64',
		color: '#fff',
		activeBgColor: '#434a50',
		activeColor: '#ffd04b'
	};
	private level: number = 1;
}
</script>

<style lang="less" scoped>
.test /deep/ section {
	height: calc(100% - 80px);
	padding-bottom: 1%;
}

.test {
	display: flex;
	flex-wrap: wrap;
	flex: 1;
	height: 100%;
	.head {
		height: 80px;
		line-height: 80px;
		text-align: center;
		width: 100%;
	}
	.aside {
		height: 100%;
		border: 1px solid #ccc;
	}
	.main {
		height: 100%;
		border: 1px solid #ccc;
		border-left: none;
		padding: 10px;
	}
}

</style>