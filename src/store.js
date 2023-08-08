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
          delete: false,
        },
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

        modalInput: {
          name: '',
          code: '',
          unit: 'шт',
          barcode: '',
          // purchasePrice: '0',
          // retailPrice: '0'
      },
      errorSaveProduct: false,
    }
  },
  actions: {
    // closeAllModal (context){
    //   for (const key in context.modal)
    //   context.modal[key] = true
    // },
  },
  mutations: {
    toggleModal (state) {
        state.modal.active = !state.modal.active

      // modalActive.value = !modalActive.value
    },
    toggleModalDel (state) {
      if (state.selectedProduct) {
        state.modal.delete = !state.modal.delete
      }
      // modalActive.value = !modalActive.value
    },
    clearInputs(state) {
      state.modalInput.name = ''
      state.modalInput.code = ''
      state.modalInput.unit = 'шт'
      state.modalInput.barcode = ''
    }
  }
})

export default store