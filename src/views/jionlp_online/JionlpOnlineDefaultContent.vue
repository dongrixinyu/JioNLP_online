<template>
  <div>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item href="/">
          <router-link to="/">
            <home-outlined />
          </router-link>
        </a-breadcrumb-item>
        <!--a-breadcrumb-item> Home </a-breadcrumb-item-->
        <a-breadcrumb-item>Jionlp 在线解析</a-breadcrumb-item>

        <!--a-breadcrumb-item>App</a-breadcrumb-item-->
      </a-breadcrumb>
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }"
      >
        <div id="head_line">
          <h3>JioNLP在线解析</h3>
        </div>
        <div id="key_point">
          <p>
            &emsp;&emsp;
            <InfoCircleFilled />
            <a
              href="https://github.com/dongrixinyu/JioNLP"
              target="_blank"
              rel="noopener"
            >
              <b class="content-color">JioNLP</b>
            </a>
            是一个开源中文 NLP 预处理、解析工具包，
            <b class="content-color">JioNLP源站</b>
            提供若干功能在线解析
          </p>
          <h2><RightSquareFilled /> 功能试用</h2>
          <p>
            &emsp;&emsp;
            <InfoCircleFilled /> 包括<b class="content-color">关键短语抽取</b
            >、<b class="content-color">时间语义解析</b>、<b
              class="content-color"
              >地址解析</b
            >、<b class="content-color">清洗文本</b>、<b class="content-color"
              >金额解析</b
            >、<b class="content-color">身份证号解析</b>、<b
              class="content-color"
              >数据增强</b
            >、<b class="content-color">中文-阿拉伯数字转换</b>等功能
          </p>
          <p>
            &emsp;&emsp;
            <InfoCircleFilled />
            更多功能<b>抽取摘要、解析手机号、成语词典、繁简体转换、模型训练辅助工具、分类、序列标注指标统计函数</b>等须安装
            jionlp 工具包
          </p>

          <h2><RightSquareFilled /> 安装方式</h2>
          <p>
            &emsp;&emsp;
            <InfoCircleFilled />
            <b class="content-color"> pip install jionlp</b>
          </p>

          <h2><RightSquareFilled /> 未来规划</h2>
          <p>&emsp;&emsp; <InfoCircleFilled /> 增加在线解析、模型辅助函数</p>
          <p>
            &emsp;&emsp;
            <InfoCircleFilled />
            优化已有时间解析，繁简体转换等效果和性能
          </p>
          <p>&emsp;&emsp; <InfoCircleFilled /> 增加通用地址解析</p>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import {
  HomeOutlined,
  RightSquareFilled,
  InfoCircleFilled,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    HomeOutlined,
    RightSquareFilled,
    InfoCircleFilled,
    // Notification,
  },

  setup() {
    useMeta({
      title: "NLP 在线解析",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
});
</script>

<style scoped>
#head_line {
  text-align: left;
  font-size: 22px;
  margin-bottom: 8px;
  font-family: "Times New Roman";
  font-weight: bold;
  font-style: normal;
}

h3 {
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00b441;
}

.content-color {
  color: #00b441;
}
</style>
