<template>
  <a-layout class="variable_content" style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0" :routes="router">
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
      <a-breadcrumb-item>分词与词性标注</a-breadcrumb-item>

      <!--a-breadcrumb-item>App</a-breadcrumb-item-->
    </a-breadcrumb>
    <a-layout-content :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        width: '100%',
        minHeight: '280px',
      }">
      <div>
        <h2><b>分词与词性标注</b></h2>
        <p>
          给定一篇中文，采用
          <a href="https://github.com/dongrixinyu/jiojio"><b>jiojio</b></a>
          分词工具包，做分词和词性标注任务。
        </p>

        <a-popover title="" trigger="hover">
          <template #content>
            <p>
              ●
              该工具提供<b>持续优化</b>的功能，定期更新默认的分词和词性标注模型，以达到更佳的效果和处理性能。
            </p>
            <p>
              ●
              您测试提交的每一条文本，都将为<b>jiojio</b>的优化提供助力。
            </p>
          </template>
          <a-button type="dashed">● 说明</a-button>
        </a-popover>
      </div>
      <textarea v-model="text" style="display: inline-block; margin-left: auto; margin-right: auto, width: 50%;" />
      <a-button style="
          display: block;
          margin-bottom: 10px;
          margin-left: auto;
          margin-right: 30px;
        " type="primary" @click="send">提交文本
        <CaretRightOutlined />
      </a-button>

      <a-layout style="display: block">
        <div v-if="response.is_ok == true && first_show == false">
          <!--div v-else-if=""></div>
          <div v-else-if=""></div-->
          <div style="background: #fff; padding: 10px; padding-bottom: 10px">
            <a-tag color="white">
              <font size="3" color="black"><b>标签说明：</b></font>
            </a-tag>
            <a-tag v-if="response.a_is_ok" color="rgb(130, 43, 43)">
              <font size="2.5"><b>形容词</b></font>
            </a-tag>
            <a-tag v-if="response.ad_is_ok" color="rgb(130, 56, 43)">
              <font size="2.5"><b>副形词</b></font>
            </a-tag>
            <a-tag v-if="response.an_is_ok" color="rgb(130, 69, 43)">
              <font size="2.5"><b>名形词</b></font>
            </a-tag>
            <a-tag v-if="response.c_is_ok" color="rgb(130, 95, 43)">
              <font size="2.5"><b>连词</b></font>
            </a-tag>
            <a-tag v-if="response.d_is_ok" color="rgb(130, 108, 43)">
              <font size="2.5"><b>副词</b></font>
            </a-tag>
            <a-tag v-if="response.f_is_ok" color="rgb(130, 121, 43)">
              <font size="2.5"><b>方位词</b></font>
            </a-tag>
            <a-tag v-if="response.m_is_ok" color="rgb(126, 130, 43)">
              <font size="2.5"><b>数词</b></font>
            </a-tag>
            <a-tag v-if="response.n_is_ok" color="rgb(100, 130, 43)">
              <font size="2.5"><b>名词</b></font>
            </a-tag>
            <a-tag v-if="response.nr_is_ok" color="rgb(87, 130, 43)">
              <font size="2.5"><b>人名</b></font>
            </a-tag>
            <a-tag v-if="response.nr1_is_ok" color="rgb(74, 130, 43)">
              <font size="2.5"><b>中文姓氏</b></font>
            </a-tag>
            <a-tag v-if="response.nrf_is_ok" color="rgb(61, 130, 43)">
              <font size="2.5"><b>外文名</b></font>
            </a-tag>
            <a-tag v-if="response.ns_is_ok" color="rgb(48, 130, 43)">
              <font size="2.5"><b>地名</b></font>
            </a-tag>
            <a-tag v-if="response.nt_is_ok" color="rgb(43, 130, 52)">
              <font size="2.5"><b>组织机构名</b></font>
            </a-tag>
            <a-tag v-if="response.nz_is_ok" color="rgb(43, 130, 65)">
              <font size="2.5"><b>专有名词</b></font>
            </a-tag>
            <a-tag v-if="response.o_is_ok" color="rgb(43, 130, 91)">
              <font size="2.5"><b>拟声词</b></font>
            </a-tag>
            <a-tag v-if="response.p_is_ok" color="rgb(43, 130, 104)">
              <font size="2.5"><b>介词</b></font>
            </a-tag>
            <a-tag v-if="response.q_is_ok" color="rgb(43, 130, 117)">
              <font size="2.5"><b>量词</b></font>
            </a-tag>
            <a-tag v-if="response.r_is_ok" color="rgb(43, 130, 130)">
              <font size="2.5"><b>代词</b></font>
            </a-tag>
            <a-tag v-if="response.s_is_ok" color="rgb(43, 117, 130)">
              <font size="2.5"><b>处所词</b></font>
            </a-tag>
            <a-tag v-if="response.t_is_ok" color="rgb(43, 104, 130)">
              <font size="2.5"><b>时间词</b></font>
            </a-tag>
            <a-tag v-if="response.u_is_ok" color="rgb(43, 91, 130)">
              <font size="2.5"><b>助词</b></font>
            </a-tag>
            <a-tag v-if="response.v_is_ok" color="rgb(43, 65, 130)">
              <font size="2.5"><b>动词</b></font>
            </a-tag>
            <a-tag v-if="response.vd_is_ok" color="rgb(43, 52, 130)">
              <font size="2.5"><b>副动词</b></font>
            </a-tag>
            <a-tag v-if="response.vi_is_ok" color="rgb(48, 43, 130)">
              <font size="2.5"><b>不及物动词</b></font>
            </a-tag>
            <a-tag v-if="response.w_is_ok" color="rgb(74, 43, 130)">
              <font size="2.5"><b>标点</b></font>
            </a-tag>
            <a-tag v-if="response.wx_is_ok" color="rgb(87, 43, 130)">
              <font size="2.5"><b>特殊字符</b></font>
            </a-tag>
            <a-tag v-if="response.x_is_ok" color="rgb(100, 43, 130)">
              <font size="2.5"><b>外文词</b></font>
            </a-tag>
            <a-tag v-if="response.email_is_ok" color="rgb(113, 43, 130)">
              <font size="2.5"><b>电子邮箱</b></font>
            </a-tag>
            <a-tag v-if="response.id_is_ok" color="rgb(126, 43, 130)">
              <font size="2.5"><b>身份证号</b></font>
            </a-tag>
            <a-tag v-if="response.ip_is_ok" color="rgb(130, 43, 121)">
              <font size="2.5"><b>IP地址</b></font>
            </a-tag>
            <a-tag v-if="response.jp_is_ok" color="rgb(130, 43, 108)">
              <font size="2.5"><b>日文</b></font>
            </a-tag>
            <a-tag v-if="response.ru_is_ok" color="rgb(130, 43, 95)">
              <font size="2.5"><b>俄文</b></font>
            </a-tag>
            <a-tag v-if="response.ko_is_ok" color="rgb(130, 43, 82)">
              <font size="2.5"><b>韩文</b></font>
            </a-tag>
            <a-tag v-if="response.tel_is_ok" color="rgb(130, 43, 69)">
              <font size="2.5"><b>电话号</b></font>
            </a-tag>
            <a-tag v-if="response.url_is_ok" color="rgb(130, 43, 58)">
              <font size="2.5"><b>URL链接</b></font>
            </a-tag>
          </div>
        </div>
        <div v-else-if="response.is_ok == false && first_show == false">
          <a-alert message="解析错误！" type="warning" show-icon />
          <a-card style="width: 100%">
            <p>● 请确保所提交的文本是正常的字符串 (●'◡'●)</p>
            <p>
              ● 如所提交确实无误，但解析错误，可通过以下 Github
              链接提交报错信息。
            </p>
            <p>
              ●
              <a href="https://github.com/dongrixinyu/jiojio/issues">提交报错信息</a>
            </p>
          </a-card>
        </div>
        <div style="background: #fff; padding: 20px">
          <font id="insertion_html" size="3.5"> </font>
        </div>
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
import authentication_hash_code from "@/utils/authentication";

