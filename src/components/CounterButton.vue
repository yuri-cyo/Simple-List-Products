<template>
	<button @click="counter++">Counter</button>
	<button @click="counter = 0">Clear	</button>
	<h1>{{ counter }}</h1>
</template>

<script setup>
	import { ref } from 'vue'

	const counter = ref(0)
</script>

<script>
</script>

<style lang="scss" scoped>

</style>