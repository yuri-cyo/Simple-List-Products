<template>
  <div class="wrapper">
    <div class="container">
      <Menu
        class="menu"
        :productName="productName"
        :docName="docName"
        :setName="setName"
        >
      </Menu>
      <div class="content-container">
        <router-view
        class="router-view"
        :productName="productName"
        :docName="docName"
        :setName="setName"
        ></router-view>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

// const productName = 'Товари';
// const docName = 'Документи'
// const setName = 'Опції'

const trimInputMixin = {
  methods: {
    handleInput(event) {
      event.target.value = event.target.value.trim();
    }
  }
};

</script>

<style lang="scss">
.wrapper {
  // max-width: 1575px;
  // margin: 0 auto;
  // border: 1px solid #123412;

  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex: 1 1 auto;
  // width: 100%;
  // width: 1000px;
}

.content-container {
  // padding: 0 rem(10);
  padding: $pd-page;
  // display: flex;
  // flex-direction: column;
  // flex: 1 1 auto;
  margin-top: 43px;
  // width: 100%;
  height: calc(100vh - $header-h);
  width: calc(100vw - $w-menu);
  overflow: auto;
  position: relative;
}

.router-view {
  // width: 100vw;
  // padding: 0;
  // margin: 0;
}

.header {
position: fixed;
}


</style>
