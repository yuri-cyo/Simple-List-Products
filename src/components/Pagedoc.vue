<template>
	<div class="page">
		<Header>
			<template v-slot:default>
				<span class="icon-doc"></span>
				<h2 class="title product-title">Документи</h2>
			</template>
		</Header>
	</div>
</template>

<script setup>
	import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.page {

}
</style>