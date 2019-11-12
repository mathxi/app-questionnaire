<template>
  <div class="resultats">
    <div class="center__elem">
      <h1>Vos résultats</h1>
      <div class="md-subhead">Total questions: {{questionnaire.questions.length}}</div>
      <md-card v-for="curQuestion in questionnaire.questions" v-bind:key="curQuestion.idQuestion">
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
      }
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
      for (let index = 0; index != curQuestion.choices.length; index++) {
        let isTrue = curQuestion.trueAnswer.some(currentTrue => {
          console.log("id egaux",curQuestion.choices[index].idChoice == currentTrue.idChoice)
          console.log("valeurs egaux",curQuestion.choices[index].value == currentTrue.value)
          return (
            curQuestion.choices[index].idChoice == currentTrue.idChoice &&
            curQuestion.choices[index].value == currentTrue.value
          );
        });
        console.log("value find ", isTrue);
      }
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
