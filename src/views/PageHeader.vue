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
        <router-link id="default_content" to="/jionlp_online"><img id="jionlp_logo" alt="jionlp_logo"
            src="@/assets/others/cmii_logo.png" /></router-link>
      </a-popover>
    </div>
    <div>
      <h3></h3>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import { GithubOutlined } from "@ant-design/icons-vue";
import { stat_instance } from "@/utils/request";
// import Notification from "@/views/Notification.vue";


@Options({
  components: {
    // Notification,
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
  width: 260px;
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
