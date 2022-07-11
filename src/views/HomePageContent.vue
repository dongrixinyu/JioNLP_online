<template>
    <a-layout style="padding: 24px">
        <a-layout-content :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }">
            <div id="head_line">
                <h2>JioNLP源站</h2>
                <p>
                    <environment-outlined />
                    &ensp;www.jionlp.com&emsp;
                    <bug-outlined />
                    &ensp;微信公众号：一个Bug
                </p>

            </div>
            <div>
                <a-row :gutter="16">
                    <a-card hoverable style="width: 100%; margin-bottom: 10px;" type="inner">
                        <template #cover>
                            <router-link id="jionlp_online" to="/jionlp_online">
                                <img class="home_page_image" alt="NLP在线解析"
                                    src="@/assets/others/home_page/jionlp_online_home_page.jpg" />
                            </router-link>
                        </template>
                        <!--a-card-meta title="🐤 条件随机场（CRF）" style="{font-weight: bold; text-align: left; height: 20px}">
                        </a-card-meta-->
                    </a-card>
                </a-row>
                <a-row :gutter="16">
                    <a-card hoverable style="width: 100%; margin-bottom: 10px;" type="inner" bordered="false">
                        <template #cover>
                            <router-link id="lecture" to="/lecture">
                                <img class="home_page_image" alt="NLP教程"
                                    src="@/assets/others/home_page/lecture_home_page.jpg" />
                            </router-link>
                        </template>
                        <!--a-card-meta title="🐤 条件随机场（CRF）" style="{font-weight: bold; text-align: left; height: 20px}">
                        </a-card-meta-->
                    </a-card>
                </a-row>
            </div>
        </a-layout-content>

    </a-layout>

</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useMeta } from 'vue-meta';
import {
    BugOutlined,
    // HomeOutlined,
    // RightSquareFilled,
    // InfoCircleFilled,
    EnvironmentOutlined,
    EyeOutlined,
} from "@ant-design/icons-vue";


export default defineComponent({
    components: {
        // HomeOutlined,
        BugOutlined,
        // InfoCircleFilled,
        // Notification,
        // TuiJuhe,
        EnvironmentOutlined,
        EyeOutlined,
    },

    setup() {
        useMeta({
            title: '首页',
            htmlAttrs: { lang: 'en', amp: true }
        })
    }

});
</script>

<style scoped>

.home_page_image {
    width: 100%;
}

#head_line {
    text-align: left;
    font-size: 22px;
    margin-bottom: 8px;
    font-family: "Times New Roman";
    font-weight: bold;
    font-style: normal;
    color: #332233
}

#sub_title {
    display: flex;
}

h3 {
    margin: 40px 0 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #00B441;
}

p {
    color: #777777;
    font-size: 14px;
    font-weight: normal;
}

</style>
