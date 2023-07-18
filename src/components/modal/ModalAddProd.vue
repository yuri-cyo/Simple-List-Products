<template>
    <div>
        
            <div v-show="modalActive" class="modal-fone">
                <div class="modal-wrapper">
                    <div class="modal-body">
                    <!-- <div class="inputs-container"> -->
                        <div class="input-wrapper">
                            <Label>Код товару</Label>
                            <InputComponent></InputComponent>
                        </div>
                        <div class="input-wrapper">
                            <Label>Назва</Label>
                            <InputComponent></InputComponent>
                        </div>
                        <div class="input-wrapper">
                            <Label>Од. вим.</Label>
                            <SelectComponent>
                                <option value="">шт</option>
                                <option value="">кг</option>
                            </SelectComponent>
                            <!-- <InputComponent></InputComponent> -->
                        </div>
                        <div class="input-wrapper">
                            <Label>Штрихкод</Label>
                            <InputComponent></InputComponent>
                        </div>
                        <div class="input-wrapper">
                            <Label>Закупка</Label>
                            <InputComponent></InputComponent>
                        </div>
                        <div class="input-wrapper">
                            <Label>Роздрібна</Label>
                            <InputComponent></InputComponent>
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
   const props = defineProps({
    modalActive: {
        type: Boolean
    }
   })

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
    height: 400px;
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
.modal-body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-between;
    // align-items: end;
}
.input-wrapper {
    display: flex;
    gap: rem(10);
    align-items: center;
    border-bottom: solid 1px $strokeMenu;
    padding: rem(10) 0 rem(10) 0;
}
label {
    font-weight: 500;
    min-width: 30%;
    text-align: end;
}
input {
    display: flex;
    width: 100%;
    display: block;
}

select {
    width: 100%;
    font-size: $fs-default;
    color: $coolorDarkTxt;
}
.btns-wrapper {
    display: flex;
    width: 100%;
    padding-top: rem(20);
    justify-content: flex-end;
    gap: rem(10);
}

</style>