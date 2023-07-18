<template>
    <div class="header-container">
        <header class="header-wrapper">
				<div class="title title-wrapper">
                    <slot class="title-wrapper"></slot>
                   
					<!-- <span class="icon-product"></span>
					<h2 class="title product-title"> {{ myProductName }}</h2> -->
				</div>
                <slot name="actions"></slot>
        </header>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header-container {
    // position: fixed;
    // overflow: hidden;
    // z-index: 2;
    // left: 0;
    // width: 100%;
    // padding-left: 300px;
    // position: relative;
    // height: 1500px;
}
.header-wrapper {
    position: fixed;
    right: 0;
    // position: sticky;
    top: 0;
    left: $w-menu;
    display: flex;
    // min-width: 100vw;
    
    min-width: 400px;
    // flex: 0 1 100%;
    flex-wrap: wrap;
    row-gap: rem(7);
    column-gap: rem(20);
    justify-content:center;
    align-items: center;
    padding: rem(5);
    border-bottom: 1px solid $strokeMenu;
    background-color: $bgMenu;
    background-color: $color-tr-even;
    // position: relative;
}

.title-wrapper {
    // margin-left: 300px;
    display: flex;
    flex-wrap: nowrap;
    gap: rem(10);
    // margin-left: auto;
    // margin-right: auto;
    position: relative;
    // margin-right: -20px;
    // margin-left: -50%;
}


</style>