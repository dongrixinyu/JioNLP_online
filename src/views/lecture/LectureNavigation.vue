<template>
    <div id="expand">
        <a-layout-sider width="220px" style="background: #fff">
            <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" v-model:openKeys="openKeys">
                <a-sub-menu key="sub1">
                    <template #icon>
                        <MailOutlined />
                    </template>
                    <template #title>序列标注任务</template>
                    <a-menu-item key="1-0">
                        <router-link id="sequence_labeling" to="/lecture/sequence_labeling">序列标注任务简介</router-link>
                    </a-menu-item>

                    <a-menu-item key="1-1">
                        <router-link id="crf" to="/lecture/logistics_crf">条件随机场（CRF）</router-link>
                    </a-menu-item>
                    <!--a-menu-item key="1-2">
                        <router-link id="hmm" to="/lecture/hmm">隐马尔科夫模型</router-link>
                    </a-menu-item>
                    <a-menu-item key="1-3">
                        <router-link id="bilstm_crf" to="/lecture/bilstm_crf">Bi-LSTM-CRF模型</router-link>
                    </a-menu-item-->
                </a-sub-menu>
                <!--a-sub-menu key="sub2">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>信息论基础</template>
                    <a-menu-item key="2-0">
                        <router-link id="entropy" to="/lectures/entropy">信息熵、交叉熵、相对熵</router-link>
                    </a-menu-item>
                    <a-menu-item key="11">Option 11</a-menu-item>

                </a-sub-menu-->
            </a-menu>
        </a-layout-sider>
    </div>
    <div id="collapse">
        <a-layout-sider width="100%" style="background: #fff" v-model:collapsed="collapsed_b">
            <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed_b">
                <a-sub-menu key="sub1">
                    <template #icon>
                        <MailOutlined />
                    </template>
                    <template #title>序列标注任务</template>
                    <a-menu-item key="1-0">
                        <router-link id="sequence_labeling" to="/lectures/sequence_labeling">序列标注任务简介</router-link>
                    </a-menu-item>
                    <a-menu-item key="1-1">
                        <router-link id="crf" to="/lectures/logistics_crf">条件随机场（CRF）</router-link>
                    </a-menu-item>
                    <!--a-menu-item key="1-2">
                        <router-link id="hmm" to="/lectures/hmm">隐马尔科夫模型</router-link>
                    </a-menu-item>
                    <a-menu-item key="1-3">
                        <router-link id="bilstm_crf" to="/lectures/bilstm_crf">Bi-LSTM-CRF模型</router-link>
                    </a-menu-item-->
                </a-sub-menu>
                <!--a-sub-menu key="sub2">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>信息论基础</template>
                    <a-menu-item key="2-2">
                        <router-link id="entropy" to="/lectures/entropy">信息熵、交叉熵、相对熵</router-link>
                    </a-menu-item>
                </a-sub-menu-->
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
    width: 80 // 受限于 side_bar 的固定值，改了就错，出现 sidebar 和 content 对不齐的情况
}

@media screen and (max-width: 801px) {
    #expand {
        display: none;
    }
}

@media screen and (min-width: 800px) {
    #collapse {
        display: none;
    }
}
</style>
