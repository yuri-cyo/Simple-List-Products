<template>
  <div class="wrapper">
    <div class="container">
      <Menu
        @action="myFunc"
        class="menu"
        :myProductName="productName"
        >
      </Menu>
      <div class="content-container">
        <router-view
        :myProductName="productName"
        ></router-view>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

let productName = 'Товари';

const myFunc = (arg) => {
  console.log(arg);
  productName = arg;
}

</script>

<style lang="scss">
.wrapper {
  // max-width: 1575px;
  // margin: 0 auto;
  // border: 1px solid #123412;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  flex: 1 1 auto;
  // width: 1000px;
}

.menu {
// position: relative;
}

.content-container {
  // padding: 0 rem(10);
  width: 100%;
}

.header {
position: fixed;
}

.page {
// padding-top: rem(60) !important;
}

</style>
