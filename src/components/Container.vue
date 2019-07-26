<template>
	<div class="container">布局组件</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {
	@Prop() private msg!: string;
}
</script>

