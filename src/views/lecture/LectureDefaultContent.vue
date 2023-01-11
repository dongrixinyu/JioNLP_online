<template>
  <div>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>
          <router-link to="/">
            <home-outlined />
          </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>NLP 教程</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }"
      >
        <div>
          <p id="head_line">NLP教程</p>
        </div>
        <div id="key_point">
          <a-row :gutter="16">
            <a-card
              hoverable
              style="width: 100%; margin-bottom: 10px"
              type="inner"
            >
              <template #cover>
                <router-link id="crf" to="/lecture/sequence_labeling">
                  <img
                    class="cover_image"
                    alt="序列标注任务简介"
                    src="@/assets/lecture/cover_image/sequence_labeling.jpg"
                  />
                </router-link>
              </template>
              <a-card-meta
                title="🐤 序列标注任务简介"
                style="
                   {
                    font-weight: bold;
                    text-align: left;
                    height: 20px;
                  }
                "
              >
              </a-card-meta>
            </a-card>
          </a-row>
          <a-row :gutter="16">
            <a-card
              hoverable
              style="width: 100%; margin-bottom: 10px"
              type="inner"
            >
              <template #cover>
                <router-link id="crf" to="/lecture/logistics_crf">
                  <img
                    class="cover_image"
                    alt="条件随机场（CRF）"
                    src="@/assets/lecture/cover_image/logistics_crf.jpg"
                  />
                </router-link>
              </template>
              <a-card-meta
                title="🐤 条件随机场（CRF）"
                style="
                   {
                    font-weight: bold;
                    text-align: left;
                    height: 20px;
                  }
                "
              >
              </a-card-meta>
            </a-card>
          </a-row>
        </div>
        <div id="description">
          <div v-html="markdownToHtml"></div>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import blog_asset from "@/utils/blog_request";
import router from "@/router/index";
import {
  HomeOutlined,
  // RightSquareFilled,
  // InfoCircleFilled,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "LectureDefaultContent",

  components: {
    HomeOutlined,
    // RightSquareFilled,
    // InfoCircleFilled,
    // Notification,
  },
  data() {
    return {
      router: router,
      markdown: "### loading ...",
    };
  },

  setup() {
    useMeta({
      title: "NLP 教程",
      htmlAttrs: { lang: "en", amp: true },
    });
  },

  computed: {
    markdownToHtml() {
      var markdown_content = this.md(this.markdown);
      return markdown_content;
    },
  },

  created() {
    blog_asset({
      url: "/lecture/lecture_home_page/README.md",
    })
      .then((response) => {
        // console.log(response.data);
        this.markdown = response.data;
      })
      .catch(() => {
        this.markdown =
          "### Failed to request markdown file. \n### Please refresh the webpage.";
      });
  },
});
</script>

<style scoped>
#head_line {
  font-weight: bold;
  font-size: 26px;
}

.cover_image {
  width: 100%;
  height: 170px;
}
</style>
