<template>
  <div style="background-color: #ececec; padding: 20px; position: relative">
    <a-breadcrumb style="margin: 16px 0" :routes="router">
      <a-breadcrumb-item href="/">
        <router-link to="/">
          <home-outlined />
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>NLP产品</a-breadcrumb-item>
      <a-breadcrumb-item>聚合云推</a-breadcrumb-item>
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
      <h2 id="tui_juhe">
        <RightSquareFilled />
        <a href="https://tui.juhe.cn/?s=nlp_1" target="_blank" rel="noopener"
          ><b class="content-color">聚合云推</b></a
        >是一款利用了<b>JioNLP</b>的智能<b class="content-color"
          >免费云端信息推送产品</b
        >。是您的 <b class="content-color">DIY 云端小闹钟</b>。
      </h2>
      <p>
        &emsp;&emsp;
        <InfoCircleFilled />
        推消息、推数据、推服务，简单配置多端推送
      </p>
      <p>
        &emsp;&emsp;
        <InfoCircleFilled />
        简单的配置API，就能实现Markdown、Json、XML等数据格式推送到指定终端
      </p>
      <p>
        &emsp;&emsp;
        <InfoCircleFilled />
        支持<b>微信公众号、邮件、钉钉、企业微信</b>等多种终端接收信息
      </p>
      <p>
        &emsp;&emsp;
        <InfoCircleFilled />
        <a href="https://tui.juhe.cn/?s=nlp_1" target="_blank" rel="noopener"
          ><b class="content-color">免费使用，快来试试吧</b></a
        >！
      </p>
      <a-row
        :gutter="16"
        style="margin-left=0px; margin-right=0px; position: relative; display: flex; justify-content: center;"
      >
        <a-col :span="8.5">
          <a-card hoverable style="width: 240px" type="inner">
            <template #cover>
              <a href="https://tui.juhe.cn/?s=nlp_1" target="_blank">
                <img
                  class="tui_juhe"
                  alt="智能聚合云推"
                  src="@/assets/advertisement/tui_juhe/tui_juhe_1.jpg"
                />
              </a>
            </template>
            <a-card-meta
              title="【开发者的推送神器】"
              style="{font-weight: bold, text-align: center,height: 20px}"
            >
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="8.5">
          <a-card hoverable style="width: 240px" type="inner">
            <template #cover>
              <a href="https://tui.juhe.cn/?s=nlp_2" target="_blank">
                <img
                  class="tui_juhe"
                  alt="智能聚合云推"
                  src="@/assets/advertisement/tui_juhe/tui_juhe_2.jpg"
                />
              </a>
            </template>
            <a-card-meta
              title="【自定义API推送】"
              style="font-weight: bold, height: 20px"
            >
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="8.5">
          <a-card hoverable style="width: 240px" type="inner">
            <template #cover>
              <a href="https://tui.juhe.cn/?s=nlp_3" target="_blank">
                <img
                  class="tui_juhe"
                  alt="智能聚合云推"
                  src="@/assets/advertisement/tui_juhe/tui_juhe_3.jpg"
                />
              </a>
            </template>
            <a-card-meta
              title="【灵活的推送方式】"
              style="font-weight: bold, height: 20px"
            >
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>

<script>
import {
  RightSquareFilled,
  InfoCircleFilled,
  HomeOutlined,
} from "@ant-design/icons-vue";
import { useMeta } from "vue-meta";

//**
export default {
  name: "TuiJuhe",
  props: {},
  components: {
    // HomeOutlined,
    RightSquareFilled,
    InfoCircleFilled,
    HomeOutlined,
  },
  setup() {
    useMeta({
      title: "NLP 产品",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
};
</script>

<style scoped>
.tui_juhe {
  font-weight: bold;
  width: 200px;
  height: 300px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#tui_juhe {
  font-weight: bold;
  font-size: large;
  position: relative;
  text-align: center;
}

.ant_row {
  margin-left: 0px;
  margin-right: 0px;
  display: flex;
  justify-content: center;
}

.content-color {
  color: #42b983;
}
</style>
