<template>
  <div style="background-color: #ececec; padding: 20px; position: relative">
    <h2 id="shampoo">【碧耐丝●洗发水/护发素】工作学习再忙，也要对自己头发好一点哟</h2>
    <a-row :gutter="16"
      style="margin-left=0px; margin-right=0px; position: relative; display: flex; justify-content: center;">
      <a-col :span="8.5">
        <a-card hoverable style="width: 240px" type="inner">
          <template #cover>
            <a href="https://h5.c3tech.cn/mall/goodsInfo/389200?fromAgentId=107700506&shareAgentId=&isJump=jump&siteId=9947&step=TOKEN&sjid=9947"
              target="_blank">
              <img class="shampoo" id="shampoo_1" alt="碧耐丝洗发水-护发素"
                src="@/assets/advertisement/benice/benice_shampoo_1.jpg" />
            </a>
          </template>
          <a-card-meta title="【台湾原产、销量领先】" style="{font-weight: bold, text-align: center,height: 20px}">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8.5">
        <a-card hoverable style="width: 240px" type="inner">
          <template #cover>
            <a href="https://h5.c3tech.cn/mall/goodsInfo/389200?fromAgentId=107700506&shareAgentId=&isJump=jump&siteId=9947&step=TOKEN&sjid=9947"
              target="_blank">
              <img class="shampoo" id="shampoo_1" alt="碧耐丝洗发水-护发素"
                src="@/assets/advertisement/benice/benice_shampoo_2.jpg" />
            </a>
          </template>
          <a-card-meta title="【零硅油】【护发防脱】" style="font-weight: bold, height: 20px">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8.5">
        <a-card hoverable style="width: 240px" type="inner">
          <template #cover>
            <a href="https://h5.c3tech.cn/mall/goodsInfo/389200?fromAgentId=107700506&shareAgentId=&isJump=jump&siteId=9947&step=TOKEN&sjid=9947"
              target="_blank">
              <img class="shampoo" id="shampoo_3" alt="碧耐丝 洗发水-护发素"
                src="@/assets/advertisement/benice/benice_shampoo_3.jpg" />
            </a>
          </template>
          <a-card-meta title="【微信扫码、进入商城】" style="font-weight: bold, height: 20px">
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Shampoo",
  props: {},
};
</script>

<style scoped>
.shampoo {
  font-weight: bold;
  width: 200px;
  height: 300px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#shampoo {
  font-weight: bold;
  font-size: large;
  position: relative;
  text-align: center;
}

.ant_row {
  margin-left: 0px;
  margin-right: 0px;
  display: flex;
  justify-content: center;
}
</style>
