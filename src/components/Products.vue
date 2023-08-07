<template>
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
						@click="closeModal"
					>
					</li>
					<li 
						class="icon icon-edit-icon btn-edit-product"
					>
					</li>
					<li 
						class="icon icon-del-icon btn-del-product"
						@click="btnDelProduct"
					>
					</li>
				</ul>
				<span> {{ $store.state.count }}</span>
			</template>
		</Header>
			<ModalAddProd 
				:modalActive="modalActive"
				@btnClose="closeModal"
				@objSaveProduct="objSP"
			>
			</ModalAddProd>
			<Table 
				:stateNewProduct="stateNewProduct"
			></Table>
			<p>{{ JSON.stringify(store.state.products) }}</p>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
	const props = defineProps({
		productName: {
		type: String,
		required: true
		}
	});


	const modalActive = ref(false)
	const closeModal = ()=> {
		modalActive.value = !modalActive.value
	}
	const delElem = ref(null)

	const btnDelProduct = ()=> {
		store.state.count++
		if (store.state.selectedProduct) {
			// store.state.products = store.state.products.filter(elem, idx => elem !== store.state.selectedProduct)
			store.state.products = store.state.products.filter((elem, idx) => {
				console.table('del-btn', elem, idx);
				return elem !== store.state.selectedProduct
			})
			store.state.selectedProduct = null
			store.state.selectedProductIdx = null;

		}
		// store.commit('increment')
}

	const stateNewProduct = ref({})

	function objSP(newValueProduct) {
		stateNewProduct.value = newValueProduct
	}

</script>

<style lang="scss" scoped>

.header-component {
	// margin-top: rem(52);
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
		box-shadow: $btn-shadow $icon-del;
		border-radius: 100vh;
		&:hover {
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;

			&::after {
				content: 'Видалити';
			}
		}
	}
	.icon-add-product {
		color: $icon-add;
		box-shadow: $btn-shadow $icon-add;
		border-radius: 100vh;
		&:hover {
			filter: brightness(0.9);
			transition: all 0.3s ease 0s;
			&::after {
				content: 'додати';
			}
		}
	}
	.icon-edit-icon {
		color: $icon-edit;
		box-shadow: $btn-shadow $icon-edit;
		border-radius: 100vh;
		&:hover {
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