<template>
    <div 
    class="modal-fone">
        <div class="modal-wrapper">
            <div class="modal-header">
                <div class="title-modal">
                    <slot name="header"></slot>
                </div>
                <!-- <BtnCrossClose>
                    <button class="btn" type="button" @click="buttonClose"></button>
                </BtnCrossClose> -->
                <slot name="btnCrossClose"></slot>
            </div>
            <slot></slot>
            <slot name="btns"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, toRefs } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

function buttonClose() {
    store.commit('toggleModal')
}

</script>

<style lang="scss" scoped>

.modal-fone {
    position: fixed;
    background-color: #53535370;
    // backdrop-filter: blur(4px);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
}
.modal-wrapper {
    // width: 500px;
    max-width: 600px;
    // height: 350px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: $pd-page;
    transform: translate(-50%, -50%);
    // backdrop-filter: blur(4px);
    // background-color: $bgMenu;
    background-color: #ffffffb8;
    
    border-radius: rem(20);
    border: 5px solid rgba(14, 14, 14, 0.413);
    overflow: hidden;
}

.modal-header {
    padding-bottom: $pd-page;
    border-bottom: 1px solid $strokeMenu;
    display: flex;
    width: 100%;
    justify-content:space-between;
    align-items: center;
}
.title-modal {
    display: flex;
    gap: rem(10);
    width: 94%;
}
:deep span {
    font-size: 22px;
    margin-top: -3px;
}
:deep .title-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
}

:deep .btns-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: rem(20);
    // justify-content: flex-end;
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
:deep .modal-wrapper-del-message {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-top: rem(10);

    span {
        font-size: rem(16);
    }
    strong {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        // white-space: nowrap;
        // word-wrap: break-word;
        // overflow-wrap: break-word;
        max-width: 270px;

    }
    .icon-del-icon {
        margin-top: rem(20);
        font-size: rem(70);
        color: $icon-del;
    }
}


</style>