<!-- 
	params: 
		1. menus: 导航栏数据，参照globalParam.ts 接口 NavConfig
		2. menuStyle: { bgColor: string, color: string,	activeBgColor: string, activeColor: string }
		3. defaultActive: string 导航栏默认节点 menus[i].name 字段
		4. level: number 当前导航栏层级
		5. index: string 当前导航栏index
	原本构想：通过调用者指定默认active项，再通过每项的点击事件，改变activeItem值，判断Index === activeItem判断当前点击item
					 是否 isActive；但可惜，第一级和第二级并不能视为一个整体，而又不想手动固定级数，所以采用$router.path作为相应数据
	折中构想：通过this.$route.name === name 判断当前点击项isActive = true or false
-->

<template>
	<div class="nav-menu" :style="{ 'background-color': menuStyle.bgColor, 'color': menuStyle.color }">
		<menu-item
			:style="{'text-indent': (level * 20) + 'px' }"
			v-for="(menu, idx) in menus"
			:menu="menu"
			:index="index ? index + '-' + (idx + 1) : '' + (idx + 1)"
			:key="menu.name"
			:name="menu.name"
			:activeBg="menuStyle.activeBgColor"
			:activeColor="menuStyle.activeColor"
			:defaultActive="defaultActive">
			<nav-menu 
				v-if="menu.children && menu.children.length > 0"
				:menus="menu.children"
				:menuStyle="menuStyle"
				:index="'' + (idx + 1)"
				:level="level + 1"
				:defaultActive="defaultActive">
			</nav-menu>
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
	@Prop() public menus!: object[];
	@Prop() public index!: string;
	@Prop() public menuStyle!: {};
	@Prop() public level!: number;
	@Prop() public defaultActive!: string;
}
</script>

<style scoped lang="less">
.nav-menu {
	width: 100%;
	height: 100%;
}
</style>