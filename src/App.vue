<template>
  <div>
    <a-layout>
      <PageHeader />
      <a-layout>
        <Navigation />
        <!--DefaultContent /-->
        <!--div id="variable-content">
          <DefaultContent />
        </div-->
        <router-view> </router-view>
      </a-layout>
      <a-layout>
        <Shampoo />
      </a-layout>
      <a-layout>
        <PageFooter />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import PageHeader from "@/components/PageHeader.vue";
// import DefaultContent from "@/components/DefaultContent.vue";
import Shampoo from "@/advertisements/Shampoo.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    Navigation,
    // DefaultContent,
    Shampoo,
    PageFooter,
  },
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
