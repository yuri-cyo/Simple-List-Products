<template>
        <header class="header-wrapper">
				<div class="title title-wrapper">
                    <slot class="title-wrapper"></slot>
                   
					<!-- <span class="icon-product"></span>
					<h2 class="title product-title"> {{ myProductName }}</h2> -->
				</div>
                <slot 
                    name="actions"
                    class="actions"
                ></slot>
        </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: rem(7);
    column-gap: rem(20);
    justify-content:center;
    align-items: center;
    padding: $pd-page;
    border-bottom: 1px solid $strokeMenu;
    background-color: $bgMenu;
    // background-color: $color-tr-even;
    position: relative;
}

.title-wrapper {
    display: flex;
    flex-wrap: nowrap;
    gap: rem(10);
    // margin-left: auto;
    // margin-right: auto;
    position: relative;
    // margin-right: -20px;
    // margin-left: -50%;
}

.actions {
    // position: absolute;
    // right: 0;
    // margin-left: -100%;
}

</style>