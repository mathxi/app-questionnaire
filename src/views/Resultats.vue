<template>
  <div class="home">
    <div class="center__elem">
      <h1>Vos résultats</h1>
      <div
        class="md-subhead"
      >Total questions: {{user.surveys[getIndexSurveyFromId].questions.length}}</div>
      <md-card
        v-for="curQuestion in user.surveys[getIndexSurveyFromId].questions"
        v-bind:key="curQuestion.idQuestion"
      >
        <md-card-actions>
          <md-icon v-if="isQuestionRight(curQuestion)">check_circle</md-icon>
        </md-card-actions>
        <RadioQuestion
          v-if="curQuestion.type === 'radio'"
          v-bind:disable="true"
          :question="curQuestion"
        ></RadioQuestion>
        <CheckboxQuestion
          v-else-if="curQuestion.type === 'checkbox'"
          v-bind:disable="true"
          :question="curQuestion"
        ></CheckboxQuestion>
      </md-card>
    </div>
  </div>
</template>


<script>
import checkboxquestion from "../components/checkboxquestion.vue";
import radioquestion from "../components/radioquestion.vue";
import moment from "moment";
import pouchdb from "pouchdb";
import router from "../router";

var db = new pouchdb("QuestionnaireApp");

// db.changes().on("change", function() {
//   console.log("Ch-Ch-Changes");
// });

export default {
  name: "resultats",
  mounted() {
    const idUser = this.$route.query.idUser;
    db.get(idUser)
      .then(doc => {
        this.user = doc;
        console.log("doc= ", this.user);
      })
      .catch(function(err) {
        console.log(err);
      });
  },

  data() {
    return {
      idSurvey: this.$route.query.idSurvey,
      user: {
        _id: this.$route.query.idUser,
        name: "Mathieu",
        surname: "Janio",
        compagny: "SurveyBadass",
        surveys: [
          {
            idSurvey: "", // un questionnaire
            label: "",
            questions: []
          }
        ]
      }
    };
  },
  components: {
    CheckboxQuestion: checkboxquestion,
    RadioQuestion: radioquestion
  },
  methods: {
    isQuestionRight(curQuestion) {
      //les methodes find / map ect.. ne marchais pas

      console.log("question", curQuestion);
      let nbGoodQuestion = 0;
      for (let index = 0; index != curQuestion.trueAnswer.length; index++) {
        for (let index2 = 0; index2 != curQuestion.answer.length; index2++) {
          console.log("index", index);
          console.log("index2", index2);

          console.log("curQuestion.answer[index2]", curQuestion.answer[index2]);
          console.log(
            "curQuestion.trueAnswer[index]",
            curQuestion.trueAnswer[index]
          );

          console.log(
            "condition 1",
            curQuestion.answer[index2].idChoice ===
              curQuestion.trueAnswer[index].idChoice
          );
          if (
            curQuestion.answer[index2].idChoice ===
            curQuestion.trueAnswer[index].idChoice
          ) {
            nbGoodQuestion++;
          }
        }
      }
      console.log(
        "Bien répondu ?",
        nbGoodQuestion === curQuestion.trueAnswer.length
      );
      if (nbGoodQuestion === curQuestion.trueAnswer.length) {
        return true;
      } else {
        return false;
      }
    },
    getIndexQuestionFromId(idQuestion) {
      let indexSurvey = this.getIndexSurveyFromId;
      let questionIndex;
      for (let index = 0; index < this.user.surveys.length; index++) {
        if (this.user.surveys[indexSurvey].questions === idQuestion) {
          questionIndex = index;
        }
      }
      // console.log("questionIndex", questionIndex);
      return questionIndex;
    }
  },
  computed: {
    getIndexSurveyFromId() {
      let surveyIndex;
      for (let index = 0; index < this.user.surveys.length; index++) {
        // console.log("Found ?",this.user.surveys[index].id === this.idSurvey);

        if (this.user.surveys[index].id === this.idSurvey) {
          surveyIndex = index;
        }
      }
      // console.log("this.idSurvey", this.idSurvey);

      // console.log("surveyIndex", surveyIndex);
      return surveyIndex;
    }
  }
};
</script>

<style lang='scss' scoped>
.md-card i {
  color: green !important;
}
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
