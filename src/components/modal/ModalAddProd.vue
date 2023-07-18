<template>
    <div>
        
            <div v-show="modalActive" class="modal-fone">
                <div class="modal-wrapper">
                    <div class="modal-header">
                        <div class="title-modal">
                            <span class="icon-product"></span>
                            <h4 class="title-text">Картка товару: {{ nameValue }}</h4>
                        </div>
                    </div>
                    <div class="modal-body">
                    <!-- <div class="inputs-container"> -->
                        <div class="input-wrapper">
                            <Label>Назва</Label>
                            <InputComponent >
                                <input 
                                    type="text"
                                    v-model="nameValue"
                                >
                            </InputComponent>
                        </div>
                    <div class="unit-code-wrapper">
                        <div class="input-wrapper input-unit-code-wrapper">
                            <Label>Код товару</Label>
                            <InputComponent>
                                <input type="text">
                            </InputComponent>
                        </div>
                        <div class="input-wrapper input-unit-code-wrapper">
                            <Label>Од. вим.</Label>
                            <SelectComponent>
                                <option value="">шт</option>
                                <option value="">кг</option>
                            </SelectComponent>
                        </div>
                    </div>
                        <div class="input-wrapper">
                            <Label>Штрихкод</Label>
                            <InputComponent>
                                <input type="text">
                            </InputComponent>
                        </div>
                    <div class="price-wrapper">
                        <div class="price-title">
                            <h3>Ціна</h3>
                        </div>
                            <div class="input-wrapper price-input-wrapper">
                                <Label>Закупка</Label>
                                <InputComponent>
                                    <input type="text">
                                </InputComponent>
                            </div>
                            <div class="input-wrapper price-input-wrapper">
                                <Label>Роздрібна</Label>
                                <InputComponent>
                                    <input type="text">
                                </InputComponent>
                            </div>
                    </div>
                    <!-- </div> -->
                    <div class="btns-wrapper">
                        <slot></slot>
                    </div>
                    
                </div>
                </div>
            </div>
        
    </div>
</template>

<script setup>
import { ref, toRef } from 'vue';
   const props = defineProps({
    modalActive: {
        type: Boolean
    }
   })

   const nameValue = ref('')

   const nameProduct = ref('Назва')
   const codeProduct = ref('Код')
   const unitProduct = ref('Од. вим.')
   const barcodeProduct = ref('Штрихкод')
   const purchasePrice = ref('Штрихкод')
   const retailrice = ref('Штрихкод')

</script>

<style lang="scss" scoped>

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

    background-color: $bgMenu;

    // z-index: 100;
    backdrop-filter: blur(5px);
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
    min-width: 20%;
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
    justify-content: space-around;
    border-bottom: 1px solid $strokeMenu;
}
.input-unit-code-wrapper {
    flex-direction: column;
    border: none;

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
    grid-column: 1 / span 3; /* розтягнення блоку1 на всю ширину */
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
        border-bottom: 1px solid $bgMenu;
        padding: rem(10);
        margin-bottom: -1px;
        z-index: 2;
        position: relative;
    }
}
.price-input-wrapper {
    flex-direction: column;
    display: flex;
    border: none;
    padding-bottom: rem(15);
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
    width: 100%;
    padding-top: rem(20);
    justify-content: flex-end;
    gap: rem(10);
}

</style>