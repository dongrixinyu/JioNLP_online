<template>
  <a-layout class="variable_content" style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0" :routes="router">
      <a-breadcrumb-item>
        <router-link to="/">
          <home-outlined />
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>联系我们</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        width: '100%',
        minHeight: '280px',
      }"
    >
      <div v-html="markdownToHtml"></div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { useMeta } from 'vue-meta';
/* eslint-disable */
import router from "../../router/index";
import blog_asset from "@/utils/blog_request";
import {
    HomeOutlined,
} from "@ant-design/icons-vue";

export default {
    name: 'ContactUs',

    components: {
        HomeOutlined,
    },
    setup() {
        useMeta({ title: '联系我们' })
    },
    data() {
        return {
            // title: '条件随机场（CRF）',
            router: router,
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

        blog_asset({
            url: "/trivials/contact_us/README.md",
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
