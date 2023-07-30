<template>
    <div>
        
            <div 
                class="modal-fone"
                v-show="modalActive"
            >
                <div class="modal-wrapper">
                    <div class="modal-header">
                        <div class="title-modal">
                            <span class="icon-product"></span>
                            <h4 class="title-text">Картка товару: {{ modalInput.nameValue }}</h4>
                        </div>
                        <BtnCrossClose>
                            <button class="btn" type="button" @click="buttonClose"></button>
                        </BtnCrossClose>
                    </div>
                    <div class="modal-body">
                    <!-- <div class="inputs-container"> -->
                        <div class="input-wrapper">
                            <label>Назва</label>
                            <InputComponent >
                                <input 
                                    type="text"
                                    v-model="modalInput.nameValue"
                                    :placeholder="modalPlaceholder.namePlaceholder"
                                    @keyup.enter="saveProduct"
                                    @keyup.esc="buttonClose"
                                    :class="errorSaveProduct ? 'errorClassPlaceholder' : ''"
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
                                        v-model="modalInput.codeValue"
                                        :placeholder="modalPlaceholder.codePlaceholder"
                                        @keyup.enter="saveProduct"
                                        @keyup.esc="buttonClose"
                                        :class="errorSaveProduct ? 'errorClassPlaceholder' : ''"
                                        maxlength="6"
                                    >
                                </InputComponent>
                            </div>
                            <div class="input-wrapper input-unit-code-wrapper">
                                <label>Од. вим.</label>
                                <select 
                                    v-model="modalInput.unitValue"
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
                                    v-model="modalInput.barcodeValue"
                                    :placeholder="modalPlaceholder.barcodePlaceholder"
                                    @keyup.enter="saveProduct"
                                    @keyup.esc="buttonClose"
                                    :class="errorSaveProduct ? 'errorClassPlaceholder' : ''"
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
                                        v-model="modalInput.purchasePrice"
                                        placeholder=""
                                    >
                                </InputComponent>
                            </div>
                            <div class="input-wrapper price-input-wrapper">
                                <label>Роздрібна</label>
                                <InputComponent>
                                    <input
                                        type="text"
                                        v-model="modalInput.retailPrice"
                                        :input="validationInpust"
                                        placeholder=""
                                    >
                                </InputComponent>
                            </div>
                        </div> -->
                        <!-- </div> -->
                            <div class="btns-wrapper">
                                <BtnClose @click="buttonClose">Закрити</BtnClose>
                                <BtnSave 
                                    @click="saveProduct"
                                >Зберегти</BtnSave>
                            </div>
                    
                    </div>
                </div>
            </div>
        
    </div>
</template>

<script setup>
import { ref, reactive, watch, toRefs } from 'vue';
// import BtnCrossСlose from '../Ui/btnCrossСlose.vue';
    const props = defineProps(['modalActive'])


const modalInput = reactive({
    nameValue: '',
    codeValue: '',
    unitValue: 'шт',
    barcodeValue: '',
    // purchasePrice: '0',
    // retailPrice: '0'
});

const validationInpust = watch(()=> {
    const onlyNumbersRegex = /[^\d]/g;
    const delFirstSpaceRegex = /^\s+/g;
    const onlyOneSpaceRegex = / {2}/g;
    modalInput.nameValue = modalInput.nameValue.replace(delFirstSpaceRegex, "").replace(onlyOneSpaceRegex, " ");
    modalInput.codeValue = modalInput.codeValue.replace(onlyNumbersRegex, "");
    modalInput.barcodeValue = modalInput.barcodeValue.replace(onlyNumbersRegex, "");

})
const modalPlaceholder = reactive({
    namePlaceholder: 'Назва товару',
    codePlaceholder: 'Код товару',
    barcodePlaceholder: 'Штрихкод товару',
});
const errorSaveProduct = ref(false)
const errorMessage = ref('')

function clearInputs() {
    modalInput.nameValue = ''
    modalInput.codeValue = ''
    modalInput.unitValue = 'шт'
    modalInput.barcodeValue = ''
}
function addErrorPlaceholder() {
    errorSaveProduct.value = true
    modalPlaceholder.namePlaceholder = 'Пусте поле вводу',
    modalPlaceholder.codePlaceholder = 'Пусте поле вводу',
    modalPlaceholder.barcodePlaceholder = 'Пусте поле вводу'
}
function removeErrorPlaceholder() {
    errorSaveProduct.value = false
    modalPlaceholder.namePlaceholder = 'Назва товару',
    modalPlaceholder.codePlaceholder = 'Код товару',
    modalPlaceholder.barcodePlaceholder = 'Штрихкод товару'
}

