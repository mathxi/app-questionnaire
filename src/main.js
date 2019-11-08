import Vue from 'vue'
import Default from './App.vue'
import router from './router'
import './registerServiceWorker'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import {globalValue} from './mixins/globalValue'

Vue.use(VueMaterial)

Vue.config.productionTip = false
Vue.prototype.$user = {
  prenom: "",
  nom: "",
  entreprise: ""
}



Vue.prototype.$questionnaire = {
  idQuestionnaire: 1,
  label: "Tests de sécurité",
  currentQuestion: 0,
  questions: [
    //Liste des question pour ce questionnaire
    {
      idQuestion: 1,
      type: "checkbox",
      label: "Est-tu beau?",
      choices: [
        //les choix pour cette question
        {
          idChoice: 1,
          label: "oui",
          value: "false"
        },
        {
          idChoice: 2,
          label: "non",
          value: "false"
        }
      ],
      trueAnswer: [
        {
          idChoice: 2,
          label: "non",
          value: "true"
        }
      ]
    },
  ]
}


new Vue({
  mixins:[globalValue],
  router,
  render: h => h(Default)
}).$mount('#app')
