<template>
  <Notification />
  <a-layout-header class="page_header">
    <!--div class="guest_count"></div-->

    <div class="logo">
      <!--a class="logo" @click="send"-->
      <a-popover title="" trigger="hover">
        <template #content>
          <p>
            ● 您是本站的第<b> {{ guest_count }} </b>位访客。
          </p>
        </template>
        <!--a-button type="dashed">●</a-button-->
        <router-link id="default_content" to="/"><img id="jionlp_logo" alt="jionlp_logo"
            src="@/assets/others/jionlp_logo.png" /></router-link>
      </a-popover>
    </div>
    <div id="horizontal_navigator">
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="nlp_online">
          <router-link id="nlp_online" to="/jionlp_online">NLP在线</router-link>
        </a-menu-item>
        <a-menu-item key="nlp_product">
          <router-link id="nlp_product" to="/product">NLP产品</router-link>
        </a-menu-item>
        <a-menu-item key="nlp_lectrue">
          <router-link id="nlp_lecture" to="/lecture">NLP教程</router-link>
        </a-menu-item>
        <!--<a-menu-item key="3">nav 3</a-menu-item-->
      </a-menu>
    </div>
    <!--span class="page_header_text"><b>中文解析工具包 </b></span>
      <span class="page_header_text"><b>pip install jionlp</b></span-->
    <div class="links" style="flex: 1; display: inline-block">
      <!--GithubOutlined style="{width: 40px, height: 40px}" /-->
      <a class="link" href="https://github.com/dongrixinyu/JioNLP" target="_blank">
        <img class="link-icon-1" src="@/assets/others/github_logo.jpg" alt="Github" />
      </a>
      <a class="link" href="https://pypi.org/project/jionlp/" target="_blank">
        <img class="link-icon-2" src="https://pypi.org/static/images/logo-small.95de8436.svg" alt="Pypi" />
      </a>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { Options, Vue } from "vue-class-component";
// import { GithubOutlined } from "@ant-design/icons-vue";
import { stat_instance } from "@/utils/request";
import Notification from "@/views/Notification.vue";
// import Notification from "./Notification.vue";

@Options({
  components: {
    Notification,
  },
})
export default class PageHeader extends Vue {
  guest_count = 0;
  // mounted() {
  //console.log("ParseLocation mounted!");
  // }
  created() {
    stat_instance({
      url: "/stat_api/frontend_page_statistics",
      data: {
        page_name: "home_page",
      }
    })
      .then((response) => {
        this.guest_count = response.data.detail.home_page;
      })
      .catch(() => {
        this.guest_count = 0;
      });
  }
}
</script>

<style scoped>

.page_header {
  float: "left";
  font-size: 18px;
  font-style: normal;
  color: white;
  margin-left: 0px;
  padding: 10px 0px 0px 0px;
  background-color: black;
  text-align: left;
  height: 80px;
}

#jionlp_logo {
  width: 160px;
  height: 50px;
  margin-left: 0px;
  margin-top: 0px;
}

.logo {
  margin-left: 30px;
  margin-right: auto;
  float: left;
}
@media screen and (min-width: 600px) {
  #horizontal_navigator {
    display: inline-block;
    margin-left: 50px;
    width: 286px;
    height: 64px;
  }
}

@media screen and (min-width: 600px) {
  .links {
    margin-left: auto;
    margin-right: 30px;
    float: right;
  }
  .link-icon-1 {
    width: 55px;
    height: 55px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .link-icon-2 {
    width: 40px;
    height: 40px;
    margin-left: 5px;
    margin-right: 5px;
  }
}

@media screen and (max-width: 600px) {
  #horizontal_navigator {
    display: none;
  }
}

@media screen and (max-width: 601px) {
  .links {
    display: none;
  }
  .link-icon-1{
    display: none;
  }
  .link-icon-2 {
    display: none;
  }
}

</style>
