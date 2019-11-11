import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user:{
            prenom:"",
            nom:"",
            entreprise:""
        },
        globalMessage: {
            M_showSnackbar: false,
            M_mdDuration: 1500,
            M_message: ""
        },
        questionnaires: [
            {
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
        ]
    },
    mutations: {
    },
    actions: {
        getUser(state){
            return true
        }
        verifierInscription(state,route, message){
            if()
        }
    }
})
