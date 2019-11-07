import Vue from 'vue'
import Default from './App.vue'
import router from './router'
import './registerServiceWorker'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false
Vue.prototype.$user = {
  prenom: "",
  nom: "",
  entreprise: ""
}

Vue.prototype.$questionnaire = {
  idQuestionnaire: 1,
  label: "Tests de sécurité"
}

var mixin = {
  methods: {
    isConnected: function () {
      if (
        this.$user.prenom != "" &&
        this.$user.nom != "" &&
        this.$user.entreprise != ""
      ) {
        return true
      } else {
        return false
      }
    },
  }
}

new Vue({
  mixins:[mixin],
  router,
  render: h => h(Default)
}).$mount('#app')
