import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueMathjax from 'vue-mathjax-next'
import { createMetaManager } from 'vue-meta'

// import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// createApp(App).config.productionTip = false
const app = createApp(App)
    // .use(VueMathjax)
    .use(router)
    .use(Antd)
    .use(createMetaManager())

app.mount('#app')
