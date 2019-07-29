<template>
	<div>
		<div class="nav-menu" :default-active="menus[0].path">
			<div class="menu-item" v-for="menu in menus" :key="menu.name" @click="changeComp(menu.name)">
				<router-link class="item-title" :to="menu.path" tag="div">
					<i class="iconfont icon-navigation"></i>
					<span>{{ menu.meta.title }}</span>
					<i class="iconfont icon-arrow icon-arrow-right"></i>
				</router-link>		
			</div>
		</div>
		<div class="nav-view">
				<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavMenu extends Vue {
	@Prop() private menus!: object[];

	private changeComp(compName: string): void {
		console.log(compName);
	}
}
</script>

<style scoped lang="less">
.nav-menu {
	width: 200px;
	height: 100%;
	float: left;
	.menu-item {
		width: 100%;
		.item-title {
			height: 56px;
			line-height: 56px;
			font-size: 14px;
			color: #303133;
			padding: 0 20px;
			list-style: none;
			cursor: pointer;
			position: relative;
			transition: border-color .3s,background-color .3s,color .3s;
			box-sizing: border-box;
			white-space: nowrap;
			.iconfont:nth-child(1) {
				vertical-align: middle;
				margin-right: 5px;
				width: 24px;
				text-align: center;
				font-size: 18px;
			};
			.icon-arrow {
				position: absolute;
				right: 20px;
				transition: transform .3s;
				font-size: 12px;
			}
		}
		.item-title:hover{
			background-color: #ecf5ff;
		}
	}
}
.nav-view {
	width: 600px;
	float: left;
}
</style>