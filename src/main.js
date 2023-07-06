import { createApp } from 'vue'
import '@/style.scss'
import router from './router.js'
// import Vue from 'vue'
// import store from './store/index.js'
import App from './App.vue'

// new Vue({
//     store,
//     render: h=> h(App),
// }).$mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
// createApp(App).mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))