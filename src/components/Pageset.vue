<template>
	<div class="page">
		<Header>
			<template v-slot:default>
				<span class="icon-set"></span>
				<h2 class="title product-title">{{ store.state.menu.options }}</h2>
			</template>
		</Header>
	</div>
</template>

<script setup>
	import { ref, reactive } from "vue";
	import { useStore } from 'vuex';
	const store = useStore();
</script>

<style lang="scss" scoped>
.page {
}


</style>