<template>
	<div class="container">
		<header class="head" v-show="type !== 'no-header'">
			<slot name="header"></slot>
		</header>
		<section class="content">
			<aside class="aside" v-show="type !== 'no-aside'" :style="{ width: sideWidth || 0 }">
				<div class="shrik-btn" v-show="isDrag"></div>
				<slot name="aside"></slot>
			</aside>
			<main class="main-body" :style="{ width: mainWidth }">
				<slot name="main"></slot>
			</main>
		</section>
		<footer class="foot" v-show="type !== 'no-footer'">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {
	/**
	 * no-aside: 无侧边栏
	 * no-footer: 无底部
	 * no-header: 无头部
	 */
	@Prop() public type!: string;
	@Prop() public width!: string;	// &：20px;
	@Prop() public isDrag!: boolean;

	public sideWidth: string = !this.width ? '' : this.width;
	public mainWidth: string = !this.width ? '100%' : 'calc(100% - ' + this.sideWidth + ')';
}
</script>

<style lang="less" scoped>
.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	border: 1px solid #ccc;
	text-align: center;
	.head, .footer {
		height: 80px;
		width: 100%;
		line-height: 80px;
	}
	.content {
		width: 100%;
		min-height: 100px;
		line-height: 100px;
		display: flex;
		flex-wrap: nowrap;
		.aside {
			position: relative;
			border-right: 1px solid #ccc;
		}
	}
}
</style>
