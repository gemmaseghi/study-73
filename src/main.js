import Vue from 'vue';
import VueKonva from 'vue-konva';
import VueMagpie from 'magpie-base';
import App from './App.vue';
import magpieConfig from './magpie.config.js';

Vue.config.productionTip = false;

// Read the participant's Sona survey code
const urlParams = new URLSearchParams(window.location.search);

Vue.prototype.$surveyCode =
  urlParams.get('survey_code') ||
  urlParams.get('SURVEY_CODE');

// Load Konva components
Vue.use(VueKonva, { prefix: 'Canvas' });

// Load Magpie components
Vue.use(VueMagpie, magpieConfig);

// Start app
new Vue({
  render: (h) => h(App)
}).$mount('#app');