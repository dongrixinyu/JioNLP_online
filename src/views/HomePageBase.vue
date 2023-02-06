<template>
  <div>
    <a-layout style="flex-direction: row">
      <router-view> </router-view>
      <benice-sleeping-beverage />
    </a-layout>
  </div>
</template>

<script>
// import TuiJuhe from "@/components/advertisement/TuiJuhe.vue";
import BeniceSleepingBeverage from '@/components/advertisement/BeniceSleepingBeverage.vue';
// import { useMeta } from "vue-meta";

export default {
  name: 'HomePageBase',
  components: {
    // LectureNavigation,
    // TuiJuhe,
    BeniceSleepingBeverage,
  },
};
</script>

<style></style>
