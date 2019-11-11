import Vue from 'vue'
import Default from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
//import { globalValue } from './mixins/globalValue'
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
Vue.mixin({
  created() {
  },
  methods: {
    M_isConnected() {
      if (
        this.$user.prenom != "" &&
        this.$user.nom != "" &&
        this.$user.entreprise != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    verifierInscription(laRoute,msg) {
      if (this.M_isConnected()) {
        this.$router.push(laRoute);
      } else {
        this.M_snakbarMessage = msg
        this.M_showSnackbar = true
      }
    }
  },
  data() {
    return {
      M_showSnackbar: false,
      M_mdDuration: 1500,
      M_message: ""
    };
  }
});

new Vue({
  store,
  router,
  render: h => h(Default)
}).$mount('#app')
