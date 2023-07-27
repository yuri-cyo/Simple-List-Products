<template>
    <div>
        <!-- <button 
            class="btn btn-this"
            type="button"
        > -->
            <slot></slot>
        <!-- </button> -->
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

:deep button {
    background-color: $btn-save;
    // box-shadow: $btn-shadow rgba($icon-del, $btn-shadow-opacity);
    border: none;
    position: relative;

    &::before,&::after{
        content:'';
        position: absolute;
        left: 50%;
        top: 50%;
        height: rem(1);
        width: 60%;
        background-color: #fff;
    }
    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover{
        background-color: $btn-save-hvr;
    }
}
</style>