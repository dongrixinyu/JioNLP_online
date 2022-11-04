<template>
    <a-layout class="variable_content" style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0" :routes="router">
            <a-breadcrumb-item>
                <router-link to="/">
                    <home-outlined />
                </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <router-link to="/lecture/lecture_home_page">
                    NLP 教程
                </router-link>
            </a-breadcrumb-item>
            <!--a-breadcrumb-item> Home </a-breadcrumb-item-->
            <a-breadcrumb-item>{{ this.title }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          width: '100%',
          minHeight: '280px',
        }">
            <div>
                <h1><b class="b_green">{{ this.title }}</b></h1>
                <p class="description_text">
                    发布日期：{{ this.established_time }}&emsp;阅读量：{{ this.frontend_page_count }}
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
    name: 'LectureTemplate',

    components: {
        HomeOutlined,
    },
    // setup() {
    //     useMeta({ title: this.title})
    // },

    props: {
        page_name: String,  // 英文名，用于请求后端，展示 url
    },

    data() {
        return {
            router: router,
            title: '',
            established_time: '',
            frontend_page_count: 0,
            markdown: "### loading ...",
        }
    },

    computed: {
        markdownToHtml() {
            var markdown_content = this.md(this.markdown);
            return markdown_content;
        }
    },

    created() {
        console.log("## temp url: " + this.page_name);

        stat_instance({
            url: "/stat_api/frontend_page_statistics",
            data: {
                page_name: this.page_name,
            }
        })
            .then((response) => {
                this.frontend_page_count = response.data.frontend_page_count;
                this.title = response.data.title;
                document.title = this.title + " | JioNLP 源站";
                this.established_time = response.data.established_time;
            })
            .catch(() => {
                this.frontend_page_count = 0;
                document.title = this.page_name + " | JioNLP 源站";
            });

        blog_asset({
            url: "/lecture/" + this.page_name + "/README.md",
        })
            .then((response) => {
                this.markdown = response.data;
            })
            .catch(() => {
                this.markdown = "### Failed to request markdown file.";
            });

    },

    updated() {
        console.log("## temp url: " + this.page_name);

        stat_instance({
            url: "/stat_api/frontend_page_statistics",
            data: {
                page_name: this.page_name,
            }
        })
            .then((response) => {
                this.frontend_page_count = response.data.frontend_page_count;
                this.title = response.data.title;
                document.title = this.title + " | JioNLP 源站";
                this.established_time = response.data.established_time;
            })
            .catch(() => {
                this.frontend_page_count = 0;
                document.title = this.page_name + " | JioNLP 源站";
            });

        blog_asset({
            url: "/lecture/" + this.page_name + "/README.md",
        })
            .then((response) => {
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
