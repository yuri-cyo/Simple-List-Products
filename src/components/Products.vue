<template>
	<div class="page">
		<Header class="header-component">
			<template 
				v-slot:default
				class="title-wrapper"
				>
				<span class="icon-product"></span>
				<h2 class="title product-title"> {{ myProductName }}</h2>
			</template>
			<template v-slot:actions>
					<ul class="btns-actions">
						<li class="icon-add-product"></li>
						<li class="icon-edit-icon"></li>
						<li class="icon-del-icon"></li>
					</ul>
				</template>
			</Header>
			<!-- <Producttable></Producttable> -->
			<Table></Table>
	</div>
</template>

<script setup>
	const props = defineProps({
		myProductName: {
		type: String,
		required: true
		}
	});
</script>

<style lang="scss" scoped>
.page {
	// height: 100vh;
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
}
.header-component {
	min-width: 420px;
}
.title-wrapper {
	display: flex;
	gap: rem(5);
	justify-content:center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	
}
.btns-actions {
	display: flex;
	justify-self: end;
	gap: rem(7);
	font-size: rem(32);
	cursor: pointer;
	transition: all 0.3s ease 0s;
	position: absolute;
	right: 0;
	padding-right: $pd-page;
	.icon-del-icon {
		color: $icon-del;
		&:hover {
			box-shadow: 0px 0px 10px $icon-del;
			border-radius: 100vh;
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;
		}
	}
	.icon-add-product {
		color: $icon-add;
		&:hover {
			box-shadow: 0px 0px 10px $icon-add;
			border-radius: 100vh;
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;
		}
	}
	.icon-edit-icon {
		color: $icon-edit;
		&:hover {
			box-shadow: 0px 0px 10px $icon-edit;
			border-radius: 100vh;
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;
		}
	}
}
</style>