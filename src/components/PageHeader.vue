<template>
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
        <router-link id="default_content" to="/"
          ><img
            id="jionlp_logo"
            alt="jionlp_logo"
            src="../assets/jionlp_logo.png"
        /></router-link>
      </a-popover>

      <!--/a-->
    </div>
    <!--span class="page_header_text"><b>中文解析工具包 </b></span>
      <span class="page_header_text"><b>pip install jionlp</b></span-->
    <div class="links" style="flex: 1; display: inline-block">
      <!--GithubOutlined style="{width: 40px, height: 40px}" /-->
      <a
        class="link"
        href="https://github.com/dongrixinyu/JioNLP"
        target="_blank"
      >
        <img class="link-icon-1" src="../assets/github_logo.jpg" alt="Github" />
      </a>
      <a class="link" href="https://pypi.org/project/jionlp/" target="_blank">
        <img
          class="link-icon-2"
          src="https://pypi.org/static/images/logo-small.95de8436.svg"
          alt="Pypi"
        />
      </a>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { Vue } from "vue-class-component";
// import { GithubOutlined } from "@ant-design/icons-vue";
import { jio_instance } from "@/utils/request";

export default class PageHeader extends Vue {
  guest_count = 0;
  // mounted() {
  //console.log("ParseLocation mounted!");
  // }
  created() {
    jio_instance({
      url: "/jio_api/guest_count",
    })
      .then((response) => {
        this.guest_count = response.data.detail.guest_count;
      })
      .catch(() => {
        this.guest_count = 0;
      });
  }
}
</script>

<style scoped>
.page_header_text {
  font-size: 18px;
  color: white;
  margin: 15px 0 0 0;
  background-color: black;
  text-align: bottom;
}
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
  margin-left: 20px;
  margin-top: 0px;
}

.logo {
  display: inline-block;
}

.content {
  display: inline-block;
}

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
</style>
