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
    background-color: $btn-save;
    box-shadow: $btn-shadow rgba($icon-del, $btn-shadow-opacity);
    &:hover{
        background-color: $btn-save-hvr;
    }
}
</style>