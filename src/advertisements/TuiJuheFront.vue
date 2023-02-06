<template>
  <div style="background-color: #ececec; padding: 20px; position: relative">
    <h2 id="tui_juhe_f">
      【聚合云推】你的<b class="content-color">免费</b
      >云端DIY推送小闹钟（基于JioNLP）
    </h2>
    <a-row
      :gutter="16"
      style="margin-left=0px; margin-right=0px; position: relative; display: flex; justify-content: center;"
    >
      <a-col :span="8.5">
        <a-card hoverable style="width: 240px" type="inner">
          <template #cover>
            <a href="https://tui.juhe.cn/?s=nlp_1" target="_blank">
              <img
                class="tui_juhe_f"
                alt="聚合云推-你的免费云上闹钟"
                src="@/assets/advertisement/tui_juhe/tui_juhe_1.jpg"
              />
            </a>
          </template>
          <a-card-meta
            title="【开发者的推送神器】"
            style="{font-weight: bold, text-align: center,height: 20px}"
          >
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8.5">
        <a-card hoverable style="width: 240px" type="inner">
          <template #cover>
            <a href="https://tui.juhe.cn/?s=nlp_2" target="_blank">
              <img
                class="tui_juhe_f"
                alt="聚合云推-免费云上闹钟"
                src="@/assets/advertisement/tui_juhe/tui_juhe_2.jpg"
              />
            </a>
          </template>
          <a-card-meta
            title="【自定义API推送】"
            style="font-weight: bold, height: 20px"
          >
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8.5">
        <a-card hoverable style="width: 240px" type="inner">
          <template #cover>
            <a href="https://tui.juhe.cn/?s=nlp_3" target="_blank">
              <img
                class="tui_juhe_f"
                alt="聚合云推-免费云上闹钟"
                src="@/assets/advertisement/tui_juhe/tui_juhe_3.jpg"
              />
            </a>
          </template>
          <a-card-meta
            title="【灵活的推送方式】"
            style="font-weight: bold, height: 20px"
          >
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'TuiJuheFront',
  props: {},
};
</script>

<style scoped>
.tui_juhe_f {
  font-weight: bold;
  width: 200px;
  height: 300px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#tui_juhe_f {
  font-weight: bold;
  font-size: large;
  position: relative;
  text-align: center;
}

.content-color {
  color: #42b983;
}
</style>