const entity_mapping = {
  ad: '<span class="entity_tag ad"><b>',
  an: '<span class="entity_tag an"><b>',
  c: '<span class="entity_tag c"><b>',
  f: '<span class="entity_tag f"><b>',
  m: '<span class="entity_tag m"><b>',
  nr: '<span class="entity_tag nr"><b>',
  nr1: '<span class="entity_tag nr1"><b>',
  nrf: '<span class="entity_tag nrf"><b>',
  ns: '<span class="entity_tag ns"><b>',
  nt: '<span class="entity_tag nt"><b>',
  nz: '<span class="entity_tag nz"><b>',
  o: '<span class="entity_tag o"><b>',
  p: '<span class="entity_tag p"><b>',
  q: '<span class="entity_tag q"><b>',
  r: '<span class="entity_tag r"><b>',
  s: '<span class="entity_tag s"><b>',
  t: '<span class="entity_tag t"><b>',
  u: '<span class="entity_tag u"><b>',
  vd: '<span class="entity_tag vd"><b>',
  vi: '<span class="entity_tag vi"><b>',
  w: '<span class="entity_tag w"><b>',
  wx: '<span class="entity_tag wx"><b>',
  x: '<span class="entity_tag x"><b>',
  email: '<span class="entity_tag email"><b>',
  id: '<span class="entity_tag id"><b>',
  ip: '<span class="entity_tag ip"><b>',
  jp: '<span class="entity_tag jp"><b>',
  ru: '<span class="entity_tag ru"><b>',
  ko: '<span class="entity_tag ko"><b>',
  tel: '<span class="entity_tag tel"><b>',
  url: '<span class="entity_tag url"><b>',
  n: '<span class="entity_tag n"><b>',
  v: '<span class="entity_tag v"><b>',
  a: '<span class="entity_tag a"><b>',
  d: '<span class="entity_tag d"><b>',
  end_map: "</b></span>",
  front_p: "<p>",
  end_p: "</p>",
};

