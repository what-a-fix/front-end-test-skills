import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSmartWidget from "vue-smart-widget";
import ColorPicker from "vue-accessible-color-picker";


Vue.use(ColorPicker);
Vue.use(VueSmartWidget);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
