import { createApp } from 'vue'
import '@/style.scss'
import router from './router.js'
import App from './App.vue';
import store from '@/store.js';

import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import Products from './components/Products.vue';
import Footer from './components/Footer.vue';
import Table from './components/Table.vue';
import ModalAddProd from './components/modal/ModalAddProd.vue';
import BtnClose from './components/Ui/BtnClose.vue';
import BtnSave from './components/Ui/BtnSave.vue';
import InputComponent from './components/Ui/InputComponent.vue';
import SelectComponent from './components/Ui/SelectComponent.vue';
import BtnCrossClose from './components/Ui/BtnCrossClose.vue';

const app = createApp(App)

const components = [
    { name: 'Products', component: Products },
    { name: 'Menu', component: Menu },
    { name: 'Header', component: Header },
    { name: 'Footer', component: Footer },
    { name: 'Table', component: Table },
    { name: 'ModalAddProd', component: ModalAddProd },
    { name: 'BtnClose', component: BtnClose },
    { name: 'BtnSave', component: BtnSave },
    { name: 'InputComponent', component: InputComponent },
    { name: 'SelectComponent', component: SelectComponent },
    { name: 'BtnCrossClose', component: BtnCrossClose },
];

components.forEach(({ name, component }) => {
    app.component(name, component);
});

app.use(store)
app.use(router)
app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))