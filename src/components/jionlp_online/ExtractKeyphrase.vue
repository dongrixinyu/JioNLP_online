<template>
  <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0" :routes="$router">
      <a-breadcrumb-item>
        <router-link to="/">
          <home-outlined />
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/jionlp_online">
          NLP 在线解析
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>关键短语抽取</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        width: '100%',
        minHeight: '280px',
      }">
      <div>
        <h2><b>关键短语抽取</b></h2>
        <p>给定一篇文本，从中抽取出表达概括性、重要性的短语。</p>
        <a-popover title="" trigger="hover">
          <template #content>
            <p>
              ● 该方法提供全量可选参数供参考
              <a
                href="https://github.com/dongrixinyu/JioNLP/blob/master/jionlp/algorithm/keyphrase/extract_keyphrase.py"><b>关键短语抽取参数说明</b></a>与
              <a
                href="https://github.com/dongrixinyu/JioNLP/wiki/Gadget-说明文档#user-content-关键短语抽取"><b>关键短语抽取说明文档</b></a>。
            </p>
            <p>
              ● 该方法除单纯抽取文本关键短语外，还可以应用于
              <a
                href="https://github.com/dongrixinyu/JioNLP/wiki/Gadget-说明文档#user-content-扩展应用一扩展类型短语"><b>扩展类型短语</b></a>与<a
                href="https://github.com/dongrixinyu/JioNLP/wiki/Gadget-说明文档#user-content-扩展应用二扩充ner特定类型实体"><b>扩充NER特定类型实体</b></a>。
            </p>
          </template>
          <a-button type="dashed">● 说明</a-button>
        </a-popover>
      </div>
      <textarea v-model="text" style="display: inline-block; margin-left: auto; margin-right: auto, width: 50%;" />
      <HR SIZE="10" />
      <div>
        <h4><b>参数配置</b></h4>
      </div>
      <a-input-group size="small">
        <a-row style="height: 30px">
          <a-col :span="80">
            <a-input style="
                width: 80px;
                height: 24px;
                margin: 3px;
                padding: 0px 7px;
                font-size: 14px;
              " placeholder="5" v-model:value="top_k">
            </a-input>
          </a-col>
          <a-col :span="80">
            <span>
              <p style="height: 24px; margin: 3px; padding: 3px">
                指定获取的<b>短语个</b>数，可取值 -1 或正整数，-1
                表示返回所有获取短语
              </p>
            </span>
          </a-col>
        </a-row>
      </a-input-group>
      <a-input-group size="small">
        <a-row style="height: 30px">
          <a-col :span="80">
            <a-input style="
                width: 80px;
                height: 24px;
                margin: 3px;
                padding: 0px 7px;
                font-size: 14px;
              " placeholder="0.5" v-model:value="topic_theta">
            </a-input>
          </a-col>
          <a-col :span="80">
            <span>
              <p style="height: 24px; margin: 3px; padding: 3px">
                指定<b>主题突出度权重</b>，默认为 0.5，取值范围为 正数
              </p>
            </span>
          </a-col>
        </a-row>
      </a-input-group>

      <a-checkbox-group v-model:value="param_values">
        <a-row>
          <a-col :span="80">
            <a-checkbox value="strict_pos">是否<b>仅</b>获取<b>名词短语</b></a-checkbox>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="80">
            <a-checkbox value="allow_pos_weight">是否添加短语<b>词性权重</b>，将某类词性短语（如动词短语、形容词短语）进行权重提升</a-checkbox>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="80">
            <a-checkbox value="allow_length_weight">是否添加短语<b>长度权重</b>，token 长度为 2~5
              的短语更易被抽取。</a-checkbox>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="80">
            <a-checkbox value="allow_topic_weight">是否添加<b>主题突出度</b>，可规避非主题短语被抽取（如：日期等）</a-checkbox>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="80">
            <a-checkbox value="without_person_name">是否<b>剔除</b>短语中出现<b>人名</b></a-checkbox>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="80">
            <a-checkbox value="without_location_name">是否<b>剔除</b>短语中出现<b>地名</b></a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>

      <a-button style="
          display: block;
          margin-bottom: 10px;
          margin-left: auto;
          margin-right: 30px;
        " type="primary" @click="send">提交文本
        <CaretRightOutlined />
      </a-button>

      <a-layout style="display: block">
        <div v-if="response.detail.length > 0">
          <a-table style="text-align: center; display: block" :columns="table_columns" :data-source="response.detail"
            :footer="null">
          </a-table>
        </div>
        <div v-else></div>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { Options, setup, Vue } from "vue-class-component";
import { CaretRightOutlined, HomeOutlined } from "@ant-design/icons-vue";
import { useMeta } from 'vue-meta';
import router from "@/router/index";
import { jio_instance_with_jiojio } from "@/utils/request";
import { ref } from "vue";
import authentication_hash_code from "@/utils/authentication";

