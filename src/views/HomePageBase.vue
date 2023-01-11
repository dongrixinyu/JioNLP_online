<template>
  <div>
    <a-layout style="flex-direction: row">
      <router-view> </router-view>
      <tui-juhe />
    </a-layout>
  </div>
</template>

<script>
import TuiJuhe from "@/components/advertisement/TuiJuhe.vue";
// import { useMeta } from "vue-meta";

export default {
  name: "HomePageBase",
  components: {
    // LectureNavigation,
    TuiJuhe,
  },
};
</script>

<style></style>
