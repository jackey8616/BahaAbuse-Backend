// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons'

// Bootstrap
// import $ from 'jquery'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'

import ArticleList from '@/components/ArticleList'

library.add(
  faFile,
  faUser
)

Vue.config.productionTip = false
Vue.prototype.$ajax = Axios

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('article-list', ArticleList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
