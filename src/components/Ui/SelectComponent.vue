<template>
    <select name="" id="">
        <slot></slot>
    </select>
</template>

<script setup>

</script>

<style lang="scss" scoped>
select {
        padding: rem(5);
        border: 1px solid $strokeMenu;
        border-radius: rem(5);
        max-width: 100%;
        &:focus {
            border: 1px solid $table-input-focus-border;
            outline: none;
            background-color: $table-input-focus-bg;
        }
    }
</style>