// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import routerConfig from './router.config';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter(routerConfig, {
  linkActiveClass: 'active'
});

new Vue({
  router: router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');

