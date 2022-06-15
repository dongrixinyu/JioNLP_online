<template>
  <a-layout class="variable_content" style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0" :routes="router">
      <a-breadcrumb-item href="/">
        <home-outlined />
      </a-breadcrumb-item>
      <!--a-breadcrumb-item> Home </a-breadcrumb-item-->
      <a-breadcrumb-item>清洗文本</a-breadcrumb-item>
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
      <div>
        <h2><b>清洗文本</b></h2>
        <p>给定一篇文本，清洗其中无效信息，一般用于清洗爬虫获取的数据。</p>
        <p>
          ●
          该工具支持清洗<b>HTML标签、异常字符串、冗余字符串、电话号码、Email、括号信息、全角字符转为半角等</b>，在线版暂时未提供此类参数的勾选，须参考相关说明文档进行使用。
        </p>
        <p>
          ● 参考文档：
          <a
            href="https://github.com/dongrixinyu/JioNLP/wiki/正则抽取与解析-说明文档#user-content-清洗文本"
            >文本清洗说明文档</a
          >
        </p>
      </div>
      <textarea
        v-model="text"
        style="display: inline-block; margin-left: auto; margin-right: auto, width: 50%;"
      />
      <a-button
        style="
          display: block;
          margin-bottom: 10px;
          margin-left: auto;
          margin-right: 30px;
        "
        type="primary"
        @click="send"
        >提交文本
        <CaretRightOutlined />
      </a-button>

      <a-layout style="display: block">
        <div v-if="response.is_ok == true && first_show == false">
          <a-descriptions
            bordered
            layout="vertical"
            title=""
            :size="size"
            :column="{}"
          >
            <a-descriptions-item label="" span="1" style="width: 105px"
              ><b>{{ response.detail }}</b></a-descriptions-item
            >
          </a-descriptions>
        </div>
        <div v-else-if="response.is_ok == false && first_show == false">
          <a-alert message="解析错误！" type="warning" show-icon />
          <a-card style="width: 100%">
            <p>● 如解析错误，可通过以下 Github 链接提交报错信息 (●'◡'●)</p>
            <p>
              ●
              <a href="https://github.com/dongrixinyu/JioNLP/issues"
                ><b>提交报错文本信息</b></a
              >
            </p>
          </a-card>
        </div>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
/* eslint-disable */
import { Options, Vue } from "vue-class-component";
import { CaretRightOutlined } from "@ant-design/icons-vue";
import router from "../router/index";
import { jio_instance } from "@/utils/request";
import jio_asset from "@/utils/asset_request";

let text_blob: any = new Blob();
text_blob.name = "../assets/clean_text_sample.html";

@Options({
  components: {
    CaretRightOutlined,
  },
})
export default class CleanText extends Vue {
  // reader.readAsText(text_blob, "utf-8");
  // reader.addEventListener('load', function() {
  //   text = reader.result;
  // })
  // text = reader.result;
  text = "测试(fare)~~~";
  first_show = true;
  response = { is_ok: false, detail: "" };
  $router = router;

  mounted() {
    jio_asset({
      url: "/clean_text_sample.txt",
    }).then((response) => {
      this.text = response.data;
    });
    // console.log("CleanText mounted!");
  }
  send() {
    jio_instance({
      url: "/jio_api/clean_text",
      data: {
        text: this.text,
      },
    })
      .then((response) => {
        // console.log("response");
        // console.log(response);
        this.first_show = false;
        this.response.is_ok = response.data.is_ok;
        this.response.detail = response.data.detail;
      })
      .catch((error) => {
        // console.log(error);
        this.first_show = false;
        this.response.is_ok = false;
      });
  }
}
</script>

<style lang="less" scoped>
textarea {
  width: 100%;
  height: 300px;
  margin: 20px;
}
</style>
