<template>
		<Header class="header-component">
			<template 
				v-slot:default
				class="title-wrapper"
			>
				<span class="icon-product"></span>
				<h2 class="title product-title"> {{ store.state.menu.goods }}</h2>
			</template>
			<template v-slot:actions>
				<ul class="btns-actions">
					<li 
						class="icon icon-add-product btn-add-product"
						@click="activeModal"
					>
					</li>
					<li 
						class="icon icon-edit btn-edit-product"
						@click="editProduct"
						:class="!store.state.selectedProduct ? 'btn-not-active' : ''"
					>
					</li>
					
					<li 
						class="icon icon-del-icon btn-del-product"
						@click="activeModalDel"
						:class="!store.state.selectedProduct ? 'btn-not-active' : ''"
					>
					</li>
				</ul>
			</template>
		</Header>
			<ModalTemplate
				v-show="store.state.modal.active"
			>
				<template v-slot:header>
					<span class="icon-product"></span>
					<h4 class="title-text" style="text-overflow: ellipsis;">Картка товару: {{ store.state.modalInput.name }}</h4>
				</template>
				<template v-slot:btnCrossClose>
					<BtnCrossClose>
                    <button class="btn" type="button" @click="buttonClose"></button>
                </BtnCrossClose>
				</template>
				<template v-slot:default>
					<ModalAddProd></ModalAddProd>
				</template>
				<template v-slot:btns>
					<div 
						class="btns-wrapper"
						style="justify-content: flex-end"
					>
						<BtnClose @click="buttonClose">Закрити</BtnClose>
						<BtnSave @click="saveProduct">Зберегти</BtnSave>
					</div>
				</template>
			</ModalTemplate>
			<ModalTemplate
				v-if="store.state.modal.delete"
			>
			<template v-slot:header>
				<span class="icon-del-icon"></span>
				<h4 class="title-text">Видалення!</h4>
			</template>
			<template v-slot:btnCrossClose>
				<BtnCrossClose>
				<button class="btn" type="button" @click="activeModalDel"></button>
			</BtnCrossClose>
			</template>
			<template v-slot:btns>
				<div 
					class="btns-wrapper"
					style="justify-content: center;"
				>
					<BtnClose @click="activeModalDel">Закрити</BtnClose>
					<BtnSave @click="btnDelProduct">Видалити</BtnSave>
				</div>
			</template>
			<template v-slot:default>
				<div class="modal-wrapper-del-message" style="min-width: 300px;">
					<span>Видалити даний елемент?</span>
					<strong>"{{ store.state.selectedProduct.name }}"</strong>
					<span class="icon-del-icon"></span>
				</div>
			</template>
			</ModalTemplate>
			<Table></Table>
			<!-- <p>{{ JSON.stringify(store.state.products) }}</p> -->
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const activeModal = ()=> {
	store.commit('toggleModal')
}
const activeModalDel = () => {
	store.commit('toggleModalDel')
}
const btnDelProduct = ()=> {
	if (store.state.selectedProduct) {
			// store.state.products = store.state.products.filter(elem, idx => elem !== store.state.selectedProduct)
			store.state.products = store.state.products.filter((elem, idx) => {
				console.table('del-btn', elem, idx);
				return elem !== store.state.selectedProduct
			})
			store.commit('toggleModalDel')
			store.state.selectedProduct = null
			store.state.selectedProductIdx = null;
		
	}
}

//========================= \/ MODAL \/ ========================
function buttonClose() {
	store.commit('toggleModal')
	store.commit('clearInputs')
	store.state.errorSaveProduct = false
	store.state.modal.edit = false
}

function formatStringCode(code) {
	const minLength = 4;
	code = code + ''
	let result = code;
	while (result.length < minLength) {
		result = '0' + result;
	}
	return result
}

