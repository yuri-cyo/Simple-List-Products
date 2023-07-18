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

const productName = 'Товари';
const docName = 'Документи'
const setName = 'Опції'

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
.menu {
  min-height: 100vh;

}

.content-container {
  // padding: 0 rem(10);
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  // width: 100%;
  // overflow-x: scroll;
  overflow: scroll;
  height: 100vh;
  width: calc(100vw - 300px);
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
