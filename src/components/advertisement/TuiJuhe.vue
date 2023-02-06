<template>
  <div id="right_column">
    <a-col :span="8.5" style="margin-top: 43px">
      <a-card hoverable style="width: 226px" type="inner">
        <template #cover>
          <a href="https://tui.juhe.cn/?s=nlp_1" target="_blank">
            <img
              class="tui_juhe"
              alt="智能聚合云推"
              src="@/assets/advertisement/tui_juhe/tui_juhe_1.jpg"
            />
          </a>
        </template>
        <a-card-meta
          title="【免费推送神器】"
          style="{font-weight: bold, text-align: center,height: 20px}"
        >
        </a-card-meta>
      </a-card>
    </a-col>
  </div>
</template>

<script>
// import { RightSquareFilled, InfoCircleFilled } from "@ant-design/icons-vue";

//**
export default {
  name: 'TuiJuhe',
  props: {},
  components: {
    // HomeOutlined,
    // RightSquareFilled,
    // InfoCircleFilled,
  },
};
</script>

<style lang="less" scoped>
.tui_juhe {
  font-weight: bold;
  width: 200px;
  height: 300px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#tui_juhe {
  font-weight: bold;
  font-size: large;
  position: relative;
  text-align: center;
}

#right_column {
  // background-color: #ececec;
  padding: 10px;
  padding-left: 0;
  position: relative;
}

@media screen and (max-width: 800px) {
  #right_column {
    display: none;
  }
}
</style>
