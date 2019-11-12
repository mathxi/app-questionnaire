<template>
  <div class="resultats">
    <div class="center__elem">
      <h1>Vos résultats</h1>
      <div class="md-subhead">Total questions: {{questionnaire.questions.length}}</div>
      <md-card
        v-for="curQuestion in questionnaire.questions"
        v-bind:key="curQuestion.idQuestion"
      >
        <md-card-actions>
          <md-icon v-if="isQuestionRight(curQuestion)">check_circle</md-icon>
        </md-card-actions>
        <CheckboxQuestion v-bind:disable="true" :question="curQuestion"></CheckboxQuestion>
      </md-card>
    </div>
  </div>
</template>


<script>
// Vue Compossant servant a afficher les résultats d'un questionnaire

import checkboxquestion from "../components/checkboxquestion.vue";
import router from "../router";


// db.changes().on("change", function() {
//   console.log("Ch-Ch-Changes");
// });

export default {
  name: "resultats",
  mounted() {},
  computed: {
    questionnaire: {
      get() {
        return this.$store.getters.getQuestionnaire(0);
      },
    }
  },

  data() {
    return {};
  },
  components: {
    CheckboxQuestion: checkboxquestion
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
    }
  },
  computed: {}
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
