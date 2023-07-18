<template>
    <div>
        <div v-show="modalActive" class="modal-wrapper">
            <div class="modal-body">
                <div class="inputs-wrapper">
                    <input type="text">
                </div>
                <div class="btns-wrapper">
                    <slot></slot>
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
.modal-wrapper {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: $pd-page;
    transform: translate(-50%, -50%);
    background-color: #71707031;
    z-index: 100;
    backdrop-filter: blur(6px);
    border-radius: rem(20);
    border: 5px solid $strokeMenu;
    overflow: hidden;
}
.modal-body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-between;
    // align-items: end;
}
.btns-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: rem(10);
}

</style>