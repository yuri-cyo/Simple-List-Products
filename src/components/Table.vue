<template>
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>Код товару</th>
                    <th>Назва</th>
                    <th>Од. вим.</th>
                    <th>Штрихкод</th>
                    <th>Закупка</th>
                    <th>Роздрібна</th>
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
                v-for="poduct in poducts"
                :key="poducts.code"
                class="tr-body">
                    <td>{{ poduct.code }}</td>
                    <td>{{ poduct.name }}</td>
                    <td>{{ poduct.units }}</td>
                    <td>{{ poduct.barcode }}</td>
                    <td>{{ poduct.purchasePrice }}</td>
                    <td>{{ poduct.retailrice }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const poducts = reactive([
    {
    code: '0001',
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: 'шт',
    purchasePrice: '12',
    retailrice: '21',
    },
    {
    code: '0002',
    name: 'Pepsi Black 1л',
    units: 'шт',
    barcode: 'шт',
    purchasePrice: '12',
    retailrice: '22',
    },
])

// const props = defineProps({isModal})

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