<template>
    <div>
        <div id="horizontal-navigation-button">
            <a-button type="primary" style="width: 62px;
                    height: 40px;" @click="toggleCollapsed">
                <MenuUnfoldOutlined v-if="collapsed" />
                <MenuFoldOutlined v-else />
            </a-button>
        </div>
        <div id="horizontal-expand">
            <a-layout-sider width="220px" style="background: #fff">
                <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" v-model:openKeys="openKeys">

                    <a-menu-item key="0">
                        <router-link id="nlp_online" to="/jionlp_online">&emsp;NLP 在线</router-link>
                    </a-menu-item>

                    <a-menu-item key="1">
                        <router-link id="nlp_product" to="/product">&emsp;NLP 产品</router-link>
                    </a-menu-item>

                    <a-menu-item key="2">
                        <router-link id="nlp_lecture" to="/lecture/lecture_home_page">&emsp;NLP 教程</router-link>
                    </a-menu-item>

                    <a-menu-item key="3">
                        <router-link id="contact_us" to="/contact_us">&emsp;联系我们</router-link>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch, onMounted } from "vue";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // PieChartOutlined,
    // MailOutlined,
    // DesktopOutlined,
    // InboxOutlined,
    // AppstoreOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
    setup() {
        const state = reactive({
            collapsed_b: true,
            collapsed: false,
            selectedKeys: ["1"],
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
                const userClick = document.getElementById('horizontal-navigation-button');
                // console.log("click button: ", userClick.contains(event.target));
                const navigation_expand = document.getElementById('horizontal-expand');

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

            window.addEventListener('resize', function () {
                const navigation_expand = document.getElementById('horizontal-expand');
                navigation_expand.style.display = "none";

            });
        });

        const toggleCollapsed = () => {
            let collapsed_div = document.getElementById("horizontal-expand");
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
        // PieChartOutlined,
        // MailOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        // DesktopOutlined,
        // InboxOutlined,
        // AppstoreOutlined,
    },
});
</script>

<style lang="less">
#horizontal-navigation-button {
    z-index: 20;
    display: block;
    position: fixed;
    top: 10px;
    left: 9px;
}

#horizontal-expand {
    z-index: 9;
    position: static;
    width: 200;
    display: none;
}

@media screen and (max-width: 800px) {
    #horizontal-expand {
        position: fixed;
        display: none;
    }
}

@media screen and (min-width: 801px) {
    #horizontal-navigation-button {
        display: none;
    }
}
</style>
