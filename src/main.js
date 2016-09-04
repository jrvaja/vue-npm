import Vue from 'vue';
var VueResource = require('vue-resource');
Vue.use(VueResource);

Vue.component('example', require('../components/example.vue'));

new Vue({
  el: 'body',
  data:{
  	msg:'Msg'
  }
})