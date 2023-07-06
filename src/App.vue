<template>
  <div class="wrapper">
    <div class="container">
      <Menu class="menu"></Menu>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script setup>

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
}

.menu {
// position: relative;
}

.content-container {
  // padding: 0 rem(10);
}

.header {
position: fixed;
}

.page {
// padding-top: rem(60) !important;
}

</style>
