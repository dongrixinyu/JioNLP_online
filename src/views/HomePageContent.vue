<template>
  <div>
    <horizontal-navigation />
    <a-layout style="padding: 24px">
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }"
      >
        <div id="head_line">
          <img
            id="home_page_logo"
            alt="JioNLP"
            src="@/assets/others/jionlp_logo.png"
          />
          <h3 id="home_page_subtitle">
            自然语言处理教程、在线试用平台、资讯、求职，让NLP变得易懂、易用
          </h3>
          <p id="home_page_annotation">
            <environment-outlined />
            &ensp;www.jionlp.com&emsp;
            <bug-outlined />
            &ensp;微信公众号：JioNLP
          </p>
        </div>
        <div id="home_page_content" v-html="markdownToHtml"></div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
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
      markdown: "### loading ...",
    };
  },
  computed: {
    markdownToHtml() {
      var markdown_content = this.md(this.markdown);
      return markdown_content;
    },
  },
  setup() {
    useMeta({
      title: "首页",
      htmlAttrs: { lang: "en", amp: true },
    });
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
        this.markdown =
          "### Failed to request markdown file.\nPlease refresh the web page.";
      });
  },
});
</script>

<style lang="less">
#home_page_content {
  // width: 80%;
  margin: 5%;
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

a {
  color: #00b441;
}

p {
  color: #666666;
  font-size: 14px;
  font-weight: normal;
}
</style>
