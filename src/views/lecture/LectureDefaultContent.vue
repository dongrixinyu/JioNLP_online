<template>
  <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>
        <router-link to="/">
          <home-outlined />
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>NLP 教程</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '280px',
      }">
      <div id="head_line">
        <h3>JioNLP教程</h3>
      </div>
      <div id="description">
        <p>
          <RightSquareFilled />
          &ensp;
          <a href="https://github.com/dongrixinyu/JioNLP" target="_blank" rel="noopener">
            <b class="content_green">JioNLP</b>
          </a>
          源站提供 NLP 的进阶学习教程
        </p>
        <p>
          <RightSquareFilled />
          &ensp;旨在以最清晰简明的方式介绍 NLP 相关知识。手工操刀撰写，更新速度慢(●'◡'●)
        </p>
        <p>
          <RightSquareFilled />
          &ensp;这里的&ensp;NLP&ensp;教程<b class="content_green">全部免费</b>，全部的PDF版内容都同步到了
          公众号<b class="content_green">一个Bug</b>，欢迎扫码关注获取！
        </p>

      </div>
      <div id="key_point">
        <a-row :gutter="16">

          <a-card hoverable style="width: 100%; margin-bottom: 10px;" type="inner">
            <template #cover>
              <router-link id="crf" to="/lecture/sequence_labeling">
                <img class="cover_image" alt="序列标注任务简介" src="@/assets/lecture/cover_image/sequence_labeling.jpg" />
              </router-link>
            </template>
            <a-card-meta title="🐤 序列标注任务简介" style="{font-weight: bold; text-align: left; height: 20px}">
            </a-card-meta>
          </a-card>
        </a-row>
        <a-row :gutter="16">
          <a-card hoverable style="width: 100%; margin-bottom: 10px;" type="inner">
            <template #cover>
              <router-link id="crf" to="/lecture/logistics_crf">
                <img class="cover_image" alt="条件随机场（CRF）" src="@/assets/lecture/cover_image/logistics_crf.jpg" />
              </router-link>
            </template>
            <a-card-meta title="🐤 条件随机场（CRF）" style="{font-weight: bold; text-align: left; height: 20px}">
            </a-card-meta>
          </a-card>
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useMeta } from 'vue-meta';
import {
  HomeOutlined,
  RightSquareFilled,
  // InfoCircleFilled,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    HomeOutlined,
    RightSquareFilled,
    // InfoCircleFilled,
    // Notification,
  },

  setup () {
    useMeta({
      title: 'NLP 教程',
      htmlAttrs: { lang: 'en', amp: true }
    })
  }

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

.cover_image {
  width: 100%;
  height: 170px;
}

#description {
  text-align: left;
  font-size: 15px;
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

p {
  margin-bottom: 9px;
  font-weight: normal;
}

.content_red {
  color: #FF0000;
}
.content_green {
  color: #00B441;
}
</style>
