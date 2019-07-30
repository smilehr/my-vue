<template>
	<div class="nav-menu" :style="{ 'background-color': menuStyle.bgColor, 'color': menuStyle.color }">
		<menu-item
			:style="{'text-indent': (level * 20) + 'px' }"
			v-for="(menu, idx) in menus"
			:menu="menu"
			:index="index ? index + '-' + (idx + 1) : '' + (idx + 1)"
			:key="menu.name"
			:activeBg="menuStyle.activeBgColor"
			:activeColor="menuStyle.activeColor"
			:activeItem="activeItem"
			@setActiveItem="setActiveItem"
		>
			<nav-menu 
				v-if="menu.children && menu.children.length > 0"
				:menus="menu.children"
				:menuStyle="menuStyle"
				:index="'' + (idx + 1)"
				:level="level + 1"
				:activeItem="activeItem"
				@setActiveItem="setActiveItem"
			></nav-menu>
		</menu-item>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';

@Component({
	components: {
		MenuItem
	}
})
export default class NavMenu extends Vue {
	@Prop() private menus!: object[];
	@Prop() private index!: string;
	@Prop() private menuStyle!: {};
	@Prop() private level!: number;
	@Prop() private defaultActive!: string;

	private activeItem: string = this.defaultActive || '';

	private setActiveItem(index: string): void {
		this.activeItem = index;
	}

	@Watch('activeItem')
	private onActiveItemChanged(nValue: string, oValue: string) {
		this.activeItem = nValue;
	}
}
</script>

<style scoped lang="less">
.nav-menu {
	width: 100%;
	height: 100%;
}
</style>