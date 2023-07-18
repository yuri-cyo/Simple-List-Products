<template>
	<!-- <div class="page"> -->
		<Header class="header-component">
			<template 
				v-slot:default
				class="title-wrapper"
				>
				<span class="icon-product"></span>
				<h2 class="title product-title"> {{ productName }}</h2>
			</template>
			<template v-slot:actions>
				<ul class="btns-actions">
					<li 
						class="icon icon-add-product btn-add-product"
						@click="addingProduct"
					>
					</li>
					<li 
						class="icon icon-edit-icon btn-edit-product"
					>
					</li>
					<li 
						class="icon icon-del-icon btn-del-product"
					>
					</li>
				</ul>
			</template>
		</Header>
			<ModalAddProd 
				:modalActive="modalActive"
				@close="addingProduct"
			>
				<BtnSave>Зберігти</BtnSave>
				<BtnClose @click="addingProduct">Закрити</BtnClose>
			</ModalAddProd>
			<Table></Table>
	<!-- </div> -->
</template>

<script setup>
import { ref } from 'vue';
	const props = defineProps({
		productName: {
		type: String,
		required: true
		}
	});

	const modalActive = ref(false)

	const addingProduct = ()=> {
		modalActive.value = !modalActive.value
	}
</script>

<style lang="scss" scoped>

.header-component {
	margin-top: rem(52);
}
.title-wrapper {
	gap: rem(5);
	align-items: center;
	margin-left: auto;
	margin-right: auto;
}
.btns-actions {
	display: flex;
	justify-self: end;
	gap: rem(7);
	font-size: rem(28);
	cursor: pointer;
	transition: all 0.3s ease 0s;
	padding-right: $pd-page;
	.icon-del-icon {
		color: $icon-del;
		&:hover {
			box-shadow: 0px 0px 10px $icon-del;
			border-radius: 100vh;
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;

			&::after {
				content: 'Видалити';
			}
		}
	}
	.icon-add-product {
		color: $icon-add;
		&:hover {
			box-shadow: 0px 0px 10px $icon-add;
			border-radius: 100vh;
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;
			&::after {
				content: 'додати';
			}
		}
	}
	.icon-edit-icon {
		color: $icon-edit;
		&:hover {
			box-shadow: 0px 0px 10px $icon-edit;
			border-radius: 100vh;
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;

			&::after {
				content: 'Редагувати';
				transition: all 3s ease 0s;
			}
		}
	}
	.icon {
		position: relative;
		transition: all 0.3s ease 0s;
		&::after {
				font-family: 'Roboto';
				color: $coolorDarkTxt;
				font-size: rem(13);
				position: absolute;
				bottom: -20px;
				left: 50%;
				transform: translateX(-50%);
				background-color: $bgMenu;
				opacity: 0.9;
				padding: 3px;
				border-radius: 5px;
			}
	}

}
</style>