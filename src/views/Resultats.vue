<template>
  <div class="home">
    <div class="center__elem">
      <h1>Vos résultats</h1>
      <div class="md-subhead">Total questions: {{user.surveys[idSurvey].questions.length}}</div>
      <md-card
        v-for="question in user.surveys[idSurvey].questions"
        v-bind:key="question.idQuestion"
      >
        <RadioQuestion v-if="question.type === 'radio'" :question="question"></RadioQuestion>
        <CheckboxQuestion v-else-if="question.type === 'checkbox'" :question="question"></CheckboxQuestion>
      </md-card>
      <pre>{{user.surveys[idSurvey].questions}}</pre>
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

db.changes().on("change", function() {
  console.log("Ch-Ch-Changes");
});

export default {
  name: "resultats",
  mounted() {
    const idUser = this.$route.query.idUser;
    db.get(idUser)
      .then(doc => {
        console.log("doc= ", doc);
        this.user = doc;
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
