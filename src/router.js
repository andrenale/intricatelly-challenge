import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Company from './components/Company/Company.vue'
import CompanyData from './components/Company/CompanyData.vue'
import CompanyTable from './components/Company/CompanyTable.vue'
import CompanyPage from './components/Company/CompanyPage.vue'

const DEFAULT_TITLE = 'Intricately';

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            redirect: '/company/data',
        },
        {
            path:'/company',
            component: Company,
            redirect: '/company/data',
            children: [
                {
                    path: 'data',
                    name: 'COMPANY DATA',
                    component: CompanyData
                },
                {
                    path: 'table',
                    name: 'COMPANY TABLE',
                    component: CompanyTable
                },
                {
                    path: 'page',
                    name: 'COMPANY PAGE',
                    component: CompanyPage
                },
            ]
        }
    ]
})

export default router