@Options({
  components: {
    CaretRightOutlined,
    HomeOutlined,
  },
})
export default class ParseTime extends Vue {
  // text =
  //  "据央视新闻消息，10月12日，福建省莆田市政府召开疫情防控情况新闻发布会，介绍最新情况。据通报，从本月10日至12日16时，大约两天时间内，累计报告新冠病毒核酸阳性64例，平均每日新增病例30例，其中确诊病例32例、无症状感染者32例。";
  text = "MySQL Reference Manuals: https://dev.mysql.com/doc/";
  rendered_text = "";
  new_string_end = entity_mapping["end_map"];

  first_show = true;
  response = {
    is_ok: false,
    n_is_ok: true,
    a_is_ok: true,
    ad_is_ok: false,
    an_is_ok: false,
    c_is_ok: false,
    d_is_ok: true,
    f_is_ok: false,
    m_is_ok: false,
    nr_is_ok: false,
    nr1_is_ok: false,
    nrf_is_ok: false,
    ns_is_ok: false,
    nt_is_ok: false,
    nz_is_ok: false,
    o_is_ok: false,
    p_is_ok: false,
    q_is_ok: false,
    r_is_ok: false,
    s_is_ok: false,
    t_is_ok: false,
    u_is_ok: false,
    v_is_ok: true,
    vi_is_ok: false,
    vd_is_ok: false,
    w_is_ok: true,
    wx_is_ok: false,
    x_is_ok: false,
    email_is_ok: false,
    id_is_ok: false,
    ip_is_ok: false,
    jp_is_ok: false,
    ru_is_ok: false,
    ko_is_ok: false,
    tel_is_ok: false,
    url_is_ok: false,
  };
  $router = router;
  meta = setup(() => useMeta({ title: '分词与词性标注 | 在线测试' }));

  mounted() {
    //console.log("ParseLocation mounted!");
  }
  send() {
    let { random_int, hash_code } = authentication_hash_code(this.text);
    jio_instance_with_jiojio({
      url: "/jio_api/jiojio_cws_pos",
      data: {
        text: this.text,
        random_num: random_int,  // 30000
        hash_code: hash_code,  // "464131b24e843ecd8d463e3accbe88e6"
        // whole_text: whole_text,
      },
    })
      .then((response) => {
        // console.log(response);
        this.first_show = false;
        this.response.is_ok = response.data.is_ok;

        // add entity to rendered_text
        this.rendered_text = "";

        let i;
        for (i in response.data.detail) {
          let word: string;
          let pos_type: string;
          word = response.data.detail[i][0];
          pos_type = response.data.detail[i][1];
          // console.log(this.new_string_end);
          if (pos_type == "ad") this.response.ad_is_ok = true;
          if (pos_type == "an") this.response.an_is_ok = true;
          if (pos_type == "c") this.response.c_is_ok = true;
          if (pos_type == "f") this.response.f_is_ok = true;
          if (pos_type == "m") this.response.m_is_ok = true;
          if (pos_type == "nr") this.response.nr_is_ok = true;
          if (pos_type == "nr1") this.response.nr1_is_ok = true;
          if (pos_type == "nrf") this.response.nrf_is_ok = true;
          if (pos_type == "ns") this.response.ns_is_ok = true;
          if (pos_type == "nt") this.response.nt_is_ok = true;
          if (pos_type == "nz") this.response.nz_is_ok = true;
          if (pos_type == "o") this.response.o_is_ok = true;
          if (pos_type == "p") this.response.p_is_ok = true;
          if (pos_type == "q") this.response.q_is_ok = true;
          if (pos_type == "r") this.response.r_is_ok = true;
          if (pos_type == "s") this.response.s_is_ok = true;
          if (pos_type == "t") this.response.t_is_ok = true;
          if (pos_type == "u") this.response.u_is_ok = true;
          if (pos_type == "vd") this.response.vd_is_ok = true;
          if (pos_type == "vi") this.response.vi_is_ok = true;
          if (pos_type == "wx") this.response.wx_is_ok = true;
          if (pos_type == "x") this.response.x_is_ok = true;
          if (pos_type == "email") this.response.email_is_ok = true;
          if (pos_type == "id") this.response.id_is_ok = true;
          if (pos_type == "ip") this.response.ip_is_ok = true;
          if (pos_type == "jp") this.response.jp_is_ok = true;
          if (pos_type == "ru") this.response.ru_is_ok = true;
          if (pos_type == "ko") this.response.ko_is_ok = true;
          if (pos_type == "tel") this.response.tel_is_ok = true;
          if (pos_type == "url") this.response.url_is_ok = true;

          this.rendered_text =
            this.rendered_text +
            (entity_mapping as any)[pos_type] +
            word +
            this.new_string_end;
        }
        // console.log("rendered_text");
        // console.log(this.rendered_text);

        // 后处理换行号，加线号等
        this.rendered_text = this.rendered_text.replace(/\n/g, "</p><p>");

        // 开头、末尾添加标签
        this.rendered_text =
          "<HR SIZE=10><p>" + this.rendered_text + "</p><HR SIZE=10>";

        // console.log(this.rendered_text);
        let insertion_html: HTMLElement;
        const temp = document.getElementById("insertion_html");
        // console.log(temp);
        if (temp) {
          insertion_html = temp;
        } else {
          throw new TypeError("the insertion_html element does not exist.");
        }

        insertion_html.innerHTML = this.rendered_text;
      })
      .catch(() => {
        this.first_show = false;
        this.response.is_ok = false;
      });
  }
}
</script>

