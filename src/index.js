import 'Styles/main.scss';
import Vue from 'vue';
import App from 'Components/App.vue';
import router from './router.js';
import store from './store.js';

new Vue({
  router,
  store,
  render: createElement => createElement(App),
  el: '#app'
});