const table_columns = [
  {
    title: "关键短语",
    dataIndex: "keyphrase",
    sorter: false,
    width: "40%",
    slots: { title: "customTitle", customRender: "name" },
  },
  {
    title: "权重",
    dataIndex: "weight",
    width: "25%",
    key: "weight",
  },
];

type Keyphrase = {
  key: string;
  keyphrase: string;
  weight: string;
};

@Options({
  components: {
    CaretRightOutlined,
    HomeOutlined,
  },
})
class ExtractKeyphrase extends Vue {
  text =
    '        【标题：中秋国庆双节都加班，可拿24天的日工资】\n\
        8月临近尾声，中秋、国庆两个假期已在眼前。2021年中秋节是9月21日，星期二。 \
有不少小伙伴翻看放假安排后，发现中秋节前后两个周末都要"补"假。\n \
        记者注意到，根据放假安排，9月18日（星期六）上班，9月19日至21日放假调休，也就是从周日开始放假3天。由于中秋节后上班不到 10天，\
又将迎来一个黄金周—国庆长假，因此工作也就"安排"上了。2021年10月1日至7日放假调休，共7天。9月26日（星期日）、10月9日（星期六）上班。\n\
        双节来袭，仍有人要坚守岗位。加班费怎么算？记者为辛勤的小伙伴们算了一笔账。今年中秋加上国庆，\
两个假日加在一起共有10个加班日，如果全部加班，则可以拿到相当于24天的日工资。\
根据规定，9月21日中秋节和10月1日、2日、3日均为法定假日，用人单位安排劳动者加班工作，应按照不低于劳动者本人日或小时工资的300%支付加班工资；\
9月19日、20日和10月4日、5日、6日、7 日，用人单位可选择给予补休或按照不低于劳动者本人日或小时工资的200%支付加班工资。\
也就是说，如果10天全部加班，就可以拿到24天的日工资收入。\n\
        值得注意的是，从2021年8月1日起，江苏全省实施新的最低工资标准，以一类地区南京的月最低工资标准2280元为例，\
日工资收入最低约为104.83元，如果双节都加班的话，至少可以拿到2515.86元加班费。\
人社部门提醒，当然这只是按照最低工资标准算的最低加班费，实际情况中，加班工资应该与个人实际工资挂钩。';

  response = { is_ok: false, detail: Array<Keyphrase>() };
  table_columns = table_columns;
  $router = router;
  meta = setup(() => useMeta({ title: '关键短语抽取 | 在线测试' }));

  param_values = ref([
    "strict_pos",
    "allow_pos_weight",
    "allow_length_weight",
    "allow_topic_weight",
  ]);
  top_k = ref<string>("5");
  topic_theta = ref<string>("0.5");
  strict_pos = true;
  allow_pos_weight = true;
  allow_length_weight = true;
  allow_topic_weight = true;
  without_person_name = false;
  without_location_name = false;

  mounted() {
    //console.log("ExtractKeyphrase mounted!");
  }
  send() {
    // 处理参数
    if (this.param_values.toString().includes("strict_pos")) {
      this.strict_pos = true;
    } else {
      this.strict_pos = false;
    }
    if (this.param_values.toString().includes("allow_pos_weight")) {
      this.allow_pos_weight = true;
    } else {
      this.allow_pos_weight = false;
    }
    if (this.param_values.toString().includes("allow_length_weight")) {
      this.allow_length_weight = true;
    } else {
      this.allow_length_weight = false;
    }
    if (this.param_values.toString().includes("allow_topic_weight")) {
      this.allow_topic_weight = true;
    } else {
      this.allow_topic_weight = false;
    }
    if (this.param_values.toString().includes("without_person_name")) {
      this.without_person_name = true;
    } else {
      this.without_person_name = false;
    }
    if (this.param_values.toString().includes("without_location_name")) {
      this.without_location_name = true;
    } else {
      this.without_location_name = false;
    }
    let { random_int, hash_code } = authentication_hash_code(this.text);
    jio_instance_with_jiojio({
      url: "/jio_api/extract_keyphrase",
      data: {
        text: this.text,
        strict_pos: this.strict_pos,
        allow_pos_weight: this.allow_pos_weight,
        allow_length_weight: this.allow_length_weight,
        allow_topic_weight: this.allow_topic_weight,
        without_person_name: this.without_person_name,
        without_location_name: this.without_location_name,
        top_k: parseInt(this.top_k.toString()),
        topic_theta: parseFloat(this.topic_theta.toString()),
        random_num: random_int,
        hash_code: hash_code
      },
    })
      .then((response) => {
        //console.log("response");
        this.response.detail = Array<Keyphrase>();
        this.response.is_ok = response.data.is_ok;
        var i;
        for (i in response.data.detail) {
          this.response.detail.push({
            key: i.toString(),
            keyphrase: response.data.detail[i][0],
            weight: response.data.detail[i][1].toFixed(4),
          });
        }
        //console.log(this.response);
      })
      .catch((error) => {
        //console.log(error);
      });
  }
}

export default ExtractKeyphrase;
</script>

<style lang="less" scoped>
textarea {
  width: 100%;
  height: 300px;
  margin: 20px;
}
</style>
