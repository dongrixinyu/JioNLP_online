<template>
  <!--div style="width: 256px; float: left"-->
  <!--a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 0px; margin-left: 0; width: 80px; height: 80px"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button-->
  <div id="expand">
    <a-layout-sider width="220px" style="background: #fff">
      <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" v-model:openKeys="openKeys">
        <a-menu-item key="1">
          <template #icon>
            <PieChartOutlined />
          </template>
          <!--span> 关键短语抽取 </span-->
          <router-link id="extract_keyphrase" to="/jionlp_online/extract_keyphrase">关键短语抽取</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <DesktopOutlined />
          </template>
          <router-link id="parse_time" to="/jionlp_online/parse_time">时间语义解析</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <DesktopOutlined />
          </template>
          <router-link id="extract_time" to="/jionlp_online/extract_time">时间实体抽取</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <template #icon>
            <InboxOutlined />
          </template>
          <router-link id="parse_location" to="/jionlp_online/parse_location">地址解析</router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <template #icon>
            <InboxOutlined />
          </template>
          <router-link id="cws_pos" to="/jionlp_online/cws_pos">分词-词性标注</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>小工具集</template>
          <a-menu-item key="1-1">
            <router-link id="clean_text" to="/jionlp_online/clean_text">清洗文本</router-link>
          </a-menu-item>
          <a-menu-item key="1-2">
            <router-link id="parse_money" to="/jionlp_online/parse_money">货币金额抽取</router-link>
          </a-menu-item>
          <a-menu-item key="1-3">
            <router-link id="parse_id_card" to="/jionlp_online/parse_id_card">解析身份证号</router-link>
          </a-menu-item>
          <!--a-menu-item key="1-4">More...</a-menu-item-->
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>数据增强</template>
          <a-menu-item key="2-1">
            <router-link id="back_translation" to="/jionlp_online/back_translation">回译数据增强</router-link>
          </a-menu-item>
          <a-menu-item key="2-2">
            <router-link id="homophone_substitution" to="/jionlp_online/homophone_substitution">同音词替换</router-link>
          </a-menu-item>
          <!--a-menu-item key="2-3">More...</a-menu-item-->
          <!--a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">Option 11</a-menu-item>
          </a-sub-menu-->
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
  <div id="collapse">
    <a-layout-sider width="100%" style="background: #fff" v-model:collapsed="collapsed_b">
      <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed_b">
        <a-menu-item key="1">
          <template #icon>
            <PieChartOutlined />
          </template>
          <!--span> 关键短语抽取 </span-->
          <router-link id="extract_keyphrase" to="/jionlp_online/extract_keyphrase">关键短语抽取</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <DesktopOutlined />
          </template>
          <router-link id="parse_time" to="/jionlp_online/parse_time">时间语义解析</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <DesktopOutlined />
          </template>
          <router-link id="extract_time" to="/jionlp_online/extract_time">时间实体抽取</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <template #icon>
            <InboxOutlined />
          </template>
          <router-link id="parse_location" to="/jionlp_online/parse_location">地址解析</router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <template #icon>
            <InboxOutlined />
          </template>
          <router-link id="cws_pos" to="/jionlp_online/cws_pos">分词-词性标注</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>小工具集</template>
          <a-menu-item key="1-1">
            <router-link id="clean_text" to="/jionlp_online/clean_text">清洗文本</router-link>
          </a-menu-item>
          <a-menu-item key="1-2">
            <router-link id="parse_money" to="/jionlp_online/parse_money">货币金额抽取</router-link>
          </a-menu-item>
          <a-menu-item key="1-3">
            <router-link id="parse_id_card" to="/jionlp_online/parse_id_card">解析身份证号</router-link>
          </a-menu-item>
          <!--a-menu-item key="1-4">More...</a-menu-item-->
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>数据增强</template>
          <a-menu-item key="2-1">
            <router-link id="back_translation" to="/jionlp_online/back_translation">回译数据增强</router-link>
          </a-menu-item>
          <a-menu-item key="2-2">
            <router-link id="homophone_substitution" to="/jionlp_online/homophone_substitution">同音词替换</router-link>
          </a-menu-item>
          <!--a-menu-item key="2-3">More...</a-menu-item-->
          <!--a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">Option 11</a-menu-item>
          </a-sub-menu-->
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from "vue";
import {
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  setup() {
    const state = reactive({
      collapsed_b: true,
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1", "sub2"],
      preOpenKeys: [],
    });
    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return { ...toRefs(state), toggleCollapsed };
  },

  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
});
</script>

<style lang="less">

#expand {
  width: 200
}

#collapse {
  width: 80  // 受限于 side_bar 的固定值，改了就错，出现 sidebar 和 content 对不齐的情况
}

@media screen and (max-width: 801px){
  #expand {
    display: none;
  }
}

@media screen and (min-width: 800px){
  #collapse {
    display: none;
  }
}
</style>
