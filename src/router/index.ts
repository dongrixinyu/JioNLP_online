import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DefaultContent from '../components/DefaultContent.vue'

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'Home',
        component: DefaultContent,
    },
    {
        path: '/extract_keyphrase',
        name: 'ExtractKeyphrase',
        component: () => import('../views/ExtractKeyphrase.vue')
    },
    {
        path: '/cws_pos',
        name: 'CwsPos',
        component: () => import('../views/CwsPos.vue')
    },
    {
        path: '/parse_time',
        name: 'ParseTime',
        component: () => import('../views/ParseTime.vue')
    },
    {
        path: '/extract_time',
        name: 'ExtractTime',
        component: () => import('../views/ExtractTime.vue')
    },
    {
        path: '/parse_location',
        name: 'ParseLocation',
        component: () => import('../views/ParseLocation.vue')
    },
    {
        path: '/clean_text',
        name: 'CleanText',
        component: () => import('../views/CleanText.vue')
    },
    {
        path: '/parse_money',
        name: 'ParseMoney',
        component: () => import('../views/ParseMoney.vue')
    },
    {
        path: '/parse_id_card',
        name: 'ParseIDCard',
        component: () => import('../views/ParseIDCard.vue')
    },
    {
        path: '/back_translation',
        name: 'BackTranslation',
        component: () => import('../views/BackTranslation.vue')
    },
    {
        path: '/homophone_substitution',
        name: 'HomophoneSubstitution',
        component: () => import('../views/HomophoneSubstitution.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
