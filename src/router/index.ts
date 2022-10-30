import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import JionlpOnlineDefaultContent from '@/views/jionlp_online/JionlpOnlineDefaultContent.vue';
// import LectureDefaultContent from '@/views/lecture/LectureDefaultContent.vue';
import HomePageBase from '@/views/HomePageBase.vue'
import JionlpOnlineBase from '@/views/jionlp_online/JionlpOnlineBase.vue'
import LecturesBase from '@/views/lecture/LectureBase.vue'


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'HomePage',
        component: HomePageBase,  // () => import('@/views/HomePageBase.vue'),
        children: [
            {
                path: '',
                name: 'HomePageContent',
                component: () => import('@/views/HomePageContent.vue')
            },
            {
                path: 'contact_us',
                name: 'ContactUs',
                component: () => import('@/components/others/ContactUs.vue')
            }
        ]
    },

    {
        path: '/jionlp_online',
        name: 'JionlpOnline',
        component: JionlpOnlineBase,
        children: [
            {
                path: '',
                name: 'JionlpOnlineHome',
                component: () => import('@/views/jionlp_online/JionlpOnlineDefaultContent.vue')
            },
            {
                path: 'extract_keyphrase',
                name: 'ExtractKeyphrase',
                component: () => import('@/components/jionlp_online/ExtractKeyphrase.vue')
            },
            {
                path: 'cws_pos',
                name: 'CwsPos',
                component: () => import('@/components/jionlp_online/CwsPos.vue')
            },
            {
                path: 'parse_time',
                name: 'ParseTime',
                component: () => import('@/components/jionlp_online/ParseTime.vue')
            },
            {
                path: 'extract_time',
                name: 'ExtractTime',
                component: () => import('@/components/jionlp_online/ExtractTime.vue')
            },
            {
                path: 'parse_location',
                name: 'ParseLocation',
                component: () => import('@/components/jionlp_online/ParseLocation.vue')
            },
            {
                path: 'clean_text',
                name: 'CleanText',
                component: () => import('@/components/jionlp_online/CleanText.vue')
            },
            {
                path: 'parse_money',
                name: 'ParseMoney',
                component: () => import('@/components/jionlp_online/ParseMoney.vue')
            },
            {
                path: 'parse_id_card',
                name: 'ParseIDCard',
                component: () => import('@/components/jionlp_online/ParseIDCard.vue')
            },
            {
                path: 'back_translation',
                name: 'BackTranslation',
                component: () => import('@/components/jionlp_online/BackTranslation.vue')
            },

            {
                path: 'homophone_substitution',
                name: 'HomophoneSubstitution',
                component: () => import('@/components/jionlp_online/HomophoneSubstitution.vue')
            },
        ]
    },

    {
        path: '/product',
        name: 'Product',
        component: () => import('@/advertisements/TuiJuhe.vue'),
        children: [
            {
                path: 'tui_juhe',
                name: 'TuiJuhe',
                component: () => import('@/advertisements/TuiJuhe.vue')
            },
        ]
    },

    {
        path: '/lecture/:lecture_name',
        name: 'Lecture',
        component: LecturesBase,
        // props: true,
        // children: [
        //     {
        //         path: '',
        //         name: 'LectureHome',
        //         component: () => import('@/views/lecture/LectureDefaultContent.vue')
        //     },
        //     {
        //         path: 'logistics_crf',
        //         name: 'LogisticsCRF',
        //         component: () => import('@/components/lecture/LogisticsCRF.vue'),
        //         meta: { title: '经典CRF算法' }
        //     },
        //     {
        //         path: 'sequence_labeling',
        //         name: 'SequenceLabeling',
        //         component: () => import('@/components/lecture/SequenceLabeling.vue'),
        //         meta: { title: '序列标注任务' }
        //     },
        //     {
        //         path: 'entropy_theory_basics',
        //         name: 'EntropyTheoryBasics',
        //         component: () => import('@/components/lecture/EntropyTheoryBasics.vue'),
        //         meta: { title: '信息熵、交叉熵、相对熵' }
        //     },
        //     {
        //         path: 'logistic_regression',
        //         name: 'LogisticRegression',
        //         component: () => import('@/components/lecture/LogisticRegression.vue'),
        //         meta: { title: '逻辑回归' }
        //     },
        //     {
        //         path: 'bert',
        //         name: 'Bert',
        //         component: () => import('@/components/lecture/Bert.vue'),
        //         meta: { title: 'Bert' }
        //     },
        //     {
        //         path: 'word2vec',
        //         name: 'Word2Vec',
        //         component: () => import('@/components/lecture/Word2Vec.vue'),
        //         meta: { title: 'word2vec' }
        //     },
        //     {
        //         path: 'glove',
        //         name: 'GloVe',
        //         component: () => import('@/components/lecture/GloVe.vue'),
        //         meta: { title: 'GloVe' }
        //     },
        //     {
        //         path: '/:lecture_name',
        //         name: 'LectureTemplate',
        //         component: () => import('@/views/lecture/LectureTemplate.vue'),
        //         meta: { title: 'Glove' }
        //     }
        // ],

    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
