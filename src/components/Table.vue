<template @btnDelProduct="btnDelProduct">
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>Код товару</th>
                    <th>Назва</th>
                    <th>Од. вим.</th>
                    <th>Штрихкод</th>
                </tr>
                <!-- <tr>
                    <th>
                        <InputComponent>
                            <input 
                                type="text"
                            >
                        </InputComponent>
                    </th>
                    <th>
                        <InputComponent>
                            <input 
                                type="text"
                            >
                        </InputComponent>
                    </th>
                    <th>
                        <InputComponent>
                            <input 
                                type="text"
                            >
                        </InputComponent>
                    </th>
                    <th>
                        <InputComponent>
                            <input 
                                type="text"
                            >
                        </InputComponent>
                    </th>
                </tr> -->
            </thead>
            <tbody>
                <tr
                v-for="(product, index) in store.state.products"
                
                :key="index"
                @click="contextMenu(index, product, $event)"
                :class="{ 'isSelected': product === store.state.selectedProduct }"
                class="tr-body">
                    <td data-code>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.units }}</td>
                    <td>{{ product.barcode }}</td>
                </tr>
                <!-- <p>{{btnDelProduct}}</p> -->
            </tbody>
        </table>
        <div v-show="!store.state.products[0]" class="empty-products"><span class="empty-products__text">Список товарів <b>порожній</b>! Нажміть <b>кнопку</b> <span class="icon icon-add-product"></span> для <b>добавлення товарів</b>!</span></div>
    </div>
</template>

<script setup>
import { reactive, watch, computed, ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const props = defineProps(['stateNewProduct'])

const addProductOnTable = watch(() => {
    console.log(props.stateNewProduct);
    
    if (props.stateNewProduct
            && props.stateNewProduct.code
            && props.stateNewProduct.name
            && props.stateNewProduct.barcode
        ) {
        store.state.products.push({
            code: props.stateNewProduct.code,
            name: props.stateNewProduct.name,
            units: props.stateNewProduct.units,
            barcode: props.stateNewProduct.barcode
        });

    }
});

function btnDelProduct() {
    console.log('btnDelProduct');
}

// ========================== out-click =======================================
const handleClickOutside = (event) => {
    // event.preventDefault()
    console.log('out');
      if (!event.target.closest('tbody') 
        && !event.target.closest('.btns-actions')
        && !event.target.closest('.modal-fone')
    ) {
        store.state.selectedProduct = null;
      }
    };
// const conteiner = document.querySelector('.content-container')

    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });
//*===============================================================

// const selectedProductIdx = ref(null)
function contextMenu(index, product, event) {
    store.state.selectedProductIdx = index
    store.state.selectedProduct = product
    // if (!event.target.closest('tr')) {
    //     console.log('out-click', event.target);
    //     // store.state.selectedProduct = null
    //   }
    // event.stopPropagation();
    // const childElement = event.currentTarget;
    // const dataSelected = childElement.dataset.isSelected;
    // const parentElement = event.target.parentElement;

    // const childElement = childComponentRef.value.$el;

    // const elementWithDataCode = childElement.querySelector('[data-code="your-data-code"]');
    // childElement.classList.toggle('isSelected')
    console.log(index);
    console.log(product);
    // console.log(product.code);
    

    // const isSelected = childElement.getAttribute('data-selected') === 'true';
  
//   if (!isSelected) {
//     childElement.setAttribute('data-selected', 'true');
//     childElement.classList.add('isSelected');
//     togleContextMenu.value = true
//   } else {
//     childElement.setAttribute('data-selected', 'false');
//     childElement.classList.remove('isSelected');
//     togleContextMenu.value = false
//   }
}

function removeProduct(event) {
    // event.target.removeElement()
    event.stopPropagation();
    const childElement = event.currentTarget;
    childElement.remove() 
    console.log(event.target);
}

</script>
    
<style lang="scss" scoped>


.table-container {
    // padding: $pd-page;
    // padding-top: 0;
    // border: none;
    // border: 1px solid transparent;
    // overflow: auto;
    max-width: 100%;
    // margin: 10px;
}
.table {
    width: 100%;
    min-width: 500px;
    // height: 100%;
    border-collapse: collapse;
    font-size: rem(13);
    position: relative;
    // border-top: 1px solid $strokeMenu
    border: 1px solid $strokeMenu !important;
    box-sizing: content-box;
    &::before{
        // content:'';
        // border: 1px solid $strokeMenu !important;
        // position: absolute;
        // left: -1px;
        // right: -1px;
        // top: 0px;
        // bottom: -1px;
        // // z-index: -1
    }
    thead tr {
        top: calc($pd-page - $pd-page - $pd-page - 1px);
        position: sticky;
        z-index: 999;

        // &::before {
        //     content: '';
        //     border: 2px solid black !important;
        //     left: 0;
        //     top: 0;
        //     right: 0;
        //     bottom: 0;

        // }
    }
    th {

    }
    th, td {
        text-align: start;
        padding: rem(5);

        &:not(:last-child) {
            border-right: 1px solid $strokeMenu;
        }
    }
    th {
        background-color: $color-th;
         &::before {
            position: absolute;
            content: '';
            border: 1px solid $strokeMenu !important;
            top: -0.5px;
            bottom: -0.5px;
            left: -0.5px;
            right: -0.5px;
            z-index: -1;

        }
    }
    tr:nth-child(odd) {
        background-color: $color-tr-odd;
    }

    .tr-body {
        position: relative;
        // z-index: 2;
        &:nth-child(even) {
            background-color: $color-tr-even;
        }
        &:hover {
            cursor: pointer;
            box-sizing: border-box;
            position: relative;
            z-index: 100;
 
            ::after {
                content: '';
                border: 1px solid $icon-del !important;
                // border-right: none;
                // border-left: none;
                position: absolute;
                top: -0.5px;
                bottom: -0.5px;
                left: -0.5px;
                right: -0.5px;
                z-index: -1;
            }
        }
        td {
            // position: relative;
            
            z-index: 1000000 !important; // allow table selection for copying highlighted text
        }
    }

    .isSelected {
        background-color: hsla(17, 100%, 50%, 0.053) !important;
        z-index: 10;
        ::after {
            content: '';
            position: absolute;
            top: -0.5px;
            bottom: -0.5px;
            left: -0.5px;
            right: -0.5px;
            border: 1px solid hsl(38, 100%, 50%);
            // z-index: 99999;
            
        }
        :first-child {
            &:before {
                content: '';
                position: absolute;
                    width: 5px;
                    height: 75%;
                    border-radius: 100vh;
                    background-color: $icon-del;
                    left: -8px;
                    top: 50%;
                    transform: translateY(-50%);
            }
        }
    }
}

.empty-products {
    color: #444444;
    display: flex;
    flex-direction: column;
    // line-height: 2;
    &__text {
        position: relative;
        margin-left: 12px;
        &:before {
                content: '';
                position: absolute;
                    width: 5px;
                    height: 75%;
                    border-radius: 100vh;
                    background-color: $icon-del;
                    left: -8px;
                    top: 50%;
                    transform: translateY(-50%);
            }
    }
    .icon{
        color: $icon-add;
        font-size: rem(20);
        margin: auto 0;
        // vertical-align: middle
    }
    
}
</style>