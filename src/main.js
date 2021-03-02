/*
 * @Author: Lpf
 * @Date: 2021-03-02 16:54:40
 * @LastEditTime: 2021-03-02 17:13:35
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/config/use';
// mackdown代码展示样式
import '@/assets/css/prism.css';
// 引入语言切换
import i18n from './lang';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
