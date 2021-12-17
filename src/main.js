import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick";

import VueLazyLoad from "vue-lazyload";
import VueSimpleVerify from "vue-simple-verify";
import "../node_modules/vue-simple-verify/dist/vue-simple-verify.css";

Vue.component("vue-simple-verify", VueSimpleVerify);
import less from "less";
Vue.use(less);
import {
  Image as VanImage,
  ContactEdit,
  NavBar,
  Field,
  Button,
  Toast as VanToast,
  CouponCell,
  CouponList,
  Popup,
  AddressList,
  AddressEdit,
  Icon
} from "vant";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 解决移动端点击300ms延迟
FastClick.attach(document.body);

// 使用图片懒加载的插件
Vue.use(VueLazyLoad);

Vue.config.productionTip = false;

//添加事件总线对象
Vue.prototype.$bus = new Vue();

//安装toast插件
// Vue.use(toast)

//安装vant插件
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(ContactEdit);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(VanToast);
Vue.use(Button);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Popup);
Vue.use(AddressList);
Vue.use(AddressEdit);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
