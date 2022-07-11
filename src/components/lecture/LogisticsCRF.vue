<template>
    <a-layout class="variable_content" style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0" :routes="router">
            <a-breadcrumb-item>
                <router-link to="/">
                    <home-outlined />
                </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <router-link to="/lecture">
                    NLP 教程
                </router-link>
            </a-breadcrumb-item>
            <!--a-breadcrumb-item> Home </a-breadcrumb-item-->
            <a-breadcrumb-item>条件随机场（CRF）</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          width: '100%',
          minHeight: '280px',
        }">
            <div>
                <h1><b class="b_green">{{ title }}</b></h1>
                <p class="description_text">
                    创建日期：{{ established_date }}&emsp;阅读量：{{ frontend_page_count }}
                </p>
                <img src="@/assets/lecture/logistics_crf/logistics_crf_02.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_03.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_04.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_05.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_06.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_07.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_08.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_09.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_10.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_11.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_12.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_13.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_14.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_15.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_16.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_17.jpg" />
                <img src="@/assets/lecture/logistics_crf/logistics_crf_18.jpg" />
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>

import { useMeta } from 'vue-meta';
/* eslint-disable */
import router from "../../router/index";
import { stat_instance } from "@/utils/request";
import { HomeOutlined } from "@ant-design/icons-vue";

export default {
    name: 'LogisticsCRF',

    components: {
        HomeOutlined,
    },
    setup () {
        useMeta({title: '条件随机场（CRF）'})
    },
    data () {
        // console.log("vue-mathjax", VueMathjax);
        return {
            title: '条件随机场（CRF）',
            // formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
            router: router,
            frontend_page_count: 0,
            established_date: '2022-03-28'
        }
    },
    created () {
        stat_instance({
            url: "/stat_api/frontend_page_statistics",
            data: {
                page_name: "crf",
            }
        })
            .then((response) => {
                this.frontend_page_count = response.data.detail.crf;
            })
            .catch(() => {
                this.frontend_page_count = 0;
            });
    }

}
</script>

<style lang="less" scoped>


h1 {
    width: 100%;
    // height: 80px;
    font-size: 25px;
    padding-top: 5px;
    margin: 10px;
}

img {
    // width: 100%;
    max-width: 90%;
    margin: 0 auto;
    // text-align: center;
    display: block;
}

p {
    text-indent: 2em;
}

.b_green {
    color: #00B441;
}
.description_text {
    text-align: right;
    font-size: 9px;
    color: #777777;
}

</style>