<style lang="less">

//scoped
textarea {
  width: 100%;
  height: 140px;
  margin: 20px;
}

.entity_tag {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  display: inline-block;
  height: auto;
  margin-left: 3px;
  margin-right: 3px;
  padding: 0 7px;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  background: rgb(20, 158, 249);
  // background-color: rgb(20, 158, 249);
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  opacity: 1;
  transition: all 0.3s;
}

.entity_tag.a {
  background-color: rgb(130, 43, 43);
}

.entity_tag.ad {
  background-color: rgb(130, 56, 43);

  color: rgb();
}

.entity_tag.an {
  background-color: rgb(130, 69, 43);
}

.entity_tag.c {
  background-color: rgb(130, 95, 43);
}

.entity_tag.d {
  background-color: rgb(130, 108, 43);
}

.entity_tag.f {
  background-color: rgb(130, 121, 43);
}

.entity_tag.m {
  background-color: rgb(126, 130, 43);
}

.entity_tag.n {
  background-color: rgb(100, 130, 43);
}

.entity_tag.nr {
  background-color: rgb(87, 130, 43);
}

.entity_tag.nrf {
  background-color: rgb(61, 130, 43);
}

.entity_tag.nr1 {
  background-color: rgb(74, 130, 43);
}

.entity_tag.ns {
  background-color: rgb(48, 130, 43);
}

.entity_tag.nt {
  background-color: rgb(43, 130, 52);
}

.entity_tag.nz {
  background-color: rgb(43, 130, 65);
}

.entity_tag.o {
  background-color: rgb(43, 130, 91);
}

.entity_tag.p {
  background-color: rgb(43, 130, 104);
}

.entity_tag.q {
  background-color: rgb(43, 130, 117);
}

.entity_tag.r {
  background-color: rgb(43, 130, 130);
}

.entity_tag.s {
  background-color: rgb(43, 117, 130);
}

.entity_tag.t {
  background-color: rgb(43, 104, 130);
}

.entity_tag.u {
  background-color: rgb(43, 91, 130);
}

.entity_tag.v {
  background-color: rgb(43, 65, 130);
}

.entity_tag.vd {
  background-color: rgb(43, 52, 130);
}

.entity_tag.vi {
  background-color: rgb(48, 43, 130);
}

.entity_tag.w {
  background-color: rgb(74, 43, 130);
}

.entity_tag.wx {
  background-color: rgb(87, 43, 130);
}

.entity_tag.x {
  background-color: rgb(100, 43, 130);
}

.entity_tag.email {
  background-color: rgb(113, 43, 130);
}

.entity_tag.id {
  background-color: rgb(126, 43, 130);
}

.entity_tag.ip {
  background-color: rgb(130, 43, 121);
}

.entity_tag.jp {
  background-color: rgb(130, 43, 108);
}

.entity_tag.ru {
  background-color: rgb(130, 43, 95);
}

.entity_tag.ko {
  background-color: rgb(130, 43, 82);
}

.entity_tag.tel {
  background-color: rgb(130, 43, 69);
}

.entity_tag.url {
  background-color: rgb(130, 43, 58);
}

</style>
