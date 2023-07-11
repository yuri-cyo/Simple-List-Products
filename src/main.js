import { createApp } from 'vue'
import '@/style.scss'
import router from './router.js'
// import Vue from 'vue'
import App from './App.vue';
// import store from './store.js';

import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import Products from './components/Products.vue';
import Footer from './components/Footer.vue';

// new Vue({
//     store,
//     render: h=> h(App),
// }).$mount('#app')

const app = createApp(App)


const components = [
    { name: 'Products', component: Products },
    { name: 'Menu', component: Menu },
    { name: 'Header', component: Header },
    { name: 'Footer', component: Footer }
];

components.forEach(({ name, component }) => {
    app.component(name, component);
});

app.use(router)
app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
// createApp(App).mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))