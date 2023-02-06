<template>
  <div id="right_column">
    <a-col :span="8.5" style="margin-top: 43px">
      <a-card hoverable style="width: 226px" type="inner">
        <template #cover>
          <img
            class="advertisement"
            alt="Benice安睡饮，助您安稳入眠"
            src="@/assets/advertisement/benice/benice_sleeping_beverage.jpg"
          />
        </template>
        <a-card-meta
          title="【Benice六黑固元饮】"
          style="{font-weight: bold, text-align: center,height: 20px}"
        >
        </a-card-meta>
      </a-card>
    </a-col>
  </div>
</template>

<script>
export default {
  name: 'BeniceSleepingBeverage',
  props: {},
  components: {},
};
</script>

<style lang="less" scoped>
.advertisement {
  font-weight: bold;
  width: 200px;
  height: 350px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
