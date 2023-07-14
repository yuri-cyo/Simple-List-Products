import { createRouter, createWebHashHistory } from "vue-router";

import Products from "./components/Products.vue"
import Pagedoc from "@/components/Pagedoc.vue"
import Pageset from "@/components/Pageset.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/prod', 
            component: Products,
            alias: '/'
        },
        { 
            path: '/doc', 
            component: Pagedoc 
        },
        { 
            path: '/set', 
            component: Pageset 
        },
    ]
})