<template>
	<div class="page">
		<div class="sections-wrapper">
			<p>Опції</p>
		</div>
	</div>
</template>

<script setup>
	import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	justify-content: center;
	width: 100%;
	overflow: hidden;
	padding: $pd-page;
}

.sections-wrapper {
	max-width: $widht-main-page;
}

</style>