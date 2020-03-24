import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {DatetimePicker,Button,Field,Checkbox, CheckboxGroup,ActionSheet,Toast} from 'vant'

Vue.use(DatetimePicker).use(Button).use(Field).use(Checkbox).use(CheckboxGroup).use(ActionSheet)
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
