<template>
    <div>
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
                    <!-- <a-sub-menu key="sub4">
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
                    </a-sub-menu> -->

                    <a-menu-item v-for="(item,i) in this.lecture_index" :key="i">
                        <template #icon>
                            <MailOutlined />
                        </template>
                        <router-link :to="'/lecture/' + item[1]">{{ item[2] }}</router-link>
                    </a-menu-item>

                </a-menu>
            </a-layout-sider>
        </div>
    </div>
</template>

<script>
import { stat_instance } from "@/utils/request";
import router from "@/router/index";
import { defineComponent, reactive, toRefs, watch, onMounted } from "vue";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // PieChartOutlined,
    MailOutlined,
    // DesktopOutlined,
    // InboxOutlined,
    // AppstoreOutlined,
} from "@ant-design/icons-vue";


export default defineComponent({

    data() {
        return {
            $router: router,
            lecture_index: [],
        };
    },

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

    // methods: {
    //     get_lecture_index() {
    //         return this.lecture_index;
    //     }
    // },

    mounted() {
        stat_instance({
            url: "/stat_api/get_lecture_index",
        })
            .then((response) => {
                this.lecture_index.push.apply(this.lecture_index, response.data.detail);

                console.log("lecture_index: ", response);
                console.log("lecture_index: ", this.lecture_index);
            })
            .catch(() => {
                console.log("### Failed to request navigation file.");
            });
    },

    components: {
        // PieChartOutlined,
        MailOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        // DesktopOutlined,
        // InboxOutlined,
        // AppstoreOutlined,
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
