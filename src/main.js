import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/config/use';
// mackdown代码展示样式
import 'prismjs/themes/prism.css';
// 引入语言切换
import i18n from './lang';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
