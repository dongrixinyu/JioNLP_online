<template>
  <a-layout class="variable_content" style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0" :routes="router">
      <a-breadcrumb-item href="/">
        <home-outlined />
      </a-breadcrumb-item>
      <!--a-breadcrumb-item> Home </a-breadcrumb-item-->
      <a-breadcrumb-item>同音词替换</a-breadcrumb-item>
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
        <h2><b>同音词替换</b></h2>
        <p>
          ●
          给定一段文本，对其做同音词替换数据增强，扩展文本表达，一般用于训练模型。
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
          <a-list size="large" bordered :data-source="response.detail">
            <template #renderItem="{ item }">
              <a-list-item>{{ item }}</a-list-item>
            </template>
            <template #header>
              <div><b>增强结果：</b></div>
            </template>
          </a-list>
        </div>
        <div v-else-if="response.is_ok == false && first_show == false">
          <a-alert message="同音词替换错误！" type="warning" show-icon />
          <a-card style="width: 100%">
            <p>
              ● 请确保您的句子足够长，若是太短的句子，则不容易有同音词做替换。
              (●'◡'●)
            </p>
            <p>
              ● 如还想继续使用，可以参考
              <a
                href="https://github.com/dongrixinyu/JioNLP/wiki/数据增强-说明文档#同音词替换"
                ><b> 同音词替换数据增强-使用说明 </b></a
              >
              。
            </p>
            <p>
              ● 如使用报错，可在此
              <a href="https://github.com/dongrixinyu/JioNLP/issues"
                ><b>提交报错信息</b></a
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

@Options({
  components: {
    CaretRightOutlined,
  },
})
export default class HomophoneSubstitution extends Vue {
  text =
    "今天，运-20接第八批在韩志愿军烈士遗骸回国，两架歼-11B护航伴飞。#运20与歼11B飞行员空中对话公开#。\
    运-20机组报告任务性质：“奉命接迎志愿军烈士遗骸回国！”\
    歼-11B飞行员致敬英烈：“欢迎志愿军烈士归国，我部歼-11B飞机两架奉命全程护航！”";
  first_show = true;
  response = { is_ok: false, detail: Array<string>() };
  $router = router;

  mounted() {
    // console.log("HomophoneSubstitution mounted!");
  }
  send() {
    jio_instance({
      url: "/jio_api/homophone_substitution",
      data: {
        text: this.text,
      },
      timeout: 20000,
    })
      .then((response) => {
        // // console.log(response);
        this.first_show = false;
        this.response.is_ok = response.data.is_ok;
        this.response.detail = Array<string>();

        this.response.detail = response.data.detail;
        if (response.data.detail.length == 0) {
          this.response.is_ok = false;
        }
        // console.log("response!!!");
        // console.log(this.response.detail);
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
  height: 150px;
  margin: 20px;
}
</style>
