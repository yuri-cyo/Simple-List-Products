<template>
	<div class="page">
		<div class="sections-wrapper">
			<p> {{ productName }}</p>
			<p>ТОВАРИ2 </p>
			<p>ТОВАРИ3 </p>
			<p>ТОВАРИ4 </p>
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