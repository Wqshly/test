// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'

import 'element-ui/lib/theme-chalk/index.css'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import BasicTableTemp from '@/components/tableTemplate/BasicTableTemp'
import MultilevelLinkage from '@/components/areaCheck/MultilevelLinkage'

import echarts from 'echarts'
import api from '@/api/index'

Vue.use(ElementUI)
Vue.use(VueParticles)

Vue.prototype.$echarts = echarts
Vue.prototype.$api = api

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('basic-table-temp', BasicTableTemp)
Vue.component('multilevel-linkage', MultilevelLinkage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
