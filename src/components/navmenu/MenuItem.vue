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
			<i class="iconfont icon-arrow icon-arrow-right"></i>
		</router-link>
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
	@Prop() private menu!: {};
	@Prop() private index!: string;
	@Prop() private activeBg!: string;
	@Prop() private activeColor!: string;
	@Prop() private activeItem!: string;

	private isActive: boolean = this.index === this.activeItem;
	private bgColor = this.isActive ? this.activeBg : '';
	private textColor = this.isActive ? this.activeColor : '';

	public doClick(): void {
		this.$emit('setActiveItem', this.index);
	}

	public changeHover(idx: boolean): void {
		if (this.isActive) { return; }
		this.bgColor = idx ? this.activeBg : '';
		this.textColor = idx ? this.activeColor : '';
	}

	private updateIsActive() {
		this.isActive = this.index === this.activeItem;
		this.bgColor = this.isActive ? this.activeBg : '';
		this.textColor = this.isActive ? this.activeColor : '';
	}

	@Watch('activeItem')
	private onActiveItemChanged(nValue: string, oValue: string) {
		this.activeItem = nValue;
		this.updateIsActive();
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
			font-size: 12px;
		}
	}
}
</style>