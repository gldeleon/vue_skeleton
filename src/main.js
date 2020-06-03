import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Axios from "axios";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/*import custom css*/
//import './custom.scss'
import "./styles/styles.css";

Vue.use(VueSession);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

/*para las sesiones*/
//Vue.prototype.$session = VueSession
/*declaramos la url global*/
/*local*/
//Vue.prototype.$url = "http://localhost:8000/";

/**Prod */
Vue.prototype.$url = 'http://api.control-de-pesoh.mx/';

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
