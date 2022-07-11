<template>
  <div>
    <a-layout>
      <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} | JioNLP源站` : `SITE_NAME` }}</template>
      </metainfo>
      <PageHeader />
      <a-layout>
        <!--Navigation /-->
        <router-view> </router-view>
      </a-layout>
      <a-layout>
        <!--TuiJuheFront /-->
        <!--Shampoo /-->
      </a-layout>
      <a-layout>
        <PageFooter />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// import Navigation from "@/components/Navigation.vue";
import PageHeader from "@/views/PageHeader.vue";
// import Shampoo from "@/advertisements/Shampoo.vue";
// import TuiJuheFront from "@/advertisements/TuiJuheFront.vue";
import PageFooter from "@/views/PageFooter.vue";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  components: {
    PageHeader,
    // Shampoo,
    // TuiJuheFront,
    PageFooter,
  },
  setup() {
    useMeta({
      title: '',
      htmlAttrs: {lang: 'cn', amp: true}
    })
  }
};
</script>

<style>
#app {
  display: "inline-block";
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
#show_function {
  margin-left: 256px;
  margin-top: 0px;
  padding: 30px;
}

#variable-content {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>
