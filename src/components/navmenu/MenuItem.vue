<!--
	params: 
		1. menu: 导航栏数据，参照globalParam.ts 接口 NavConfig
		2. activeBg, activeColor 选中节点样式
		3. defaultActive: string 导航栏默认节点 menus[i].name 字段
		4. name: string 当前节点name，用来判断当前节点是否选中
		5. index: string 当前导航栏index
-->

<template>
	<div class="menu-item"
		:style="{	backgroundColor: bgColor,	color: textColor }"
		:index="index"
		@click.stop="doClick()"
		@mouseover.stop="changeHover(true)"
		@mouseout.stop="changeHover(false)"
	>
		<router-link class="item-title" :to="menu.path" tag="div">
			<i :class="['iconfont', menu.meta.icon]"></i>
			<span>{{ menu.meta.title }}</span>
			<i :class="['iconfont', 'icon-arrow', !isopen ? 'icon-arrow-right' : 'icon-arrow-down']"></i>
		</router-link>
		<div class="menu-group" v-show="isopen" v-if="menu.children && menu.children.length > 0">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NavConfig } from '../../modules/globalParam';

@Component
export default class MenuItem extends Vue {
	@Prop() public defaultActive!: string;
	@Prop() public menu!: NavConfig;
	@Prop() public index!: string;
	@Prop() public activeBg!: string;
	@Prop() public activeColor!: string;
	@Prop() public name!: string;

	private isActive: boolean = this.name === this.defaultActive;
	private bgColor = this.isActive ? this.activeBg : '';
	private textColor = this.isActive ? this.activeColor : '';
	private isopen = !!this.menu.isopen;

	public doClick(): void {
		this.isopen = !this.isopen;
	}

	public changeHover(idx: boolean): void {
		if (this.isActive) { return; }
		this.bgColor = idx ? this.activeBg : '';
		this.textColor = idx ? this.activeColor : '';
	}

	@Watch('$route')
	private changeRoute(to: { [propName: string]: any; }, from: object): void {
		this.isActive = this.name === to.name;
		this.bgColor = this.isActive ? this.activeBg : '';
		this.textColor = this.isActive ? this.activeColor : '';
	}
}
</script>

<style lang="less" scoped>
.menu-item {
	width: 100%;
	.item-title {
		height: 56px;
		line-height: 56px;
		font-size: 14px;
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
		}
	}
}
</style>