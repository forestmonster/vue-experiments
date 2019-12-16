import Vue from 'vue'
import App from './making_components_talk_with_vuex.vue'
import store from './store'

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')