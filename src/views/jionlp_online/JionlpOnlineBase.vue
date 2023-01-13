<template>
  <div>
    <a-layout>
      <jionlp-online-navigation />
      <router-view> </router-view>
      <benice-sleeping-beverage />
    </a-layout>
  </div>
</template>

<script>
import JionlpOnlineNavigation from "@/views/jionlp_online/JionlpOnlineNavigation.vue";
// import { useMeta } from "vue-meta";
import BeniceSleepingBeverage from "@/components/advertisement/BeniceSleepingBeverage.vue";

export default {
  name: "JionlpOnlineBase",
  components: {
    JionlpOnlineNavigation,
    BeniceSleepingBeverage,
  },
};
</script>

<style></style>
