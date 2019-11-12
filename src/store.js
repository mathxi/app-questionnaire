import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: {
            prenom: "valeur",
            nom: "default",
            entreprise: "something"
        },
        globalMessage: {
            M_showSnackbar: false,
            M_mdDuration: 1500,
            M_style:"background-color: #bd4747;",
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
                    {
                        idQuestion: 2,
                        type: "checkbox",
                        label: "Tu m'aimes?",
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
                                label: "oui",
                                value: "true"
                            }
                        ]
                    },
                ]
            }
        ]
    },
    mutations: {
        updateSnackBar(state, snackBar) {
            state.globalMessage = snackBar
        },
        updateUser(state, user) {
            state.user = user
        },
        updateQuestionnaire(state, questionnaire) {
            state.questionnaires = questionnaire
        },
        updateCurrQuestion(state, operation) {
            console.log("opération", operation)
            state.questionnaires[0].currentQuestion += operation
            console.log("state.questionnaires[0].currentQuestion",state.questionnaires[0].currentQuestion)
        },
    },
    getters: {
        getQuestionnaire: state =>(questionnaireIndex)=> {
            return state.questionnaires[questionnaireIndex]
        },
        getUser: state => {
            return state.user
        },
        getSnackBar: state => {
            return state.globalMessage
        }
    },
    actions: {
        verifierInscription(context, payload) {
            console.log("context", context)
            console.log("route", payload.route)
            console.log("message", payload.message)
            const user = context.getters.getUser
            console.log(user)
            if (
                user.prenom != "" &&
                user.nom != "" &&
                user.entreprise != ""
            ) {
                context.commit('updateSnackBar', {
                    M_showSnackbar: true,
                    M_mdDuration: 1500,
                    M_style:"background-color: rgb(71, 165, 72);",
                    M_message: "Connecté"
                })
                console.log("utilisateur connecté")
                router.push(payload.route)
            } else {
                context.commit('updateSnackBar', {
                    M_showSnackbar: true,
                    M_mdDuration: 1500,
                    M_style:"background-color: #bd4747;",
                    M_message: payload.message
                })
                return false;
            }
        }
    }
})
