<template>
  <div>
    <a-layout>
      <LectureNavigation />
      <LectureTemplate :page_name="this.page_name" />
      <benice-sleeping-beverage />
    </a-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router/index";

import LectureNavigation from "@/views/lecture/LectureNavigation.vue";
import LectureTemplate from "@/views/lecture/LectureTemplate.vue";
import BeniceSleepingBeverage from "@/components/advertisement/BeniceSleepingBeverage.vue";

export default {
  name: "LectureBase",
  components: {
    LectureNavigation,
    BeniceSleepingBeverage,
    LectureTemplate,
  },

  // props: {
  //     page_name: String, // 中文标题
  // },

  data() {
    return {
      $router: router,
      page_name: ref(this.$route.params.lecture_name),
    };
  },
  watch: {
    $route(to) {
      console.log("# to url: " + to.path);
      console.log("# to url: " + this.$route.params.lecture_name);

      this.page_name = this.$route.params.lecture_name;
      console.log("# to url: " + this.page_name);
      this.$forceUpdate();
    },
  },

  created() {
    console.log("# url： " + this.$route.params.lecture_name);
  },
};
</script>

<style></style>
