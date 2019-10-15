<template>
  <div class="home">
    <div class="center__elem">
      <!-- <template v-for="question in app__questionnaire.surveys[0].questions">
        <RadioQuestion
          v-if="question.type === 'radio'"
          :key="question.idQuestion"
          :question="question"
        ></RadioQuestion>
        <CheckboxQuestion
          v-else-if="question.type === 'checkbox'"
          :key="question.idQuestion"
          :question="question"
        ></CheckboxQuestion>
      </template>-->
      <md-card>
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="percentresponce"></md-progress-bar>
        <md-card-header>
          <div class="md-title">{{app__questionnaire.surveys[currentSurvey()].label}}</div>
          <div
            class="md-subhead"
          >Total questions: {{app__questionnaire.surveys[currentSurvey()].questions.length}}</div>
        </md-card-header>

        <RadioQuestion
          v-if="app__questionnaire.surveys[currentSurvey()].questions[curQuestionPosition() -1].type === 'radio'"
          :question="app__questionnaire.surveys[currentSurvey()].questions[curQuestionPosition() -1]"
        ></RadioQuestion>
        <CheckboxQuestion
          v-else-if="app__questionnaire.surveys[currentSurvey()].questions[curQuestionPosition() -1].type === 'checkbox'"
          :question="app__questionnaire.surveys[currentSurvey()].questions[curQuestionPosition() -1]"
        ></CheckboxQuestion>

        <md-card-actions>
          <md-button v-if="!isLastQuestion()" v-on:click="nextQuestion">Suivant</md-button>
          <md-button v-if="!isFirstQuestion()" v-on:click="precQuestion">Précédent</md-button>
          <md-button v-if="isLastQuestion()" v-on:click="endSurvey">Terminer</md-button>
        </md-card-actions>
      </md-card>
      <pre>{{app__questionnaire.userSurvey}}</pre>
    </div>
  </div>
</template>

<script>
import router from "../router";
import checkboxquestion from "../components/checkboxquestion.vue";
import radioquestion from "../components/radioquestion.vue";
import moment from "moment";
import pouchdb from "pouchdb";

var db = new pouchdb("QuestionnaireApp");

db.changes().on("change", function() {
  console.log("Ch-Ch-Changes");
});
export default {
  name: "home",
  mounted(){

  },
  computed: {
    percentresponce() {
      return (this.curQuestionPosition() * 100) / this.nbuserSurveyQuestion();
    }
  },
  created() {
    //db.put(this.app__questionnaire);
  },
  methods: {
    endSurvey() {
      router.push("resultats");

      const userQuestionnaire = {};

      //db.put(this.app__questionnaire);
    },
    currentSurvey() {
      // retourne L'INDEX
      return this.survey;
    },
    nbuserSurveyQuestion() {
      return this.app__questionnaire.surveys[this.survey].questions.length;
    },
    isFirstQuestion() {
      // retourne un booleen pour savoir si c'est la première question du questionnaire courant
      if (this.curQuestionPosition() - 1 === 0) {
        return true;
      } else {
        return false;
      }
    },
    isLastQuestion() {
      const nbQuestion = this.nbuserSurveyQuestion();
      const curquestion = this.curQuestionPosition();
      // retourne un booleen pour savoir si c'est la dernière question du questionnaire courant
      console.log("nb question", nbQuestion, " curquestion", curquestion);
      if (nbQuestion === curquestion) {
        return true;
      } else {
        return false;
      }
    },
    curQuestionPosition() {
      // ne retourne pas l'index mais la position
      return this.question + 1;
    },
    nextQuestion: function() {
      //change la question courante pour la suivante
      if (this.isLastQuestion()) {
        this.finished = true;
      } else {
        console.log(this.isLastQuestion());
        this.question++;
      }
    },
    precQuestion: function() {
      //change la question courante pour la suivante
      if (!this.isFirstQuestion()) {
        this.question--;
      }
    }
  },
  data() {
    return {
      survey: 0,
      question: 0,
      user: {
        _id: "MathieuJanioSurveyBadass",
        name: "Mathieu",
        surname: "Janio",
        compagny: "SurveyBadass",
        surveys: [
          {
            idSurvey: 1, // un questionnaire
            label: "Le survey badass",
            questions: [
              //Liste des question pour ce questionnaire
              {
                idQuestion: 1,
                type: "radio",
                question: "Est-tu beau?",
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
                    value: "true"
                  }
                ],
                answer: [], // le / les object qui ont été répondu
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
                question: "Quesque tu aime?",
                choices: [
                  {
                    idResponse: 1,
                    label: "Pâte Carbonara",
                    value: "false"
                  },
                  {
                    idChoice: 2,
                    label: "Pâtes bolo",
                    value: "false"
                  },
                  {
                    idChoice: 3,
                    label: "Pâtes bolo",
                    value: "false"
                  }
                ],
                answer: [], // le / les object qui ont été répondu
                trueAnswer: [
                  {
                    idResponse: 1,
                    label: "Pâte Carbonara",
                    value: "false"
                  },
                  {
                    idChoice: 2,
                    label: "Pâtes bolo",
                    value: "false"
                  },
                  {
                    idChoice: 3,
                    label: "Pâtes bolo",
                    value: "false"
                  }
                ]
              }
            ]
          }
        ]
      },

      app__questionnaire: {
        _id: "BadassSurvey__app",
        userSurvey: {
          //Permet de gérer le survey courant mais également la fin / début et question courrante et peut être des stats avec le temps passé
          idUser: 1,
          name: "Mathieu",
          surname: "Janio",
          compagny: "",
          surveysIn: [
            {
              finished: false,
              startSurvey: moment().format("DD-MM-YYYY HH:mm"),
              idSurvey: 1,
              answer: [
                {
                  idQuestion: 1,
                  value: []
                }
              ]
            }
          ]
        },
        surveys: [
          // liste des peut-être différents questionnaires
          {
            idSurvey: 1, // un questionnaire
            label: "Le survey badass",
            questions: [
              //Liste des question pour ce questionnaire
              {
                idQuestion: 1,
                type: "radio",
                question: "Est-tu beau?",
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
                    value: "true"
                  }
                ],
                answer: [], // le / les object qui ont été répondu
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
                question: "Quesque tu aime?",
                choices: [
                  {
                    idResponse: 1,
                    label: "Pâte Carbonara",
                    value: "false"
                  },
                  {
                    idChoice: 2,
                    label: "Pâtes bolo",
                    value: "false"
                  },
                  {
                    idChoice: 3,
                    label: "Pâtes bolo",
                    value: "false"
                  }
                ],
                answer: [], // le / les object qui ont été répondu
                trueAnswer: [
                  {
                    idResponse: 1,
                    label: "Pâte Carbonara",
                    value: "false"
                  },
                  {
                    idChoice: 2,
                    label: "Pâtes bolo",
                    value: "false"
                  },
                  {
                    idChoice: 3,
                    label: "Pâtes bolo",
                    value: "false"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  components: {
    CheckboxQuestion: checkboxquestion,
    RadioQuestion: radioquestion
  }
};
</script>

<style lang='scss'>
.md-card {
  width: 700px;
  padding: 20px;
}

.md-checkbox {
  display: flex;
}
.center__elem {
  padding-top: 50px;
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
