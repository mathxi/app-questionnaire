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
          <div class="md-title">{{questionnaire.label}}</div>
          <div class="md-subhead">Total questions: {{questionnaire.questions.length}}</div>
        </md-card-header>

        <RadioQuestion
          v-if="questionnaire.questions[curQuestionPosition() -1].type === 'radio'"
          :question="questionnaire.questions[curQuestionPosition() -1]"
        ></RadioQuestion>
        <CheckboxQuestion
          v-else-if="questionnaire.questions[curQuestionPosition() -1].type === 'checkbox'"
          :question="questionnaire.questions[curQuestionPosition() -1]"
        ></CheckboxQuestion>

        <md-card-actions>
          <md-button v-if="!isLastQuestion()" v-on:click="nextQuestion">Suivant</md-button>
          <md-button v-if="!isFirstQuestion()" v-on:click="precQuestion">Précédent</md-button>
          <md-button v-if="isLastQuestion()" v-on:click="endSurvey">Terminer</md-button>
        </md-card-actions>
      </md-card>
      <pre>{{user}}</pre>
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
  mounted() {},
  computed: {
    percentresponce() {
      return (this.curQuestionPosition() * 100) / this.nbuserSurveyQuestion();
    }
  },
  created() {
    //db.put(this.app__questionnaire);
  },
  methods: {
    // async getUserData() {
    //   var docUser = null;
    //   db.get(this.questionnaire._id)
    //     .then(doc => {
    //       docUser = doc;
    //       return docUser;
    //     })
    //     .catch(function(err) {
    //       console.log("get doc", err);
    //       return docUser;
    //     });
    // },
    // updateUserData(doc) {
    //   doc.surveys.push(this.user.surveys);
    //   const options = {
    //     force: true
    //   };
    //   return { doc: doc, options: options };
    // },
    // insertDocDB(doc, options) {
    //   db.put(doc, options)
    //     .then(function(response) {
    //       console.log("Insert survey success response", response);
    //     })
    //     .catch(function(err) {
    //       console.log("Insert survey err ", err);
    //     });
    // },
    endSurvey() {
      const options = {
        force: true
      };
      // this.user.surveys.push(this.app__questionnaire.surveys[this.survey]);
      //var docUser = this.getUserData();
      //const preparedInsert = this.updateUserData(docUser);
      //this.insertDocDB(preparedInsert.doc, preparedInsert.options);

      db.get(this.user._id)
        .then(doc => {
          console.log(doc, this.user);

          let tempFind = false;
          doc.surveys.foreach(docSurvey => {
            if (this.questionnaire._id === docSurvey._id) {
              tempFind = true;
            }
          });
          if (tempFind) {
            doc.surveys.push(this.questionnaire);
          } else {
            console.log("Questionnaire déjà remplis");
          }

          db.put(doc, options)
            .then(function(response) {
              console.log("Insert survey success response", response);
            })
            .catch(function(err) {
              console.log("Insert survey err ", err);
            });
        })
        .catch(function(err) {
          console.log("get doc", err);
        });

      router.push({
        path: "resultats",
        query: {
          idUser: this.user._id,
          idSurvey: this.questionnaire._id
        }
      });
    },
    currentSurvey() {
      // retourne L'INDEX
      return this.questionnaire._id;
    },
    nbuserSurveyQuestion() {
      return this.questionnaire.questions.length;
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
      question: 0,
      user: {
        _id: "MathieuJanioSurveyBadass",
        name: "Mathieu",
        surname: "Janio",
        compagny: "SurveyBadass",
        surveys: []
      },
      questionnaire: {
        _id: "BadassSurvey__app", //un questionnaire
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
                label: "Pâtes au beur",
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
