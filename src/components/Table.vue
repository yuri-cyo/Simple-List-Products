<template>
    <div class="table-container">
        <table class="table">
            <thead v-show="false">
                <tr>
                    <th>Код товару</th>
                    <th>Назва</th>
                    <th>Од. вим.</th>
                    <th>Штрихкод</th>
                </tr>
                <tr>
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
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(product, index) in products"
                :key="index + product.code"
                @click="contextMenu"
                class="tr-body">
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.units }}</td>
                    <td>{{ product.barcode }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { reactive, watch, computed, ref } from 'vue';

const props = defineProps(['stateNewProduct'])

const products = reactive([
    {
    code: 1,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '123123123124',
    },
    {
    code: 2,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
    {
    code: 3,
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: '1241234123123123'
    },
])

const addProductOnTable = watch(() => {
    console.log(props.stateNewProduct);
    if (props.stateNewProduct
            && props.stateNewProduct.code
            && props.stateNewProduct.name
            && props.stateNewProduct.barcode
        ) {
        products.push({
            code: props.stateNewProduct.code,
            name: props.stateNewProduct.name,
            units: props.stateNewProduct.units,
            barcode: props.stateNewProduct.barcode
        });
    }
});
const togleContextMenu = ref(false)
function contextMenu(event) {
    event.stopPropagation();
    const childElement = event.currentTarget;
    togleContextMenu.value = !togleContextMenu.value
    const parentElement = event.target.parentElement;
    parentElement.childElement
    if (togleContextMenu) {
        childElement.classList.toggle('isSelected')
        childElement.dataset.isSelected = togleContextMenu.value
    } 
    console.log(event.target);
    console.log(togleContextMenu.value);
    // console.log(parentElement.Node.childElement);
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
    thead {
        position: sticky;
        top: 42px;
        z-index: 3;
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
</style>