<template>
  <a-layout class="variable_content" style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0" :routes="router">
      <a-breadcrumb-item href="/">
        <home-outlined />
      </a-breadcrumb-item>
      <!--a-breadcrumb-item> Home </a-breadcrumb-item-->
      <a-breadcrumb-item>回译数据增强</a-breadcrumb-item>
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
        <h2><b>回译数据增强</b></h2>
        <p>
          ● 给定一段文本，对其做回译数据增强，扩展文本表达，一般用于训练模型。
        </p>
        <p>● 该方法调用时间略久，耗时大约30秒，点击提交文本后，请耐心等待。</p>
        <p>
          ●
          由于服务器资源有限，可能该接口很容易报错，如须进一步使用可参考相关文档。
        </p>
        <p>
          ● 参考文档：
          <a
            href="https://github.com/dongrixinyu/JioNLP/wiki/数据增强-说明文档#user-content-回译数据增强"
            >回译数据增强说明文档</a
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
          <!--h3 :style="{ margin: '16px 0' }">增强结果：</h3-->
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
          <a-alert message="回译错误！" type="warning" show-icon />
          <a-card style="width: 100%">
            <p>
              ● 由于该功能依赖各厂有限的免费 API
              调用次数，若没回译结果，可能调用次数已经用完。 (●'◡'●)
            </p>
            <p>
              ● 如还想继续使用，可以参考
              <a
                href="https://github.com/dongrixinyu/JioNLP/wiki/数据增强-说明文档#回译数据增强"
                ><b> 回译工具使用说明 </b></a
              >
              申请自己的免费 API。
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
export default class BackTranslation extends Vue {
  text = "今年是中国人民抗日战争，暨世界反法西斯战争胜利76周年。";
  first_show = true;
  response = { is_ok: false, detail: Array<string>() };
  $router = router;

  mounted() {
    // console.log("BackTranslation mounted!");
  }
  send() {
    jio_instance({
      url: "/jio_api/back_translation",
      data: {
        text: this.text,
      },
      timeout: 20000,
    })
      .then((response) => {
        // console.log(response);
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
  height: 80px;
  margin: 20px;
}
</style>
