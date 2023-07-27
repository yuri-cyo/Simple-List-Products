<template>
    <div class="table-container">
        <table class="table">
            <thead>
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
                v-for="product in products"
                :key="product.code"
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
import { reactive, watch, computed } from 'vue';

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
    }
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

</script>
    
<style lang="scss" scoped>
.table-container {
    padding: $pd-page;
    border: none;
}
.table {
    width: 100%;
    border: 1px solid $strokeMenu;
    border-collapse: collapse;
    font-size: rem(13);
    thead {
        position: sticky;
        top: 52px;
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
        &:nth-child(even) {
            background-color: $color-tr-even;
        }
        &:hover {
            cursor: pointer;
            &::after {
                content: '';
                position: absolute;
                top: -0.5px;
                bottom: -0.5px;
                left: -1px;
                right: -1px;
                border: rem(1) solid $icon-del;
                z-index: 100;
            }
        }
        td {
            position: relative;
            z-index: 101;
        }
    }
}
</style>