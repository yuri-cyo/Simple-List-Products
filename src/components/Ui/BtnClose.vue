<template>
    <div>
        <button 
            class="btn btn-this"
            type="button"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.btn-this {
    background-color: $btn-close;
    box-shadow: $btn-shadow rgba($btn-close, $btn-shadow-opacity);
    &:hover{
        background-color: $btn-close-hvr;
    }
}
</style>