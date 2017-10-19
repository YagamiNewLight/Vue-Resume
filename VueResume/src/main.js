// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import AV from 'leancloud-storage'

var APP_ID = '8axnRtGoxCJhEzsvNPEAHnol-gzGzoHsz';
var APP_KEY = '0YH4XkYflb4CUPfA743TGj8G';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})

Vue.config.productionTip = false;
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