function generateCode() {
	let newCode = 0
	store.state.products.forEach(element => {
		const regexDelZero = /^0+/
		
		let codeInputFormatNumber = Number(element.code.replace(regexDelZero, ''))

		let codeiProductFormatNumber = Number(store.state.modalInput.code.replace(regexDelZero, ''))
		let codeModalInputFormatNumber = Number(store.state.modalInput.code.replace(regexDelZero, ''))
		let lastIdxProducts = store.state.products.length - 1
		let lastCodeProductsFormNumber = Number(store.state.products[lastIdxProducts].code.replace(regexDelZero, ''))

		if (store.state.modalInput.code === '') {
			newCode = lastCodeProductsFormNumber + 1
			console.warn('iterration codeInputFormatNumber', codeInputFormatNumber );
			console.warn('iterration newCode', newCode );
		}
		console.warn('newCode', newCode);
		console.warn('formatStringCode', formatStringCode(newCode));
		if (newCode !== codeiProductFormatNumber) {
			store.state.modalInput.code = formatStringCode(newCode)

		}
	});
}

function checkOriginalCode() {
	let status = true
	// store.state.products.forEach(element => {

	for (const element of store.state.products) {
		if (store.state.modalInput.code === element.code) {
			status = false
			console.error('code is not original', status);
			console.log('i.code', element.code);
			console.log('store.state.modalInput.code', store.state.modalInput.code);
			store.state.errorSaveProduct = true
			break
		} else {
			status = true
			console.log('code is original', status);
			console.log('i.code', element.code);
			console.log('store.state.modalInput.code', store.state.modalInput.code);
			store.state.errorSaveProduct = false
		}
	}
	console.log('store.state.errorSaveProduct', store.state.errorSaveProduct);
	return status
}

function saveProduct() {
	// generateCode()
	console.log('store.state.modalInput[-1]', store.state.products.length - 1);
	store.state.modalInput.name = store.state.modalInput.name.trim()
	
	if (!store.state.modalInput.code) {
		generateCode()
	}
    const sendVar = {
        code: store.state.modalInput.code,
        name: store.state.modalInput.name,
        units: store.state.modalInput.units,
        barcode: store.state.modalInput.barcode
    }
	checkOriginalCode()
    if (store.state.modalInput.name.length < 4 
    || store.state.modalInput.code.length < 4
    || store.state.modalInput.barcode.length < 4){
		store.state.errorSaveProduct = true	
        
    }
    else {
        console.log(store.state.modalInput.code.length);
		// const sendVar = store.state.modalInput
		if (!store.state.modal.edit && store.state.errorSaveProduct === false) {
			store.state.products.push(sendVar) 
			store.commit('clearInputs')
			store.state.selectedProduct = sendVar
			store.state.selectedProductIdx = store.state.products.length -1
			buttonClose()
		} else if (store.state.modal.edit){
			if (store.state.selectedProduct.code === store.state.modalInput.code) {
				store.state.errorSaveProduct = false
				console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',store.state.errorSaveProduct);
			}
			if (store.state.errorSaveProduct === false) {
				// store.state.errorSaveProduct = false

				store.state.products[store.state.selectedProductIdx] = sendVar
				store.state.selectedProduct = store.state.products[store.state.selectedProductIdx]
				store.state.modal.edit = false

			buttonClose()
			} else {
				store.state.errorSaveProduct = true	
			}
			// Код для Edit
			
		}

    }
}

function loadSelectProductInModalEdit() {
	if (store.state.modal.edit = true) {
		store.state.modalInput.code = store.state.selectedProduct.code
		store.state.modalInput.name = store.state.selectedProduct.name
		store.state.modalInput.units = store.state.selectedProduct.units
		store.state.modalInput.barcode = store.state.selectedProduct.barcode
		// store.state.modalInput.name = 'wqeqwe'
		console.log(store.state.selectedProduct.name);

	}
}

function editProduct() {
	if (store.state.selectedProduct) {
		store.state.modal.edit = true
		// store.commit('toggleModalEdit')
		if (store.state.modal.edit) {
			store.state.modal.active = true
			loadSelectProductInModalEdit()
		}

	}
}
//========================= /\ MODAL /\ ========================

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
	// cursor: pointer;
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
	.icon-edit {
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
		cursor: pointer;
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
	.btn-not-active {
		opacity: .5;
		cursor: auto;
		&:hover {
			filter: none;
			&::after{
				content:'';
			}
		}
	}
}

</style>