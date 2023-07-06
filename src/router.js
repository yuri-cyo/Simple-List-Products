import { createRouter, createWebHashHistory } from "vue-router";

import Page from "./components/Page.vue"
import Pagedoc from "@/components/Pagedoc.vue"
import Pageset from "@/components/Pageset.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/prod', component: Page, alias: '/' },
        { path: '/doc', component: Pagedoc },
        { path: '/set', component: Pageset },
    ]
})