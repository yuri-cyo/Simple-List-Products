<template>
    <div>
        <!-- <input 
            v-model="inputValue"
            type="text"
        > -->
        <slot class="slot-content"></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');

// const trimmedValue = computed(() => {
//   return inputValue.value.trim();
// });
// const props = defineProps({
//     nameValue: {
//         type: String
//     }
// })
// const nameValueRef = toRef(props);

</script>

<style lang="scss" scoped>
div {
    flex: 1 1 auto;
}
// ::v-deep .input-component {
:deep input {
        // color: #04888c;
        padding: rem(5);
        border: 1px solid $strokeMenu;
        border-radius: rem(5);
        min-width: 100%;
        &:focus {
            border: 1px solid $table-input-focus-border;
            outline: none;
            background-color: $table-input-focus-bg;
        }
}
</style>