const emit = defineEmits(['btnClose', 'objSaveProduct'])


function buttonClose() {
    emit('btnClose')
    errorSaveProduct.value = false
    removeErrorPlaceholder()
    clearInputs()
}

function saveProduct() {
    // console.log("Sveeee");
    modalInput.nameValue = modalInput.nameValue.trim()
    const sendVar = {
        code: modalInput.codeValue,
        name: modalInput.nameValue,
        units: modalInput.unitValue,
        barcode: modalInput.barcodeValue
    }
    if (modalInput.nameValue == '' 
    || modalInput.codeValue == ''
    || modalInput.barcodeValue == '') {
        addErrorPlaceholder()
    }
    if (modalInput.nameValue !== '' 
    && modalInput.codeValue !== ''
    && modalInput.barcodeValue !== '') {
        console.log(sendVar);
        emit('objSaveProduct', sendVar)
        buttonClose()
    } else {
        addErrorPlaceholder()
    }
}

const computedValue = watch(()=> {
    if (modalInput.nameValue !== '' 
    || modalInput.codeValue !== ''
    || modalInput.barcodeValue !== '') {
        removeErrorPlaceholder()
    }
    if (modalInput.nameValue !== '' 
    && modalInput.codeValue !== ''
    && modalInput.barcodeValue !== '') {
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
    // box-shadow: inset 0 0 5px $icon-del;
}
.modal-fone {
    position: fixed;
    background-color: #53535350;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
}
.modal-wrapper {
    width: 500px;
    // height: 350px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: $pd-page;
    transform: translate(-50%, -50%);

    
    // z-index: 100;
    backdrop-filter: blur(10px);
    // background-color: $bgMenu;
    background-color: #f1f2f6a4;
    
    border-radius: rem(20);
    border: 5px solid rgba(14, 14, 14, 0.413);
    overflow: hidden;
}

.modal-header {
    padding-bottom: $pd-page;
    border-bottom: 1px solid $strokeMenu;
    display: flex;
    // justify-content:center;
    align-items: center;
}
.title-modal {
    display: flex;
    gap: rem(5);
    // width: calc(100% - 20px);
    width: 100%;
    // text-overflow: ellipsis;
}

.title-text {
    // flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // max-width: 100%;
}
.modal-body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-between;
    &:first-child{
        background-color: $coolorDarkTxt;
    }
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
    // flex-direction: column;
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
    // display: flex;
    // justify-content: space-around;
    // border-bottom: 1px solid $strokeMenu;
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template-rows: 1fr auto; /* 1fr для розтягнутого блоку, auto для решти блоків */
    grid-template-columns: repeat(2, 50%);
}
.price-title {
    grid-row: 1; /* розташування блоку1 в першому рядку */
    grid-column: 1 / span 3;
    background-color: $price-container-bg;
    // color: $icon-edit;
    // display: flex;
    // justify-content:center;align-items: center;
    margin: 0 auto;
    &:nth-child(1) {
        // border-top: 1px solid $strokeMenu;
        // border-left: 1px solid $strokeMenu;
        // border-bottom: 1px solid $strokeMenu;
        // background-color: $coolorDarkTxt;
        // border-radius: rem(20) 0 0 rem(20);
        border: 1px solid $strokeMenu;
        border-bottom: none;
        padding: rem(10);
        margin-bottom: -1px;
        z-index: 3;
        position: relative;
        // background-color: #a41212;
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
    // background-color: #ffea002a;
    // border-top: 1px solid $strokeMenu;
    // border-top: 1px solid $strokeMenu;
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
.btns-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: rem(20);
    justify-content: flex-end;
    gap: rem(10);

    p {
        color: $icon-del;
        margin: 0 auto;
        // color: #fff;
        // background-color: $icon-del;
        box-shadow: $btn-shadow $icon-del;
        font-weight: bold;
        padding: rem(5);
        border-radius: rem(10);
        border: 1px solid $icon-del;
    }
}

</style>