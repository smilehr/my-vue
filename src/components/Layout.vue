<template>
	<div class="container">
		<header v-show="type !== 'no-header'">
			<slot name="header"></slot>
		</header>
		<section>
			<aside v-show="type !== 'no-aside'" :style="{ width: sideWidth || 0 }">
				<slot name="aside"></slot>
				<div class="shrik-btn"
					v-if="isDrag"
					draggable="true"
					@dragstart="setShirkX($event)"
					@drag="dragSide($event)"
				></div>
			</aside>
			<main :style="{ width: mainWidth }">
				<slot name="main"></slot>
			</main>
		</section>
		<footer v-show="type !== 'no-footer'">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
	/**
	 * no-aside: 无侧边栏
	 * no-footer: 无底部
	 * no-header: 无头部
	 */
	@Prop() public type!: string;
	@Prop() public width!: string;	// &：20px;
	@Prop() public isDrag!: boolean;

	public sideWidth: string = !this.width ? '' : this.width;
	public minSide: number = 150;
	public mainWidth: string = !this.width ? '100%' : 'calc(100% - ' + this.sideWidth + ')';
	private shirkX: number = 0;

	public setShirkX(ev: DragEvent): void {
		this.shirkX = ev.clientX;
	}

	public dragSide(ev: DragEvent): void {
		let sideW = Number(this.sideWidth.substr(0, this.sideWidth.length - 2));
		sideW = sideW + (ev.clientX - this.shirkX);
		if (Math.abs(ev.clientX - this.shirkX) < 20 && sideW > this.minSide) {	// 处理当拖拽鼠标mouseup时，clientX突变为0的bug
			this.sideWidth = sideW + 'px';
			this.mainWidth = 'calc(100% - ' + this.sideWidth + ')';
		}
		this.shirkX = ev.clientX;
	}
}
</script>

<style lang="less" scoped>
.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	align-content: flex-start;
	border: 1px solid #ccc;
	header, footer, section {
		width: 100%;
	}
	section {
		display: flex;
		flex-wrap: nowrap;
		justify-content: left;
		align-content: flex-start;
		main, aside {
			height: 100%;
		}
		aside {
			position: relative;
			border-right: 1px solid #ccc;
			.shrik-btn {
				position: absolute;
				right: 0;
				top: 0;
				width: 2px;
				height: 100%;
				background: #ccc;
				z-index: 2;
				cursor: col-resize;
			}
		}
	}
}
</style>