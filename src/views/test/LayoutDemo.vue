<template>
	<div class="layout">
		<layout :type="'no-footer'" :width="'150px'" :isDrag="true">
			<div slot="header">header</div>
			<div slot="aside">aside</div>
			<div slot="main">main</div>
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

</style>
