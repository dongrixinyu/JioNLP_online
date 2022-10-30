<template>
    <horizontal-navigation />
    <a-layout style="padding: 24px">
        <a-layout-content :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }">
            <div id="head_line">
                <img id="home_page_logo" alt="JioNLP" src="@/assets/others/jionlp_logo.png" />
                <!-- <h2 id="home_page_title">自然语言处理NLP教程、资讯</h2> -->
                <h3 id="home_page_subtitle">自然语言处理教程、在线试用平台、资讯、求职，让NLP变得易懂、易用</h3>
                <p id="home_page_annotation">
                    <environment-outlined />
                    &ensp;www.jionlp.com&emsp;
                    <bug-outlined />
                    &ensp;微信公众号：一个Bug
                </p>

            </div>
            <div style="background-color: #ececec; padding: 20px">
                <a-row :gutter="16">
                    <a-col :span="12">
                        <router-link id="jionlp_online" to="/jionlp_online">
                            <a-card :hoverable="true" style="background-color: hsla(142, 100%, 35%, 0.25);"
                                title="NLP在线试用平台" :bordered="false">

                                <p style="color: black">○ 提供常用 NLP 的<b>在线解析能力</b>，基于JioNLP</p>
                                <p style="color: black">○
                                    例如<b>关键短语抽取</b>、<b>时间语义解析</b>、<b>货币金额解析</b>、<b>文本清洗</b>、<b>数据增强</b>等</p>
                            </a-card>
                        </router-link>
                    </a-col>
                    <a-col :span="12">
                        <router-link id="lecture" to="/lecture/lecture_home_page">
                            <a-card :hoverable="true" style="background-color: hsla(197, 100%, 48%, 0.25);"
                                title="NLP教程" :bordered="true">
                                <p style="color: black">○ 提供高质量的 <b>NLP 系列教程</b></p>
                                <p style="color: black">○
                                    NLP 教程的每一篇都是我深入理解之后，尽量以白话语言编写，旨在<b>让非专业同学也能掌握 NLP</b></p>
                            </a-card>
                        </router-link>
                    </a-col>
                </a-row>
            </div>
            <div id="home_page_content" v-html="markdownToHtml"></div>
        </a-layout-content>

    </a-layout>

</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useMeta } from 'vue-meta';
import blog_asset from "@/utils/blog_request";
import HorizontalNavigation from "./HorizontalNavigation.vue";
import {
    BugOutlined,
    // HomeOutlined,
    // RightSquareFilled,
    // InfoCircleFilled,
    EnvironmentOutlined,
    // EyeOutlined,
} from "@ant-design/icons-vue";


export default defineComponent({
    components: {
        // HomeOutlined,
        BugOutlined,
        // InfoCircleFilled,
        // Notification,
        // TuiJuhe,
        EnvironmentOutlined,
        HorizontalNavigation,
        // EyeOutlined,
    },
    data() {
        return {
            markdown: "### loading ..."
        }
    },
    computed: {
        markdownToHtml() {
            var markdown_content = this.md(this.markdown);
            return markdown_content;
        }
    },
    setup() {
        useMeta({
            title: '首页',
            htmlAttrs: { lang: 'en', amp: true }
        })
    },
    created() {
        blog_asset({
            url: "/lecture/home_page/README.md",
        })
            .then((response) => {
                // console.log(response.data);
                this.markdown = response.data;
            })
            .catch(() => {
                this.markdown = "### Failed to request markdown file.\nPlease refresh the web page.";
            });
    }

});
</script>

<style lang="less">


#home_page_content {
    // width: 80%;
    margin:5%;
    display: block;
    justify-content: center;
}

#home_page_logo {
    // width: 38.2%;
    width: 360px;
    height: auto;
    // margin-top: 0px;
    margin-bottom: 10px;
    // display: flex;
    // justify-content: center;
}

#home_page_subtitle {
    text-align: center;
    font-family: 黑体;
    font-weight: bold;
    font-size: 25.6px;
    color: #678bbd;

    max-width: 34rem;
    margin: auto;
}

.home_page_image {
    width: 100%;
}

#home_page_annotation {
    margin-top: 10px;
    font-weight: bold;
}

#head_line {
    text-align: center;
    margin-bottom: 15px;
}

#sub_title {
    display: flex;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #00B441;
}

p {
    color: #666666;
    font-size: 14px;
    font-weight: normal;
}

</style>
