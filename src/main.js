import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'normalize.css'
import Welcome from './Welcome.vue'
import Scan from './Scan.vue'
import Diagnosis from './Diagnosis.vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import Step4 from './Step4.vue'
import Step5 from './Step5.vue'
import Step6 from './Step6.vue'
import Rescan from './Rescan.vue'
import Healthy from './Healthy.vue'
import AppHeader from './Header.vue'

window.$ = window.jQuery = require('jquery');

Vue.use(VueRouter);

Vue.component('app-header',AppHeader);

const routes =[
  {
    path : '/',
    redirect : '/welcome' 
  },
  {
    path : '/welcome',
    component: Welcome
  },
  {
    path : '/scan',
    component : Scan
  },
  {
    path : '/diagnosis',
    component : Diagnosis
  },
  {
    path : '/step1',
    component : Step1
  },
  {
    path : '/step2',
    component : Step2
  },
  {
    path : '/step3',
    component : Step3
  },
  {
    path : '/step4',
    component : Step4
  },
  {
    path : '/step5',
    component : Step5
  },
  {
    path : '/step6',
    component : Step6
  },
  {
    path : '/rescan',
    component : Rescan
  },
  {
    path : '/healthy',
    component : Healthy
  }
];

const router = new VueRouter({
  routes
});

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
