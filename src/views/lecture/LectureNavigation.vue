<template>
    <div id="navigation-button">
        <a-button type="primary" style="width: 62px;
                 height: 40px;" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
        </a-button>
    </div>
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
                <a-sub-menu key="sub2">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>信息论基础</template>
                    <a-menu-item key="2-0">
                        <router-link id="entropy" to="/lecture/entropy_theory_basics">信息熵、交叉熵、相对熵</router-link>
                    </a-menu-item>
                    <!-- <a-menu-item key="11">Option 11</a-menu-item> -->

                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>机器学习算法</template>
                    <a-menu-item key="3-0">
                        <router-link id="logistic" to="/lecture/logistic_regression">逻辑回归</router-link>
                    </a-menu-item>
                    <!-- <a-menu-item key="11">Option 11</a-menu-item> -->
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <template #icon>
                        <DesktopOutlined />
                    </template>
                    <template #title>词向量</template>
                    <a-menu-item key="4-0">
                        <router-link id="word2vec" to="/lecture/word2vec">word2vec</router-link>
                    </a-menu-item>

                    <a-menu-item key="4-1">
                        <router-link id="glove" to="/lecture/glove">GloVe</router-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub5">
                    <template #icon>
                        <PieChartOutlined />
                    </template>
                    <template #title>预训练模型</template>
                    <a-menu-item key="5-0">
                        <router-link id="bert" to="/lecture/bert">Bert</router-link>
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
    </div>

</template>

<script>
import { defineComponent, reactive, toRefs, watch, onMounted } from "vue";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    // InboxOutlined,
    AppstoreOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
    setup() {
        const state = reactive({
            collapsed_b: true,
            collapsed: false,
            selectedKeys: ["1"],
            openKeys: ["sub1", "sub2", "sub3", "sub4", "sub5"],
            preOpenKeys: [],
        });
        watch(
            () => state.openKeys,
            (val, oldVal) => {
                state.preOpenKeys = oldVal;
            }
        );

        onMounted(() => {
            document.addEventListener('click', (event) => {
                const userClick = document.getElementById('navigation-button');
                // console.log("click button: ", userClick.contains(event.target));
                const navigation_expand = document.getElementById('expand');

                const window_width = window.innerWidth;
                // console.log("window_width: ", window_width);
                if (window_width < 801) {
                    if (userClick && userClick.contains(event.target)) {
                        // 点击了 navigation-button 按钮，则开启导航页
                        navigation_expand.style.display = "block";
                    } else {
                        navigation_expand.style.display = "none";
                    }
                }
            });

            window.addEventListener('resize', function() {
                const navigation_expand = document.getElementById('expand');
                if (window.innerWidth > 800) {
                    navigation_expand.style.display = "block";
                } else {
                    navigation_expand.style.display = "none";
                }
            });
        });

        const toggleCollapsed = () => {
            let collapsed_div = document.getElementById("expand");
            if (collapsed_div.style.display == "") {
                // 该匹配必然在初次加载时进行匹配，后续则不需要
                collapsed_div.style.display = "block";
            } else {
                if (collapsed_div.style.display == "none") {
                    collapsed_div.style.display = "block";
                } else {
                    collapsed_div.style.display = "none";
                }
            }

            // state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };

        return { ...toRefs(state), toggleCollapsed };
    },

    components: {
        PieChartOutlined,
        MailOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        DesktopOutlined,
        // InboxOutlined,
        AppstoreOutlined,
    },
});
</script>

<style lang="less">


#navigation-button {
    z-index: 20;
    display: block;
    position: fixed;
    top: 10px;
    left: 9px;
}

#expand {
    z-index: 9;
    position: static;
    width: 200;
}

@media screen and (max-width: 800px) {
    #expand {
        position: fixed;
        display: none;
    }
}

@media screen and (min-width: 801px) {
    #navigation-button {
        display: none;
    }
}
</style>
