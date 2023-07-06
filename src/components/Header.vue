<template>
    <div>
        <header class="header">
            <div class="header__content">
                <h1>HEADER</h1>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.header {
    // padding: $pd-page;

    background-color: rgb(211, 148, 228);
    // position: absolute;
    width: 100%;
    &__content{
        // position: fixed;
        padding: $pd-page;

    }
}

</style>