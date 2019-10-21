<template>
  <div class="about">
    <h1>This is an about page</h1>
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
    db.get("MathieuJanioSurveyBadass")
      .then(doc => {
        console.log("doc= ", doc);
      })
      .catch(function(err) {
        console.log(err);
      });

    db.put(this.user, { force: true })
      .then(function(response) {
        console.log("put response", response);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  data() {
    return {
      user: {
        _id: "MathieuJanioSurveyBadass",
        name: "Mathieu",
        surname: "Janio",
        compagny: "SurveyBadass",
        surveys: []
      }
    };
  }
};
</script>