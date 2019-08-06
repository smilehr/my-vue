<template>
	<div class="layout">
		<layout class="lay1" :type="'no-footer'" :width="'150px'" :isDrag="true">
			<div class="head" slot="header">header</div>
			<div class="aside" slot="aside">aside</div>
			<div class="main" slot="main">main</div>
		</layout>
		<layout :type="'no-header'" :width="'20%'">
			<div slot="footer">footer</div>
			<div slot="aside">aside</div>
			<div slot="main">main</div>
		</layout>
		<layout :type="'no-aside'" :width="'0'">
			<div slot="footer">footer</div>
			<div slot="header">header</div>
			<div slot="main">main</div>
		</layout>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';

@Component({
	components: {
		Layout
	}
})
export default class LayoutDemo extends Vue {
}
</script>

<style lang="less" scoped>
.lay1 /deep/ section {
	height: calc(100% - 80px);
}

.lay1 {
	height: 300px;
	.head {
		height: 80px;
		border-bottom: 1px solid #ccc;
	}
	.aside {
		border-right: 1px solid #ccc;
		width: 100%;
		height: 100%;
	}
	.main {
		height: 100%;
	}
}
</style>
