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
            <a-breadcrumb-item>信息论基础（信息熵、交叉熵、相对熵）</a-breadcrumb-item>
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

                <div v-html="markdownToHtml"></div>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>

import { useMeta } from 'vue-meta';
import router from "../../router/index";
import { stat_instance } from "@/utils/request";
import blog_asset from "@/utils/blog_request";
import {
    HomeOutlined,
} from "@ant-design/icons-vue";

export default {
    name: 'EntropyTheoryBasics',

    components: {
        HomeOutlined,
    },
    setup() {
        useMeta({ title: '信息熵、交叉熵、相对熵' })
    },
    data() {
        return {
            title: '信息熵、交叉熵、相对熵',
            router: router,
            frontend_page_count: 0,
            established_date: "2022-09-09",
            markdown: "### loading ..."
        }
    },

    computed: {
        markdownToHtml() {
            var markdown_content = this.md(this.markdown);
            return markdown_content;
        }
    },

    created() {
        stat_instance({
            url: "/stat_api/frontend_page_statistics",
            data: {
                page_name: "entropy_theory_basics",
            }
        })
            .then((response) => {
                this.frontend_page_count = response.data.detail.entropy_theory_basics;
            })
            .catch(() => {
                this.frontend_page_count = 0;
            });

        blog_asset({
            url: "/lecture/entropy_theory_basics/README.md",
        })
            .then((response) => {
                // console.log(response.data);
                this.markdown = response.data;
            })
            .catch(() => {
                this.markdown = "### Failed to request markdown file.";
            });

    }

}
</script>

<style lang="less" scoped>
h1 {
    width: 100%;
    // height: 80px;
    font-size: 28px;
    padding-top: 5px;
    margin: 10px;
}

.b_green {
    color: #00B441;
}

.description_text {
    text-align: right;
    font-size: 10px;
    color: #777777;
}
</style>
