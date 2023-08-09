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
          edit: false
        },
        products: [
            {
            code: '0001',
            name: 'Напій сильногаз. Coca-Cola п/пл 1.75л',
            units: 'шт',
            barcode: '5449000130389',
            },
            {
            code: '0002',
            name: "Чіпси картопляні Lay's Сметана і зелень м/у 120г",
            units: 'шт',
            barcode: '1241234123123123'
            },
            {
            code: '0003',
            name: 'Ковб. сирокопч. Масар Австрійська',
            units: 'кг',
            barcode: '18336'
            },
        ],
        selectedProductIdx: null,
        selectedProduct: null,

        modalInput: {
          name: '',
          code: '',
          units: 'шт',
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
    },
    toggleModalDel (state) {
      if (state.selectedProduct) {
        state.modal.delete = !state.modal.delete
      }
    },
    toggleModalEdit(state) {
      state.modal.edit = !state.modal.edit
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