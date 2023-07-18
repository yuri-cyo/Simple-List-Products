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
    background-color: $icon-del;
}
</style>