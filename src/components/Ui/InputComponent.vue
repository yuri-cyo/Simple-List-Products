<template>
    <div>
        <input type="text">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
input {
        padding: rem(5);
        border: 1px solid $strokeMenu;
        border-radius: rem(5);
        // min-width: 100%;
        &:focus {
            border: 1px solid $table-input-focus-border;
            outline: none;
            background-color: $table-input-focus-bg;
        }
    }
</style>