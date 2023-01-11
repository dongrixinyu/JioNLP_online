<template>
  <div id="page_header">
    <div class="logo">
      <a-popover placement="bottomLeft" title="" trigger="hover">
        <template #content>
          <p>
            ● 您是本站的第<b> {{ guest_count }} </b>位访客。
          </p>
        </template>
        <router-link id="default_content" to="/"
          ><img
            id="jionlp_logo"
            alt="jionlp_logo"
            src="@/assets/others/jionlp_logo.png"
        /></router-link>
      </a-popover>
    </div>
    <div id="horizontal_navigator">
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '44px', backgroundColor: 'black' }"
      >
        <a-menu-item key="nlp_online">
          <router-link id="nlp_online" to="/jionlp_online">NLP在线</router-link>
        </a-menu-item>
        <a-menu-item key="nlp_product">
          <router-link id="nlp_product" to="/product">NLP产品</router-link>
        </a-menu-item>
        <a-menu-item key="nlp_lectrue">
          <router-link id="nlp_lecture" to="/lecture/lecture_home_page"
            >NLP教程</router-link
          >
        </a-menu-item>
        <a-menu-item key="contact_us">
          <router-link id="contact_us" to="/contact_us">联系我们</router-link>
        </a-menu-item>
        <!--<a-menu-item key="3">nav 3</a-menu-item-->
      </a-menu>
    </div>
    <div class="links" style="flex: 1; display: inline-block">
      <!--GithubOutlined style="{width: 40px, height: 40px}" /-->
      <a href="https://github.com/dongrixinyu/JioNLP" target="_blank">
        <img
          class="link-icon-1"
          src="@/assets/others/github_logo.jpg"
          alt="Github"
        />
      </a>
      <a href="https://pypi.org/project/jionlp/" target="_blank">
        <img
          class="link-icon-2"
          src="https://pypi.org/static/images/logo-small.95de8436.svg"
          alt="Pypi"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import { MenuOutlined } from "@ant-design/icons-vue";
import { stat_instance } from "@/utils/request";

@Options({
  components: {
    // MenuOutlined,
  },
})
class PageHeader extends Vue {
  guest_count = 0;
  opened_horizontal_keys = [
    "nlp_online",
    "nlp_product",
    "nlp_lecture",
    "contact_us",
  ];

  created() {
    stat_instance({
      url: "/stat_api/frontend_page_statistics",
      data: {
        page_name: "home_page",
      },
    })
      .then((response) => {
        this.guest_count = response.data.detail;
      })
      .catch(() => {
        this.guest_count = 0;
      });
  }
}

export default PageHeader;
</script>

<style lang="less">
#page_header {
  position: fixed;
  // display: block;
  z-index: 10;
  margin-left: 0px;
  padding: 10px 0px 0px 0px;
  background-color: black;
  // float: top;
  // text-align: left;
  min-width: 100%;
  min-height: 60px;
}

#jionlp_logo {
  // display: inline-block;
  width: 125px;
  height: 40px;
  margin-left: 0px;
  margin-top: 0px;
}

@media screen and (min-width: 800px) {
  .logo {
    position: fixed;
    margin-left: 30px;
    margin-right: auto;
    // float: left;
  }
}

@media screen and (max-width: 801px) {
  .logo {
    position: fixed;
    margin-left: 90px;
    margin-right: auto;
    // float: left;
  }
}

@media screen and (min-width: 800px) {
  #horizontal_navigator {
    position: fixed;
    margin-left: 210px;
    width: 381px;
    height: 44px;
  }
}

@media screen and (min-width: 800px) {
  .links {
    position: fixed;
    right: 0px;
    margin-left: auto;
    margin-right: 20px;
    // float: right;
  }
  .link-icon-1 {
    width: 43px;
    height: 43px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .link-icon-2 {
    width: 32px;
    height: 32px;
    margin-left: 5px;
    margin-right: 5px;
  }
}

@media screen and (max-width: 801px) {
  #horizontal_navigator {
    display: none;
  }
}

@media screen and (max-width: 801px) {
  .links {
    display: none;
  }
  .link-icon-1 {
    display: none;
  }
  .link-icon-2 {
    display: none;
  }
}
</style>
