import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        menu: {
          goods: 'Товари',
          documents: 'Документи',
          options: 'Опції', 
        },
        modal: {
          active: false,
        },
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
        ],
        selectedProductIdx: null,
        selectedProduct: null,
    }
  },
  mutations: {
    increment (state) {
      state.count = state.count + 2
    },
    toggleModal (state) {
      // modalActive.value = !modalActive.value
      state.modal.active = !state.modal.active
    }
  }
})

export default store