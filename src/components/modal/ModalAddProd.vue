<template>
    <div>
        <div class="modal-body">
        <!-- <div class="inputs-container"> -->
            <div class="input-wrapper">
                <label>Назва</label>
                <InputComponent >
                    <input 
                        type="text"
                        v-model="store.state.modalInput.name"
                        :placeholder="modalPlaceholder.namePlaceholder"
                        @keyup.enter="saveProduct"
                        @keyup.esc="buttonClose"
                        :class="store.state.errorSaveProduct ? 'errorClassPlaceholder' : ''"
                        maxlength="70"
                    >
                </InputComponent>
            </div>
            <div class="unit-code-wrapper">
                <div class="input-wrapper input-unit-code-wrapper">
                    <label>Код товару</label>
                    <InputComponent>
                        <input
                            type="text"
                            v-model="store.state.modalInput.code"
                            :placeholder="modalPlaceholder.codePlaceholder"
                            @keyup.enter="saveProduct"
                            @keyup.esc="buttonClose"
                            :class="store.state.errorSaveProduct ? 'errorClassPlaceholder' : ''"
                            maxlength="6"
                        >
                    </InputComponent>
                </div>
                <div class="input-wrapper input-unit-code-wrapper">
                    <label>Од. вим.</label>
                    <select 
                        v-model="store.state.modalInput.unit"
                        @keyup.esc="buttonClose"
                        
                    >
                        <option value="шт">шт</option>
                        <option value="кг">кг</option>
                    </select>
                </div>
            </div>
            <div class="input-wrapper">
                <label>Штрихкод</label>
                <InputComponent>
                    <input
                        type="text"
                        v-model="store.state.modalInput.barcode"
                        :placeholder="modalPlaceholder.barcodePlaceholder"
                        @keyup.enter="saveProduct"
                        @keyup.esc="buttonClose"
                        :class="store.state.errorSaveProduct ? 'errorClassPlaceholder' : ''"
                        maxlength="15"
                    >
                </InputComponent>
                </div>
            <!-- <div class="price-wrapper">
                <div class="price-title">
                    <h3>Ціна</h3>
                </div>
                <div class="input-wrapper price-input-wrapper">
                    <label>Закупка</label>
                    <InputComponent>
                        <input
                            type="text"
                            v-model="store.state.modalInput.purchasePrice"
                            placeholder=""
                        >
                    </InputComponent>
                </div>
                <div class="input-wrapper price-input-wrapper">
                    <label>Роздрібна</label>
                    <InputComponent>
                        <input
                            type="text"
                            v-model="store.state.modalInput.retailPrice"
                            :input="validationInpust"
                            placeholder=""
                        >
                    </InputComponent>
                </div>
            </div> -->
            <!-- </div> -->
        
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, toRefs } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

// const store.state.modalInput = reactive({
//     name: '',
//     code: '',
//     unit: 'шт',
//     barcode: '',
//     // purchasePrice: '0',
//     // retailPrice: '0'
// });

const validationInpust = watch(()=> {
    const onlyNumbersRegex = /[^\d]/g;
    const delFirstSpaceRegex = /^\s+/g;
    const onlyOneSpaceRegex = / {2}/g;
    store.state.modalInput.name = store.state.modalInput.name.replace(delFirstSpaceRegex, "").replace(onlyOneSpaceRegex, " ");
    store.state.modalInput.code = store.state.modalInput.code.replace(onlyNumbersRegex, "");
    store.state.modalInput.barcode = store.state.modalInput.barcode.replace(onlyNumbersRegex, "");
})
const modalPlaceholder = reactive({
    namePlaceholder: 'Назва товару',
    codePlaceholder: 'Код товару',
    barcodePlaceholder: 'Штрихкод товару',
});
const errorMessage = ref('')

function clearInputs() {
    store.state.modalInput.name = ''
    store.state.modalInput.code = ''
    store.state.modalInput.unit = 'шт'
    store.state.modalInput.barcode = ''
}
const checkErrorInputModal = watch(()=> {
    if (store.state.errorSaveProduct) {
        addErrorPlaceholder()
    }
})
function addErrorPlaceholder() {
    // store.state.errorSaveProduct = true
    modalPlaceholder.namePlaceholder = 'Пусте поле вводу',
    modalPlaceholder.codePlaceholder = 'Пусте поле вводу',
    modalPlaceholder.barcodePlaceholder = 'Пусте поле вводу'
}
function removeErrorPlaceholder() {
    store.state.errorSaveProduct = false
    modalPlaceholder.namePlaceholder = 'Назва товару',
    modalPlaceholder.codePlaceholder = 'Код товару',
    modalPlaceholder.barcodePlaceholder = 'Штрихкод товару'
}


const computedValue = watch(()=> {
    if (store.state.modalInput.name !== '' 
    || store.state.modalInput.code !== ''
    || store.state.modalInput.barcode !== '') {
        removeErrorPlaceholder()
    }
    if (store.state.modalInput.name !== '' 
    && store.state.modalInput.code !== ''
    && store.state.modalInput.barcode !== '') {
        removeErrorPlaceholder()
    }
})


</script>

<style lang="scss" scoped>
.errorClassPlaceholder {
    &::placeholder {
        color: $icon-del;
    }
    border-color: $icon-del;
}
.modal-body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-between;
}
.input-wrapper {
    display: flex;
    column-gap: rem(10);
    row-gap: rem(4);
    align-items: center;
    padding: rem(10) 0 rem(10) 0;
    border-bottom: solid 1px $strokeMenu;
    
}
label {
    font-weight: 500;
    width: 100px;
    text-align: end;
}
input {
    display: flex;
    width: 100%;
    display: block;
}

select {
    width: 100%;
    // width: 30px;
    // font-size: $fs-default;
    color: $coolorDarkTxt;
}
.unit-code-wrapper{
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid $strokeMenu;
}
.input-unit-code-wrapper {
    border: none;
    label {
        width: 100px;
        white-space: nowrap;
    }
    input {
        width: 9em;
    }
    select {
        width: 9em;
    }

}
.price-wrapper {
    padding: $pd-page;
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template-rows: 1fr auto; 
    grid-template-columns: repeat(2, 50%);
}
.price-title {
    grid-row: 1; 
    grid-column: 1 / span 3;
    background-color: $price-container-bg;
    margin: 0 auto;
    &:nth-child(1) {
        border: 1px solid $strokeMenu;
        border-bottom: none;
        padding: rem(10);
        margin-bottom: -1px;
        z-index: 3;
        position: relative;
    }
}
.price-input-wrapper {
    flex-direction: column;
    display: flex;
    border: none;
    padding-bottom: rem(15);
    z-index: 2;
    position: relative;
    background-color: $price-container-bg;
    
    &:nth-child(2) {
        border-top: 1px solid $strokeMenu;
        border-left: 1px solid $strokeMenu;
        border-bottom: 1px solid $strokeMenu;
        // border-radius: rem(20) 0 0 rem(20);
    }
    &:nth-child(3) {
        border-top: 1px solid $strokeMenu;
        border-right: 1px solid $strokeMenu;
        border-bottom: 1px solid $strokeMenu;
        // border-radius: 0 rem(20) rem(20) 0;
    }
}


</style>