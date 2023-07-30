<template>
	<div class="page">
		<Header>
			<template v-slot:default>
				<span class="icon-set"></span>
				<h2 class="title product-title">{{ setName }}</h2>
			</template>
		</Header>
	</div>
</template>

<script setup>
	import { ref, reactive } from "vue";
	const props = defineProps({
		setName: {
		type: String,
		required: true
		}
	});
</script>

<style lang="scss" scoped>
.page {
}


</style>