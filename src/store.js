import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        count: 0,
        products: [
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
        ]
    }
  },
  mutations: {
    increment (state) {
      state.count = state.count + 2
    }
  }
})

export default store